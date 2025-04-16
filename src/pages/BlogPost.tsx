
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CalendarIcon, Clock, User, Tag } from 'lucide-react';
import { fetchBlogPost, BlogPost as BlogPostType } from '@/services/blogService';

const BlogPostContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function loadBlogPost() {
      if (!slug) return;
      
      try {
        setLoading(true);
        const response = await fetchBlogPost(slug);
        
        if (response.success && response.data) {
          setPost(response.data);
        } else {
          setError(response.message || 'Failed to load blog post');
          navigate('/blog', { replace: true });
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    }
    
    loadBlogPost();
  }, [slug, navigate]);
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
        
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pocuro-blue mx-auto"></div>
            <p className="mt-4 text-pocuro-slate-gray dark:text-pocuro-cool-gray">Loading blog post...</p>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
        
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-red-500 mb-4">Failed to load blog post</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero section - Updated to match home page style */}
        <section className="bg-gradient-to-r from-pocuro-blue to-pocuro-light-blue dark:from-pocuro-dark-navy dark:to-pocuro-blue text-white py-16 px-4">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Link 
                to="/blog" 
                className="text-white bg-pocuro-blue/20 hover:bg-pocuro-blue/30 px-3 py-1 rounded-full flex items-center gap-1 text-sm"
              >
                <ArrowLeft size={14} />
                <span>Back to Blog</span>
              </Link>
              
              <span className="text-xs px-2 py-1 bg-pocuro-blue/20 text-white rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200">
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon size={16} />
                <span>{formatDate(post.published_at)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{post.read_time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={16} />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog content */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="prose prose-lg dark:prose-invert prose-blue max-w-none">
                  {/* Render HTML content safely */}
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-12 flex justify-between">
              <Button asChild variant="outline">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Posts
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const BlogPost: React.FC = () => {
  return (
    <ThemeProvider>
      <BlogPostContent />
    </ThemeProvider>
  );
};

export default BlogPost;
