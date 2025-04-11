
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Pocuro completely changed how I manage my personal documents and finances. The local AI processing gives me peace of mind knowing my data isn't being stored in some company's cloud.",
    author: "Alex Chen",
    title: "Small Business Owner",
    rating: 5,
  },
  {
    id: 2,
    content: "I've tried countless apps to organize my life, but Pocuro is the first one that actually respects my privacy while offering powerful AI features. It's like having a personal assistant that doesn't spy on you.",
    author: "Sarah Johnson",
    title: "Privacy Advocate",
    rating: 5,
  },
  {
    id: 3,
    content: "The encryption features in Pocuro are top-notch. As someone who works with sensitive client information, I finally feel confident that my data is truly secure.",
    author: "Miguel Rodriguez",
    title: "Financial Advisor",
    rating: 4,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-pocuro-soft-white dark:bg-pocuro-deep-charcoal" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pocuro-charcoal dark:text-white">
            Trusted by Privacy-Conscious Users
          </h2>
          <p className="text-xl text-pocuro-slate-gray dark:text-pocuro-cool-gray max-w-2xl mx-auto">
            Hear from people who've taken back control of their personal data.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white dark:bg-pocuro-dark-navy border border-pocuro-light-gray dark:border-pocuro-dark-slate rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? "text-pocuro-amber dark:text-pocuro-dark-amber fill-current" : "text-pocuro-light-gray dark:text-pocuro-dark-slate"} 
                  />
                ))}
              </div>
              
              <p className="text-pocuro-slate-gray dark:text-pocuro-cool-gray mb-6">
                "{testimonial.content}"
              </p>
              
              <div>
                <h4 className="font-medium text-pocuro-charcoal dark:text-white">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
