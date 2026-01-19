'use client';

import Link from 'next/link';

export default function MainContent() {
  return (
    <main className="flex-1 min-w-0">
      {/* Startup Callout */}
      <div className="callout mb-8">
        <p className="text-gray-700">
          I&apos;m building <Link href="https://tryinspector.com" className="text-primary font-semibold">Inspector</Link> (YC F25), 
          an AI IDE for front-end development. Try the{' '}
          <Link href="https://tryinspector.com" className="text-primary">public beta</Link>.
        </p>
      </div>

      {/* About Me */}
      <section className="mb-8">
        <p className="mb-4">
          <strong>About Me:</strong> I&apos;m a builder and researcher at the intersection of AI, developer tools, and 
          human-computer interaction. I&apos;m passionate about making powerful AI tools accessible to everyone—whether 
          that&apos;s helping developers ship UIs faster or enabling small business owners to leverage generative AI 
          in their workflows.
        </p>
        <p className="mb-4">
          Currently, I&apos;m the Co-Founder and CEO of <strong>Inspector</strong>, a Y Combinator-backed startup 
          building an AI IDE for front-end development. Inspector lets developers visually select elements and 
          edit code within the browser context, bridging the gap between design and implementation.
        </p>
      </section>

      {/* Research */}
      <section className="mb-8">
        <p className="mb-4">
          <strong>Research:</strong> My research spans human-computer interaction, AI systems, and developer tools. 
          I&apos;ve worked on debugging tools for RAG (Retrieval-Augmented Generation) pipelines and studied how 
          small businesses integrate generative AI into their workflows.
        </p>
        <p className="mb-4">
          I&apos;ve had the privilege of conducting research at <Link href="https://hcii.cmu.edu" className="text-primary">Carnegie Mellon&apos;s 
          Human-Computer Interaction Institute</Link> and <Link href="https://eecs.berkeley.edu" className="text-primary">UC Berkeley EECS</Link>, 
          collaborating with researchers like <Link href="https://sh-reya.com" className="text-primary">Shreya Shankar</Link>,{' '}
          <Link href="https://aakash.xyz" className="text-primary">Aakash Gautam</Link>, Yasmine Kotturi, Jeffrey P. Bigham, and Aditya G. Parameswaran.
        </p>
      </section>

      {/* Industry Experience */}
      <section className="mb-8">
        <p className="mb-4">
          <strong>Industry Experience:</strong> Before starting Inspector, I interned at{' '}
          <Link href="https://character.ai" className="text-primary">Character.AI</Link>, where I worked on 
          both technical engineering and growth/marketing initiatives. This experience gave me a unique 
          perspective on building AI products that users love.
        </p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <p>
          <strong>Education:</strong> I&apos;m studying Computer Science at the University of Pittsburgh (Class of 2026). 
          My coursework and research have focused on machine learning, HCI, and systems.
        </p>
      </section>

      <hr className="my-8" />

      {/* Publications */}
      <section>
        <h2 className="text-2xl font-serif text-gray-900 mb-4">Publications</h2>
        <p className="text-gray-600 mb-6">
          I publish in human-computer interaction and AI systems venues including CHI, CSCW, and CHIWORK.
        </p>

        <div className="space-y-6">
          <PublicationItem 
            title="Towards Designing for Resilience: Community-Centered Deployment of an AI Business Planning Tool in a Pittsburgh Small Business Center"
            authors="Quentin Romero Lauro, Aakash Gautam, Yasmine Kotturi"
            venue="CHI 2026 (to appear)"
            links={[]}
          />
          <PublicationItem 
            title="RAG Without the Lag: Interactive Debugging for Retrieval-Augmented Generation Pipelines"
            authors="Quentin Romero Lauro*, Shreya Shankar*, Sepanta Zeighami, Aditya G. Parameswaran"
            venue="CHI 2026 (to appear)"
            note="* Co-first authors"
            links={[
              { label: 'Paper', href: 'https://arxiv.org/abs/2504.13587' },
            ]}
          />
          <PublicationItem 
            title="BizChat: Scaffolding AI-Powered Business Planning for Small Business Owners Across Digital Skill Levels"
            authors="Quentin Romero Lauro, Aakash Gautam, Yasmine Kotturi"
            venue="CHIWORK 2025"
            links={[
              { label: 'Paper', href: 'https://arxiv.org/abs/2505.08493' },
            ]}
          />
          <PublicationItem 
            title="Exploring the Role of Social Support When Integrating Generative AI in Small Business Workflows"
            authors="Quentin Romero Lauro, Jeffrey P. Bigham, Yasmine Kotturi"
            venue="CSCW Companion 2024"
            links={[
              { label: 'Paper', href: 'https://arxiv.org/abs/2407.21404' },
            ]}
          />
        </div>
      </section>
    </main>
  );
}

interface PublicationItemProps {
  title: string;
  authors: string;
  venue: string;
  note?: string;
  links: { label: string; href: string }[];
}

function PublicationItem({ title, authors, venue, note, links }: PublicationItemProps) {
  return (
    <div className="border-l-2 border-gray-200 pl-4">
      <h3 className="text-base font-serif text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-1">{authors}</p>
      {note && <p className="text-xs text-gray-400 mb-1">{note}</p>}
      <p className="text-sm text-gray-500 mb-2">{venue}</p>
      {links.length > 0 && (
        <div className="flex gap-4">
          {links.map((link) => (
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
  );
}
