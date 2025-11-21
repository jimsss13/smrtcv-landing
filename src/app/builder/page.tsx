"use client";

import { useState, useEffect } from "react";
import { useResumeStore } from "@/stores/resumeStore";

// UPDATED IMPORTS: Pointing to the new 'builder' folder
import ResumeForm from "@/components/builder/ResumeForm";
import DesignPanel from "@/components/builder/DesignPanel";

// Import individual 'Classic' components
import {
  Awards,
  Certificates,
  Education,
  Experience,
  Header,
  Interests,
  Projects,
  Publications,
  References,
  Skills,
  Volunteer,
} from "@/components/builder/resume"; // Updated path

// Import 'Traditional' preview
import { ResumePreviewTraditional } from "@/components/builder/traditional/ResumePreviewTraditional"; // Updated path

const TEMPLATE_KEY = 'selectedTemplate';

export default function BuilderPage() {
  const resume = useResumeStore((state) => state.resume);
  const [isClient, setIsClient] = useState(false);
  const [panelView, setPanelView] = useState<'edit' | 'design'>('edit');
  const [selectedTemplate, setSelectedTemplate] = useState('classic');

  useEffect(() => {
    setIsClient(true);
    const savedTemplate = localStorage.getItem(TEMPLATE_KEY);
    if (savedTemplate) {
      setSelectedTemplate(savedTemplate);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(TEMPLATE_KEY, selectedTemplate);
    }
  }, [selectedTemplate, isClient]);

  if (!isClient) return null;

  const renderPreview = () => {
    switch (selectedTemplate) {
      case 'classic':
        return (
          <div className="bg-white text-gray-900 p-10 leading-relaxed shadow-md w-[210mm] min-h-[297mm] mb-8 print:shadow-none print:mb-0 flex flex-col justify-start">
            <Header basics={resume.basics} />
            <Experience work={resume.work} />
            <Education education={resume.education} />
            <Skills skills={resume.skills} />
            <Projects projects={resume.projects} />
            <Awards awards={resume.awards} />
            <Certificates certificates={resume.certificates} />
            <Volunteer volunteer={resume.volunteer} />
            <Publications publications={resume.publications} />
            <Interests interests={resume.interests} />
            <References references={resume.references} />
          </div>
        );
      case 'traditional':
        return <ResumePreviewTraditional data={resume} />;
      default:
        return <div className="bg-white p-10">Template not found</div>;
    }
  };

  return (
    <main className="flex flex-col gap-8 p-8 bg-gray-100 h-[calc(100vh-64px)] overflow-hidden text-black">
      <div className="flex flex-col md:flex-row gap-8 flex-grow overflow-hidden">
        {/* LEFT PANEL */}
        <div className="md:w-1/3 overflow-y-auto">
          <div className="flex items-center justify-center mb-4 bg-gray-200 p-1 rounded-lg">
            <button onClick={() => setPanelView('edit')} className={`w-1/2 py-2 rounded-md font-semibold transition-colors ${panelView === 'edit' ? 'bg-white text-blue-600 shadow' : 'text-gray-600 hover:bg-gray-300'}`}>Edit</button>
            <button onClick={() => setPanelView('design')} className={`w-1/2 py-2 rounded-md font-semibold transition-colors ${panelView === 'design' ? 'bg-white text-blue-600 shadow' : 'text-gray-600 hover:bg-gray-300'}`}>Templates</button>
          </div>
          {panelView === 'edit' && <ResumeForm selectedTemplate={selectedTemplate} />}
          {panelView === 'design' && <DesignPanel selectedTemplate={selectedTemplate} onTemplateSelect={setSelectedTemplate} />}
        </div>
        
        {/* RIGHT PANEL */}
        <div className="md:w-2/3 flex justify-center overflow-y-auto bg-gray-500/10 rounded-xl p-8">
          {renderPreview()}
        </div>
      </div>
    </main>
  );
}