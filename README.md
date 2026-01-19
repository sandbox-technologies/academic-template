# Quentin Romero Lauro - Personal Website

A clean, modern personal website built with Next.js 14, React, and Tailwind CSS.

**Live site:** [quentinromerolauro.com](https://quentinromerolauro.com)

## Features

- **Clean, Professional Design**: Inspired by academic personal websites with a focus on readability
- **Responsive Layout**: Works great on desktop and mobile devices
- **Easy to Customize**: Simple component-based architecture
- **Fast Performance**: Built with Next.js for optimal loading times
- **SEO Friendly**: Server-side rendered pages with proper meta tags

## Pages

- **Home**: Main profile page with sidebar (photo, contact, mentees) and main content (about, impact, education, publications)
- **Papers**: Organized publications list by year
- **Blog**: Simple blog listing page

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone or copy this directory
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Profile Information

Edit the following files to customize your profile:

- `src/components/Sidebar.tsx` - Your name, title, email, advisor, mentees
- `src/components/MainContent.tsx` - About section, research impact, education, publications
- `src/components/Header.tsx` - Navigation and social links

### Adding Your Photo

Replace `public/profile.svg` with your own profile photo (e.g., `profile.jpg` or `profile.png`). 
Recommended dimensions: 260x320 pixels or similar aspect ratio.
Then update `src/components/Sidebar.tsx` to use your new filename.

### Adding a Book Cover

If you have a book, replace `public/book-cover.svg` with your book cover image.
Then update `src/components/MainContent.tsx` to use your new filename.

### Publications

Edit the publications in:
- `src/components/MainContent.tsx` - Featured publications on homepage
- `src/app/papers/page.tsx` - Full publications list

### Blog Posts

Edit blog posts in `src/app/blog/page.tsx`. For a full blog with individual post pages, you can extend this with:
- MDX for markdown-based posts
- A CMS like Contentful or Sanity
- Static markdown files

## Project Structure

```
academic-template/
├── public/
│   ├── profile.svg         # Your profile photo (replace with jpg/png)
│   └── book-cover.svg      # Book cover (optional, replace with your image)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── papers/
│   │   │   └── page.tsx    # Papers page
│   │   └── blog/
│   │       └── page.tsx    # Blog page
│   └── components/
│       ├── Header.tsx      # Navigation header
│       ├── Sidebar.tsx     # Profile sidebar
│       └── MainContent.tsx # Main content area
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Styling

The template uses:
- **Tailwind CSS** for utility-first styling
- **Georgia/serif fonts** for an academic feel
- **Warm brown accent colors** for links

To customize colors, edit `tailwind.config.ts` and `src/app/globals.css`.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Deploy

### Other Platforms

Build the static site:

```bash
npm run build
```

The output will be in `.next/` directory.

## License

MIT License - feel free to use this template for your personal website!
