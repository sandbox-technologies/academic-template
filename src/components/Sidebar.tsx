'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-72 flex-shrink-0">
      {/* Profile Photo */}
      <div className="mb-6">
        <Image
          src="/profile.png"
          alt="Quentin Romero Lauro"
          width={260}
          height={260}
          className="profile-image w-full rounded"
          priority
        />
      </div>

      {/* Name and Title */}
      <h1 className="text-2xl font-serif text-gray-900 mb-2">Quentin Romero Lauro</h1>
      <p className="text-gray-600 text-sm leading-relaxed mb-1">
        Co-Founder & CEO, Inspector (YC F25)
      </p>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        University of Pittsburgh CS &apos;26
      </p>

      <hr className="my-4" />

      {/* Contact Links */}
      <div className="space-y-1 mb-4">
        <p>
          <Link href="mailto:quentin@tryinspector.com" className="text-primary text-sm">
            quentin@tryinspector.com
          </Link>
        </p>
        <p className="text-sm">
          <Link href="https://twitter.com/Qromerolauro" className="text-primary">Twitter</Link>
          {' · '}
          <Link href="https://github.com/quentinrl" className="text-primary">GitHub</Link>
          {' · '}
          <Link href="https://scholar.google.com" className="text-primary">Scholar</Link>
        </p>
      </div>

      <p className="mb-4">
        <Link href="/cv.pdf" className="text-primary text-sm">
          Curriculum Vitae (PDF)
        </Link>
      </p>

      <hr className="my-4" />

      {/* Research Experience */}
      <div className="mb-4">
        <h3 className="text-sm font-bold text-gray-900 mb-1">Research Experience</h3>
        <p className="text-sm leading-relaxed text-gray-600">
          <Link href="https://hcii.cmu.edu" className="text-primary">CMU HCII</Link>,{' '}
          <Link href="https://eecs.berkeley.edu" className="text-primary">UC Berkeley EECS</Link>
        </p>
      </div>

      {/* Industry Experience */}
      <div className="mb-4">
        <h3 className="text-sm font-bold text-gray-900 mb-1">Industry Experience</h3>
        <p className="text-sm leading-relaxed text-gray-600">
          <Link href="https://character.ai" className="text-primary">Character.AI</Link>
        </p>
      </div>

      {/* Collaborators */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-1">Research Collaborators</h3>
        <p className="text-sm leading-relaxed">
          <Link href="https://sh-reya.com" className="text-primary">Shreya Shankar</Link>,{' '}
          <Link href="https://aakash.xyz" className="text-primary">Aakash Gautam</Link>,{' '}
          <Link href="#" className="text-primary">Yasmine Kotturi</Link>,{' '}
          <Link href="#" className="text-primary">Jeffrey P. Bigham</Link>,{' '}
          <Link href="#" className="text-primary">Aditya G. Parameswaran</Link>
        </p>
      </div>
    </aside>
  );
}
