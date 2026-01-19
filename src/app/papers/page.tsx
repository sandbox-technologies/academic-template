import Header from '@/components/Header';
import Link from 'next/link';

interface Publication {
  year: number;
  title: string;
  authors: string;
  venue: string;
  note?: string;
  links: { label: string; href: string }[];
}

const publications: Publication[] = [
  {
    year: 2026,
    title: 'Towards Designing for Resilience: Community-Centered Deployment of an AI Business Planning Tool in a Pittsburgh Small Business Center',
    authors: 'Quentin Romero Lauro, Aakash Gautam, Yasmine Kotturi',
    venue: 'CHI 2026 (to appear)',
    links: [],
  },
  {
    year: 2026,
    title: 'RAG Without the Lag: Interactive Debugging for Retrieval-Augmented Generation Pipelines',
    authors: 'Quentin Romero Lauro*, Shreya Shankar*, Sepanta Zeighami, Aditya G. Parameswaran',
    venue: 'CHI 2026 (to appear)',
    note: '* Co-first authors',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2504.13587' },
    ],
  },
  {
    year: 2025,
    title: 'BizChat: Scaffolding AI-Powered Business Planning for Small Business Owners Across Digital Skill Levels',
    authors: 'Quentin Romero Lauro, Aakash Gautam, Yasmine Kotturi',
    venue: 'CHIWORK 2025 (Adjunct)',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2505.08493' },
    ],
  },
  {
    year: 2024,
    title: 'Exploring the Role of Social Support When Integrating Generative AI in Small Business Workflows',
    authors: 'Quentin Romero Lauro, Jeffrey P. Bigham, Yasmine Kotturi',
    venue: 'CSCW Companion 2024',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2407.21404' },
    ],
  },
];

export default function PapersPage() {
  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">Publications</h1>
        
        <p className="text-gray-600 mb-8">
          My research spans human-computer interaction, AI systems, and tools for small businesses. 
          I publish in venues like CHI, CSCW, and CHIWORK.
        </p>

        {years.map(year => (
          <div key={year} className="mb-10">
            <h2 className="text-xl font-serif text-gray-800 mb-4 border-b border-gray-200 pb-2">
              {year}
            </h2>
            <div className="space-y-6">
              {publications
                .filter(p => p.year === year)
                .map((pub, i) => (
                  <div key={i} className="border-l-2 border-gray-200 pl-4">
                    <h3 className="text-base font-serif text-gray-900 mb-1">{pub.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                    {pub.note && <p className="text-xs text-gray-400 mb-1">{pub.note}</p>}
                    <p className="text-sm text-gray-500 mb-2">{pub.venue}</p>
                    {pub.links.length > 0 && (
                      <div className="flex gap-4">
                        {pub.links.map((link) => (
                          <Link 
                            key={link.label}
                            href={link.href} 
                            className="text-sm text-primary hover:underline"
                          >
                            [{link.label}]
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
