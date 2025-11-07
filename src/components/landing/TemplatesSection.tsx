'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

// Co-located static data for templates
const templateData = [
  { id: 'template1', name: 'Classic', imageUrl: '/templates/classic.png' },
  { id: 'template2', name: 'Modern', imageUrl: '/templates/modern.png' },
  { id: 'template3', name: 'Creative', imageUrl: '/templates/creative.png' },
  { id: 'template4', name: 'Professional', imageUrl: '/templates/professional.png' },
  { id: 'template5', name: 'Minimalist', imageUrl: '/templates/minimalist.png' },
];

export const TemplatesSection = () => {
  // Setup Embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Effect to update the selected index
  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    onSelect(); 
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Get the currently selected template
  const selectedTemplate = templateData[selectedIndex];

  return (
    <section className="bg-background-light py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        {/* Main Headings */}
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Stand out with templates that work!
        </h2>
        <p className="mt-4 text-lg text-foreground-secondary">
          Start fresh or choose a battle-tested resume.
        </p>

        {/* Template Info */}
        <div className="mt-12 flex flex-col items-center">
          <span className="text-2xl font-semibold text-foreground">
            {selectedTemplate?.name || 'Template'}
          </span>
          <span className="mt-1 text-sm text-foreground-muted">
            45,000 users chose this template
          </span>
        </div>

        {/* --- Carousel Container --- */}
        <div className="relative mt-8">
          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* Flex container for slides */}
            <div className="flex">
              {templateData.map((template, index) => (
                <div
                  key={template.id}
                  className="relative min-w-0 flex-shrink-0 basis-4/5 md:basis-1/2 lg:basis-1/3"

                >
                  <div
                    className={cn(
                      'relative aspect-[3/4] w-full rounded-lg bg-background-card border border-border transition-all duration-300 ease-in-out',
                      index === selectedIndex
                        ? 'scale-100 opacity-100' // Active slide
                        : 'scale-90 opacity-60' // Inactive slides
                    )}
                  >
                    {/* Placeholder content */}
                    <div className="flex h-full w-full items-center justify-center">
                      <p className="text-foreground-muted">{template.name}</p>
                    </div>

                    {index === selectedIndex && (
                      <Button 
                        size="default" 
                        variant="secondary" 
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 shadow-md"
                      >
                        Use this template
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={scrollPrev}
            variant="outline"
            size="icon"
            aria-label="Previous template"
            className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-16 md:left-24 lg:left-32 z-10 rounded-full bg-background-card/50 backdrop-blur-sm"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={scrollNext}
            variant="outline"
            size="icon"
            aria-label="Next template"
            className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-16 md:right-24 lg:right-32 z-10 rounded-full bg-background-card/50 backdrop-blur-sm"
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};