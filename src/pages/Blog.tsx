
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarIcon, Clock, Tag, User } from 'lucide-react';

const dummyPosts = [
  {
    id: 1,
    title: "Privacy-First AI: The Future of Personal Data Management",
    excerpt: "Learn how local AI processing is revolutionizing personal data management without compromising privacy.",
    date: "April 2, 2025",
    readTime: "5 min read",
    author: "Elena Patel",
    category: "Privacy",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000",
  },
  {
    id: 2,
    title: "5 Ways to Keep Your Financial Data Secure in 2025",
    excerpt: "Practical tips for securing your financial information in an increasingly connected world.",
    date: "March 28, 2025",
    readTime: "7 min read",
    author: "Marcus Chen",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000",
  },
  {
    id: 3,
    title: "The Myth of 'Anonymous' Data: Why Privacy Matters",
    excerpt: "An exploration of how supposedly anonymous data can still reveal personal information.",
    date: "March 15, 2025",
    readTime: "8 min read",
    author: "Sophia Rodriguez",
    category: "Privacy",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000",
  },
  {
    id: 4,
    title: "Getting Started with Pocuro: A Beginner's Guide",
    excerpt: "A step-by-step tutorial for setting up your privacy-first personal resource planner.",
    date: "March 10, 2025",
    readTime: "6 min read",
    author: "Jamal Wilson",
    category: "Tutorial",
    image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=2000",
  },
  {
    id: 5,
    title: "Local vs. Cloud Processing: Understanding the Trade-offs",
    excerpt: "An objective comparison of local and cloud processing for personal data applications.",
    date: "March 5, 2025",
    readTime: "10 min read",
    author: "Elena Patel",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000",
  },
  {
    id: 6,
    title: "The Psychology of Privacy: Why We Need Control Over Our Data",
    excerpt: "Research insights into why privacy and control matter for mental wellbeing.",
    date: "March 1, 2025",
    readTime: "9 min read",
    author: "Marcus Chen",
    category: "Research",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000",
  },
];

const categories = ["All", "Privacy", "Security", "Technology", "Tutorial", "Research"];

const BlogContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeCategory, setActiveCategory] = React.useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? dummyPosts 
    : dummyPosts.filter(post => post.category === activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24">
        {/* Hero section */}
        <section className="bg-pocuro-blue text-white py-16 px-4">
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
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8 w-full">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value={activeCategory} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map(post => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
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
                            <Clock size={12} className="mr-1" /> {post.readTime}
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
                          <span>{post.date}</span>
                        </div>
                      </CardContent>
                      
                      <CardFooter>
                        <Button variant="ghost" className="text-pocuro-blue hover:text-pocuro-blue/90 p-0">
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
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
