import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Search } from 'lucide-react';

const faqData = [
  {
    id: 'faq-1',
    question: 'How does the AI resume builder work?',
    answer:
      'Our AI analyzes your input, suggests improvements, and formats your resume using industry-approved templates. It ensures your resume is polished, ATS-friendly, and tailored to your career goals.',
  },
  {
    id: 'faq-2',
    question: 'Can I customize the templates?',
    answer:
      'Yes! All templates are fully customizable. You can change fonts, colors, spacing, and rearrange sections to fit your personal brand and the job you are applying for.',
  },
  {
    id: 'faq-3',
    question: 'Will my resume be ATS-friendly?',
    answer:
      'Absolutely. Our templates are designed and tested to be fully compatible with modern Applicant Tracking Systems (ATS). The AI also helps you include relevant keywords to pass ATS scans.',
  },
  {
    id: 'faq-4',
    question: 'Do I need design skills to use the builder?',
    answer:
      'Not at all. The builder is designed for everyone. Our professional templates and AI suggestions handle all the design work for you, ensuring a beautiful and effective resume every time.',
  },
  {
    id: 'faq-5',
    question: 'Do I need design skills to use the builder?',
    answer:
      'This is a duplicate question from the wireframe, but yes, you do not need any design skills. The tool handles it for you.',
  },
  {
    id: 'faq-6',
    question: 'Can I download my resume?',
    answer:
      'Yes, you can download your resume in multiple formats, including PDF, DOCX, and TXT, as many times as you like. You can also share a unique web link to your resume.',
  },
];

export default function FaqPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-foreground-secondary">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        {/* Layout: 2/3 for content, 1/3 for image */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left Column: Search + Accordion */}
          <div className="md:col-span-2">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search Bar"
                className="w-full rounded-lg border border-border bg-background-card p-4 pl-10 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground-muted" />
            </div>

            {/* Accordion List */}
            <Accordion type="single" collapsible className="mt-8 w-full">
              {faqData.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-4 text-sm text-foreground-muted">...See More</p>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="flex items-start justify-center">
            <div className="sticky top-24 w-full max-w-sm rounded-lg border border-border bg-background-light p-4 shadow-sm" style={{ aspectRatio: '3/4' }}>
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-foreground-muted">*Display Picture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}