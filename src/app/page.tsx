import { HeroSection } from '@/components/landing/HeroSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { TemplatesSection } from '@/components/landing/TemplatesSection';
import { Testimonial } from '@/types';

const testimonialData: Testimonial[] = [
  {
    id: 'testimonial-1',
    rating: 5,
    text: "Made my job hunt easier. Their templates are read by top companies and ATS friendly. I got 3 interviews in a week!",
    author: "Martha S.",
    date: "2 days ago",
  },
    {
    id: 'testimonial-2',
    rating: 5,
    text: "Made my job hunt easier. Their templates are read by top companies and ATS friendly. I got 3 interviews in a week!",
    author: "Martha S.",
    date: "2 days ago",
  },
      {
    id: 'testimonial-3',
    rating: 5,
    text: "Made my job hunt easier. Their templates are read by top companies and ATS friendly. I got 3 interviews in a week!",
    author: "Martha S.",
    date: "2 days ago",
  },
];

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection testimonials={testimonialData} />
      <HowItWorksSection />
      <TemplatesSection />
    </>
  );
}