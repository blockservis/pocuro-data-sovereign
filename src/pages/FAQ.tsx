
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { FAQCategory, FAQItem } from '@/types/supabase';
import { Link } from 'react-router-dom';

const FAQContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [categories, setCategories] = useState<FAQCategory[]>([]);
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  useEffect(() => {
    async function fetchFAQData() {
      try {
        setLoading(true);
        
        // Fetch categories
        const { data: categoriesData, error: categoriesError } = await (supabase as any)
          .from('faq_categories')
          .select('*')
          .order('display_order', { ascending: true });
        
        if (categoriesError) {
          console.error('Error fetching FAQ categories:', categoriesError);
          return;
        }
        
        // Fetch FAQ items
        const { data: itemsData, error: itemsError } = await (supabase as any)
          .from('faq_items')
          .select('*')
          .order('display_order', { ascending: true });
        
        if (itemsError) {
          console.error('Error fetching FAQ items:', itemsError);
          return;
        }
        
        if (categoriesData && itemsData) {
          setCategories(categoriesData as FAQCategory[]);
          setFaqItems(itemsData as FAQItem[]);
          
          if (categoriesData.length > 0) {
            setActiveCategory('all');
          }
        }
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchFAQData();
  }, []);
  
  const filteredItems = activeCategory === 'all'
    ? faqItems
    : faqItems.filter(item => {
        const category = categories.find(cat => cat.id === item.category_id);
        return category?.slug === activeCategory;
      });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about Pocuro's privacy-first approach and features.
            </p>
          </div>
          
          {loading ? (
            <div className="text-center py-8">Loading FAQ...</div>
          ) : (
            <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveCategory}>
              <TabsList className="mb-8 flex flex-wrap justify-center">
                <TabsTrigger value="all">All Questions</TabsTrigger>
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.slug}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value={activeCategory} className="mt-0">
                <Accordion type="single" collapsible className="w-full">
                  {filteredItems.map((item, index) => (
                    <AccordionItem key={item.id} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          )}
          
          <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Still have questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you couldn't find the answer you were looking for, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/help-center" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
              >
                Visit Help Center
              </Link>
              <a 
                href="mailto:support@pocuro.com" 
                className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-md font-medium"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <ThemeProvider>
      <FAQContent />
    </ThemeProvider>
  );
};

export default FAQ;
