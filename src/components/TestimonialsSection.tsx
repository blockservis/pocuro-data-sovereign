
import React, { useEffect, useState } from 'react';
import { getTestimonials, Testimonial } from '@/services/testimonialsService';
import { TestimonialsSection as MarqueeTestimonialsSection } from '@/components/ui/testimonials-with-marquee';

const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  const formatTestimonialsForMarquee = () => {
    return testimonials.map(testimonial => ({
      author: {
        name: testimonial.author_name,
        handle: testimonial.author_handle,
        title: testimonial.author_title,
        avatar: testimonial.author_avatar
      },
      text: testimonial.content,
      href: testimonial.href
    }));
  };

  if (loading) {
    return (
      <section className="py-20 px-4 md:px-8 bg-pocuro-soft-white dark:bg-pocuro-deep-charcoal" id="testimonials">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
              Trusted by Privacy-Conscious Users
            </h2>
            <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-2xl mx-auto">
              Loading testimonials...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <MarqueeTestimonialsSection
      title="Trusted by Privacy-Conscious Users"
      description="Hear from people who've taken back control of their personal data"
      testimonials={formatTestimonialsForMarquee()}
      className="py-20 bg-pocuro-soft-white dark:bg-pocuro-deep-charcoal"
    />
  );
};

export default TestimonialsSection;
