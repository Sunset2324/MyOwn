# Sambel Code — Portfolio

A dark, cinematic portfolio built with **Next.js 14**, **React**, **TypeScript**, and **TailwindCSS**.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

## Project Structure

```
Sambel-portfolio/
├── app/
│   ├── globals.css         # Global styles (grain, scrollbar, animations)
│   ├── layout.tsx          # Root layout + fonts
│   └── page.tsx            # Home page (assembles all sections)
├── components/
│   ├── Navbar.tsx          # Fixed nav with music player
│   ├── Footer.tsx          # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About + skill bars + stats
│   │   ├── Work.tsx        # Projects grid
│   │   ├── Services.tsx    # Services cards
│   │   └── Contact.tsx     # Contact form
│   └── ui/
│       ├── Cursor.tsx      # Custom animated cursor
│       ├── AmbientOrbs.tsx # Background ambient orbs
│       ├── MusicPlayer.tsx # Navbar music toggle button
│       └── SectionLabel.tsx
├── lib/
│   └── data.ts             # ← Edit all your content here
├── types/
│   └── index.ts            # TypeScript interfaces
└── tailwind.config.ts
```

## Customization

### Your Content
All content lives in **`lib/data.ts`** — edit your name, projects, skills, services, stats, and social links there.

### Your Music 🎵
In `lib/data.ts`, set:
```ts
musicUrl: "https://your-cdn.com/your-song.mp3",
musicTrackName: "Artist — Song Title",
```
The URL must be a **direct link** to an audio file (mp3, wav, ogg).  
Good options: Cloudinary, your own server, Dropbox public link, R2 bucket.

### Your Images
Replace the Unsplash URLs in `lib/data.ts` with your own images. For local images, put them in `/public` and reference as `"/your-image.jpg"`.

## Deploy

```bash
# Vercel (recommended)
vercel deploy

# or build locally
npm run build && npm start
```
