import { supabase } from '@/integrations/supabase/client';
import { Blog } from '@/types/supabase';

export type BlogPost = Blog;

export async function fetchBlogPosts() {
  try {
    console.log('Fetching blog posts...');
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('published_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
    
    console.log('Fetched blog posts:', data);
    return { success: true, data: data as BlogPost[] };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { 
      success: false, 
      message: 'Failed to fetch blog posts', 
      data: [] as BlogPost[] 
    };
  }
}

export async function fetchBlogPost(slug: string) {
  try {
    console.log(`Fetching blog post with slug: ${slug}`);
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) {
      console.error(`Error fetching blog post with slug ${slug}:`, error);
      throw error;
    }
    
    console.log('Fetched blog post:', data);
    return { success: true, data: data as BlogPost };
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return { 
      success: false, 
      message: 'Failed to fetch blog post',
      data: null
    };
  }
}

export async function fetchBlogCategories() {
  try {
    console.log('Fetching blog categories...');
    const { data, error } = await supabase
      .from('blogs')
      .select('category');
    
    if (error) {
      console.error('Error fetching blog categories:', error);
      throw error;
    }
    
    // Extract unique categories
    const categories = ['All', ...new Set(data.map(item => item.category))];
    console.log('Fetched blog categories:', categories);
    
    return { success: true, data: categories };
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    return { 
      success: false, 
      message: 'Failed to fetch blog categories',
      data: ['All']
    };
  }
}

// This function will update blog posts with the new content (for development only)
export async function updateBlogPosts() {
  try {
    const blogPosts = [
      {
        title: "Getting Started with Pocuro",
        slug: "getting-started-with-pocuro",
        excerpt: "Welcome to PocuroMe, your personal AI-powered life assistant.",
        content: `Welcome to PocuroMe, your personal AI-powered life assistant.

PocuroMe is designed for individuals, solopreneurs, and privacy-conscious users who want to take control of their lives—securely. Whether you're managing your documents, planning your days, tracking your health, or building your personal brand, PocuroMe is your digital partner for an organized, empowered life.

## Why Choose PocuroMe?
Your data, your rules. Everything stays on your device unless you decide otherwise.

AI that works for you, not on you. Local-first AI means your queries stay private.

Modular life management. Only use the tools you need—nothing more, nothing less.

## Your First Steps
Create your secure vault. Store ID cards, financial docs, and contracts safely.

Set up your planner. Add tasks, appointments, reminders—PocuroMe adapts to you.

Explore the modules. Try Health, Finance, or LifeCircle to start customizing your workflow.

Stay offline or sync securely. Work fully offline, or enable encrypted sync across devices.

Whether you're launching a new project or simply looking to get organized, PocuroMe is built for peace of mind and productivity.

## Tip: Start with just one module. Most users begin with the Personal Vault or Planner before expanding.`,
        featured_image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        author: "Pocuro Team",
        category: "Tutorials",
        read_time: "5 min read"
      },
      {
        title: "Security Best Practices with Pocuro",
        slug: "security-best-practices",
        excerpt: "At PocuroMe, privacy isn't just a feature—it's our foundation.",
        content: `At PocuroMe, privacy isn't just a feature—it's our foundation.

Our platform was built with zero-knowledge encryption, offline-first architecture, and strict user control policies. Here's how to get the most out of your PocuroMe experience while keeping your data safe.

## Privacy Principles We Live By:
Zero-knowledge: We can't read your data—even if we wanted to.

Local-first AI: Sensitive tasks are processed using private, on-device models.

Encrypted sync: If you sync, it's end-to-end encrypted with tools like Syncthing.

## Tips for Maximum Security
Enable Vault Encryption: Use strong passphrases and avoid reusing passwords.

Offline by Default: Stick to offline mode unless you need syncing.

Use Personal IDs Carefully: Store scanned IDs in the Vault, not in unstructured notes.

Avoid cloud LLMs for sensitive prompts. Use the local assistant (Ollama) when handling private or identifiable data.

Back up securely. Enable encrypted local backups to prevent data loss.

## Want full transparency? Check out our Tech Architecture Overview for the nitty-gritty.

We're committed to building a future where personal data stays personal.`,
        featured_image: "https://images.unsplash.com/photo-1563013544-08f9b4106ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        author: "Security Team",
        category: "Security",
        read_time: "8 min read"
      },
      {
        title: "Product Roadmap 2025",
        slug: "product-roadmap-2025",
        excerpt: "Here's a sneak peek at what's ahead for PocuroMe this year.",
        content: `Here's a sneak peek at what's ahead for PocuroMe this year. Our goal: build the world's most intuitive, private, and powerful personal planning ecosystem.

## Upcoming Milestones

| Milestone | Target | What It Means for You |
|-----------|--------|------------------------|
| PocuroBiz Pilot Program | Q2 2025 | Our ERP launches with select business clients—proving the shared AI core. |
| PocuroBiz MVP Launch | End of Q2 2025 | ERP platform for small businesses goes live. Shared modules with PRP. |
| PocuroMe MVP Launch | End of Q3 2025 | The PRP enters the world. Private Vault, Planner, Finance, Health and more. |
| Cross-Device Sync | Q3 2025 | Secure syncing across devices via Syncthing. Privacy uncompromised. |
| Health Module (Beta) | Q4 2025 | Local AI-powered wellness suggestions and habit tracking. |
| Smart Document Scanner | Q4 2025 | Smarter scanning, OCR upgrades, and categorization with AI. |
| Mobile & Desktop App (Tauri) | Post-MVP | Full offline desktop app with integrated AI and encrypted storage. |

## What Comes Next?
Modular Expansion: More customizable tools for finance, branding, and journaling.

Privacy Layer Finalization: Vault encryption, redacted AI prompts, GDPR-level transparency.

Community-Powered Feedback: Our roadmap evolves with your needs. Join our early community to shape what's next.

## Pocuro is a movement toward data sovereignty. And this is only the beginning.`,
        featured_image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        author: "Product Team",
        category: "Announcements",
        read_time: "6 min read"
      }
    ];
    
    for (const post of blogPosts) {
      const { data, error } = await supabase
        .from('blogs')
        .upsert({
          ...post,
          published_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_published: true
        })
        .select();
        
      if (error) {
        console.error(`Error updating blog post ${post.slug}:`, error);
      } else {
        console.log(`Updated blog post ${post.slug}:`, data);
      }
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error updating blog posts:', error);
    return { success: false, message: 'Failed to update blog posts' };
  }
}
