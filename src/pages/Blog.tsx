
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarIcon, Clock, Tag, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  author: string;
  category: string;
  read_time: string;
  published_at: string;
}

const BlogContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .order('published_at', { ascending: false });
        
        if (error) {
          console.error('Error fetching blog posts:', error);
          return;
        }
        
        if (data) {
          setPosts(data as BlogPost[]);
          
          // Extract unique categories
          const uniqueCategories = ['All', ...new Set(data.map(post => post.category))];
          setCategories(uniqueCategories);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchBlogPosts();
  }, []);
  
  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-pocuro-blue to-pocuro-blue/90 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pocuro Blog</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Insights and updates on privacy-first technologies, personal data management, and more.
            </p>
          </div>
        </section>
        
        {/* Blog posts */}
        <section className="py-16 px-4 bg-pocuro-soft-white dark:bg-pocuro-deep-charcoal">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="All" className="mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap gap-2 mb-8">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="flex-shrink-0"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value={activeCategory} className="mt-0">
                {loading ? (
                  <div className="text-center py-8">Loading blog posts...</div>
                ) : filteredPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map(post => (
                      <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={post.featured_image} 
                            alt={post.title} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-1 bg-pocuro-blue/10 dark:bg-pocuro-blue/20 text-pocuro-blue rounded">
                              {post.category}
                            </span>
                            <span className="text-xs text-pocuro-slate-gray dark:text-pocuro-cool-gray flex items-center">
                              <Clock size={12} className="mr-1" /> {post.read_time}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{post.title}</CardTitle>
                          <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="flex items-center text-sm text-pocuro-slate-gray dark:text-pocuro-cool-gray">
                            <User size={14} className="mr-1" />
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <CalendarIcon size={14} className="mr-1" />
                            <span>{formatDate(post.published_at)}</span>
                          </div>
                        </CardContent>
                        
                        <CardFooter>
                          <Button 
                            variant="ghost" 
                            className="text-pocuro-blue hover:text-pocuro-blue/90 p-0"
                            onClick={() => {
                              // This would typically link to the full blog post
                              console.log(`Reading blog post: ${post.slug}`);
                            }}
                          >
                            Read More
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">No posts found in this category.</div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <ThemeProvider>
      <BlogContent />
    </ThemeProvider>
  );
};

export default Blog;
