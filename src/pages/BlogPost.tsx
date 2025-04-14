
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarIcon, Clock, Tag, User } from 'lucide-react';
import { fetchBlogPost, BlogPost } from '@/services/blogService';

const BlogPostContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
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
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    }
    
    loadBlogPost();
  }, [slug]);
  
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
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading blog post...</p>
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
          <div className="text-center max-w-lg px-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{error || 'The blog post you are looking for could not be found.'}</p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Posts
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24">
        {/* Featured image */}
        <div className="w-full h-64 md:h-96 relative">
          <img 
            src={post.featured_image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="container mx-auto px-4 py-8">
              <span className="inline-block px-3 py-1 text-sm bg-blue-600 text-white rounded mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
        
        {/* Blog content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon size={16} className="mr-2" />
                <span>{formatDate(post.published_at)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.read_time}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                <span>{post.category}</span>
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300" 
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link to="/blog">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const BlogPostPage: React.FC = () => {
  return (
    <ThemeProvider>
      <BlogPostContent />
    </ThemeProvider>
  );
};

export default BlogPostPage;
