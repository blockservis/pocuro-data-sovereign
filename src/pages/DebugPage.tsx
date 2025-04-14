
import React, { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { EarlyAccessSignup } from '@/types/supabase';

const DebugPageContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [signups, setSignups] = useState<EarlyAccessSignup[]>([]);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [helpTopics, setHelpTopics] = useState<any[]>([]);
  const [faqCategories, setFaqCategories] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Fetch signups
        const { data: signupData, error: signupError } = await (supabase as any)
          .from('early_access_signups')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (signupError) {
          console.error('Error fetching signups:', signupError);
        } else {
          setSignups(signupData || []);
        }
        
        // Fetch blogs
        const { data: blogData, error: blogError } = await (supabase as any)
          .from('blogs')
          .select('*')
          .order('published_at', { ascending: false });
        
        if (blogError) {
          console.error('Error fetching blogs:', blogError);
        } else {
          setBlogs(blogData || []);
        }
        
        // Fetch help center topics
        const { data: helpData, error: helpError } = await (supabase as any)
          .from('help_center_topics')
          .select('*');
        
        if (helpError) {
          console.error('Error fetching help topics:', helpError);
        } else {
          setHelpTopics(helpData || []);
        }
        
        // Fetch FAQ categories
        const { data: faqData, error: faqError } = await (supabase as any)
          .from('faq_categories')
          .select('*');
        
        if (faqError) {
          console.error('Error fetching FAQ categories:', faqError);
        } else {
          setFaqCategories(faqData || []);
        }
      } catch (error) {
        console.error('Error fetching debug data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Debug Information</h1>
          
          {loading ? (
            <div className="text-center py-8">Loading data...</div>
          ) : (
            <div className="space-y-8">
              {/* Early Access Signups */}
              <Card>
                <CardHeader>
                  <CardTitle>Early Access Signups ({signups.length})</CardTitle>
                  <CardDescription>Recent signups for early access</CardDescription>
                </CardHeader>
                <CardContent>
                  {signups.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="p-2 text-left border">Email</th>
                            <th className="p-2 text-left border">Name</th>
                            <th className="p-2 text-left border">Created At</th>
                          </tr>
                        </thead>
                        <tbody>
                          {signups.map(signup => (
                            <tr key={signup.id} className="border-b">
                              <td className="p-2 border">{signup.email}</td>
                              <td className="p-2 border">{signup.name || 'N/A'}</td>
                              <td className="p-2 border">
                                {new Date(signup.created_at).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p>No signups found.</p>
                  )}
                </CardContent>
              </Card>
              
              {/* Blog Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>Blog Posts ({blogs.length})</CardTitle>
                  <CardDescription>Published blog posts in the database</CardDescription>
                </CardHeader>
                <CardContent>
                  {blogs.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="p-2 text-left border">Title</th>
                            <th className="p-2 text-left border">Slug</th>
                            <th className="p-2 text-left border">Category</th>
                            <th className="p-2 text-left border">Published</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blogs.map(blog => (
                            <tr key={blog.id} className="border-b">
                              <td className="p-2 border">{blog.title}</td>
                              <td className="p-2 border">{blog.slug}</td>
                              <td className="p-2 border">{blog.category}</td>
                              <td className="p-2 border">
                                {new Date(blog.published_at).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p>No blog posts found.</p>
                  )}
                </CardContent>
              </Card>
              
              {/* Help Center Topics */}
              <Card>
                <CardHeader>
                  <CardTitle>Help Center Topics ({helpTopics.length})</CardTitle>
                  <CardDescription>Available help center content</CardDescription>
                </CardHeader>
                <CardContent>
                  {helpTopics.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="p-2 text-left border">Topic</th>
                            <th className="p-2 text-left border">Updated At</th>
                          </tr>
                        </thead>
                        <tbody>
                          {helpTopics.map(topic => (
                            <tr key={topic.id} className="border-b">
                              <td className="p-2 border">{topic.topic}</td>
                              <td className="p-2 border">
                                {new Date(topic.updated_at).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p>No help center topics found.</p>
                  )}
                </CardContent>
              </Card>
              
              {/* FAQ Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>FAQ Categories ({faqCategories.length})</CardTitle>
                  <CardDescription>FAQ organization categories</CardDescription>
                </CardHeader>
                <CardContent>
                  {faqCategories.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="p-2 text-left border">Name</th>
                            <th className="p-2 text-left border">Slug</th>
                            <th className="p-2 text-left border">Display Order</th>
                          </tr>
                        </thead>
                        <tbody>
                          {faqCategories.map(category => (
                            <tr key={category.id} className="border-b">
                              <td className="p-2 border">{category.name}</td>
                              <td className="p-2 border">{category.slug}</td>
                              <td className="p-2 border">{category.display_order}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p>No FAQ categories found.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const DebugPage: React.FC = () => {
  return (
    <ThemeProvider>
      <DebugPageContent />
    </ThemeProvider>
  );
};

export default DebugPage;
