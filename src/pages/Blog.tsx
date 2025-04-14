
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarIcon, Clock, User } from 'lucide-react';
import { fetchBlogPosts, fetchBlogCategories, BlogPost } from '@/services/blogService';

const BlogContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadBlogData() {
      try {
        setLoading(true);
        const postsResponse = await fetchBlogPosts();
        const categoriesResponse = await fetchBlogCategories();
        
        if (postsResponse.success) {
          setPosts(postsResponse.data);
        }
        
        if (categoriesResponse.success) {
          // Fix the typing issue by ensuring we're setting string[] and not unknown[]
          if (Array.isArray(categoriesResponse.data)) {
            setCategories(categoriesResponse.data as string[]);
          }
        }
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadBlogData();
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
        {/* Hero section - Updated style to be more natural */}
        <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-16 px-4 shadow-lg">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pocuro Blog</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Insights and updates on privacy-first technologies, personal data management, and more.
            </p>
          </div>
        </section>
        
        {/* Blog posts */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
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
                            <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                              <Clock size={12} className="mr-1" /> {post.read_time}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{post.title}</CardTitle>
                          <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <User size={14} className="mr-1" />
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <CalendarIcon size={14} className="mr-1" />
                            <span>{formatDate(post.published_at)}</span>
                          </div>
                        </CardContent>
                        
                        <CardFooter>
                          <Link to={`/blog/${post.slug}`}>
                            <Button 
                              variant="ghost" 
                              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 p-0"
                            >
                              Read More
                            </Button>
                          </Link>
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
