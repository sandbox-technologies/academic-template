import Header from '@/components/Header';
import Link from 'next/link';

interface BlogPost {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    date: 'January 2026',
    title: 'Building Inspector: An AI IDE for Front-End Development',
    excerpt: 'Why we started Inspector and how we\'re rethinking the way developers build user interfaces. From Y Combinator to public beta.',
    slug: 'building-inspector',
  },
  {
    date: 'December 2025',
    title: 'What I Learned Interning at Character.AI',
    excerpt: 'Reflections on my summer at Character.AI, where I got to work on both engineering and marketing—and why that combination matters.',
    slug: 'character-ai-internship',
  },
  {
    date: 'October 2025',
    title: 'RAG Debugging: Making AI Systems Easier to Fix',
    excerpt: 'Our research on interactive debugging for RAG pipelines, and why current tools make it hard to understand what\'s going wrong.',
    slug: 'rag-debugging',
  },
  {
    date: 'August 2025',
    title: 'Helping Small Businesses Use AI',
    excerpt: 'Insights from our research on how small business owners adopt generative AI tools, and the critical role of social support.',
    slug: 'small-business-ai',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">Blog</h1>
        
        <p className="text-gray-600 mb-8">
          Thoughts on building, research, and the intersection of AI and developer tools.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border-b border-gray-100 pb-8">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h2 className="text-xl font-serif text-gray-900 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-primary text-sm mt-3 inline-block"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
