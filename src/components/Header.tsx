'use client';

import Link from 'next/link';
import { Twitter, Github } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Name/Logo */}
        <Link 
          href="/" 
          className="text-xl font-serif text-gray-900 hover:no-underline hover:text-gray-900"
        >
          Quentin Romero Lauro
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link 
            href="/" 
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:no-underline font-sans text-sm"
          >
            Home
          </Link>
          <Link 
            href="/papers" 
            className="text-gray-600 hover:text-gray-900 font-sans text-sm"
          >
            Papers
          </Link>
          <Link 
            href="/blog" 
            className="text-gray-600 hover:text-gray-900 font-sans text-sm"
          >
            Blog
          </Link>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 ml-4">
            <a 
              href="https://scholar.google.com/citations?user=QUENTIN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
              title="Google Scholar"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com/Qromerolauro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
              title="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://github.com/quentinrl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
              title="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
