
import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* Mobile version - stacks testimonials in rows */}
          <div className="block w-full md:hidden overflow-hidden">
            <div className="group flex flex-col overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] [--duration:60s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
                {/* Double the testimonials to ensure seamless looping */}
                {[...Array(2)].map((_, setIndex) => (
                  testimonials.map((testimonial, i) => (
                    <div key={`mobile-${setIndex}-${i}`} className="my-2">
                      <TestimonialCard 
                        {...testimonial}
                      />
                    </div>
                  ))
                ))}
              </div>
            </div>
          </div>

          {/* Desktop version - horizontal row */}
          <div className="hidden md:block w-full overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {/* Double the testimonials to ensure seamless looping */}
                {[...Array(2)].map((_, setIndex) => (
                  testimonials.map((testimonial, i) => (
                    <TestimonialCard 
                      key={`desktop-${setIndex}-${i}`}
                      {...testimonial}
                    />
                  ))
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
          
          {/* Vertical gradients for mobile */}
          <div className="pointer-events-none absolute inset-x-0 top-0 block h-1/3 bg-gradient-to-b from-background md:hidden" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 block h-1/3 bg-gradient-to-t from-background md:hidden" />
        </div>
      </div>
    </section>
  );
}
