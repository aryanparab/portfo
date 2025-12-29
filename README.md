# Next.js Portfolio - Complete Setup Guide

A modern, dynamic portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion featuring an animated timeline component.

## 🚀 Features

- ✅ **Dynamic Data Management** - All content stored in `/data` files
- ✅ **TypeScript** - Full type safety
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Animated Timeline** - Using Framer Motion
- ✅ **Easy to Update** - Just edit data files to add/modify content
- ✅ **Component-Based** - Reusable, maintainable components
- ✅ **SEO Optimized** - Meta tags and semantic HTML

## 📁 Project Structure

```
nextjs-portfolio/
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # UI components
│   │   └── timeline.tsx     # Animated timeline
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── shared/              # Reusable components
│       ├── SectionHeader.tsx
│       └── TechTag.tsx
├── data/                    # ⭐ EDIT THESE TO UPDATE CONTENT
│   ├── hero.ts
│   ├── about.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── contact.ts
│   └── navigation.ts
├── lib/                     # Utilities
│   └── utils.ts
├── types/                   # TypeScript types
│   └── index.ts
└── public/                  # Static assets
    └── images/
```

## 🛠️ Setup Instructions

### 1. Prerequisites

Make sure you have installed:
- Node.js 18+ (recommended: 20+)
- npm or yarn or pnpm

### 2. Installation

```bash
# Clone or create the project directory
cd nextjs-portfolio

# Install dependencies
npm install

# Or with yarn
yarn install

# Or with pnpm
pnpm install
```

### 3. Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

## 📝 How to Update Content

### Adding/Editing Projects

Edit `data/projects.ts`:

```typescript
export const projectsData: ProjectsData = {
  intro: "Your intro text",
  projects: [
    {
      title: "New Project",
      description: "Project description here",
      image: "https://images.unsplash.com/...",
      technologies: ["React", "Node.js", "MongoDB"],
      links: {
        github: "https://github.com/...",
        live: "https://demo.com"
      }
    },
    // Add more projects...
  ]
};
```

### Adding/Editing Experience

Edit `data/experience.ts`:

```typescript
export const experienceData: ExperienceData = {
  timeline: [
    {
      year: "2024",
      type: "work", // or "education"
      title: "Software Engineer",
      company: "Company Name",
      duration: "Jan 2024 - Present",
      location: "Location",
      description: [
        "Achievement 1",
        "Achievement 2"
      ],
      skills: ["Skill1", "Skill2"]
    },
    // Add more entries...
  ]
};
```

### Updating About Section

Edit `data/about.ts`:

```typescript
export const aboutData: AboutData = {
  intro: "Your intro",
  interests: [
    { icon: "📚", title: "Reading", description: "..." }
  ],
  skills: [
    { icon: "💻", category: "Languages", skills: ["Python", "JS"] }
  ],
  // ... more sections
};
```

### Updating Contact Info

Edit `data/contact.ts`:

```typescript
export const contactData: ContactData = {
  email: "your.email@example.com",
  social: [
    { name: "LinkedIn", url: "...", icon: "Linkedin" },
    { name: "GitHub", url: "...", icon: "Github" }
  ]
};
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      golden: {
        DEFAULT: '#F8E45F',  // Change primary color
        dark: '#D4AF37',
      },
    },
  },
}
```

### Fonts

Edit `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

Then update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## 📦 Dependencies

Core dependencies:
- **next** - Next.js framework
- **react** - React library
- **typescript** - Type safety
- **tailwindcss** - Styling
- **framer-motion** - Animations
- **lucide-react** - Icons

## 🔧 TypeScript Types

All data structures are typed in `types/index.ts`. This ensures:
- ✅ Autocomplete in your IDE
- ✅ Type checking
- ✅ Prevents errors

Example:

```typescript
// types/index.ts
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
}
```

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: < 768px - Single column, stacked layout
- **Tablet**: 768px - 1024px - Optimized spacing
- **Desktop**: > 1024px - Full width, multi-column

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Other Platforms

The project works on:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

Just run `npm run build` and deploy the `.next` folder.

## 📄 Adding Your Resume

1. Place your `resume.pdf` in the `/public` folder
2. Update `data/contact.ts`:

```typescript
resumeUrl: "/resume.pdf"
```

## 🖼️ Using Custom Images

### For Projects:

1. Place images in `/public/images/`
2. Reference in `data/projects.ts`:

```typescript
image: "/images/my-project.png"
```

Or use Unsplash URLs:

```typescript
image: "https://images.unsplash.com/photo-..."
```

## 🐛 Troubleshooting

### Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### TypeScript errors

```bash
# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P > "TypeScript: Restart TS Server"
```

### Image optimization errors

Make sure domains are added to `next.config.js`:

```javascript
images: {
  domains: ['images.unsplash.com', 'yourdomain.com'],
}
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

## 🤝 Contributing

Feel free to customize this portfolio for your own use!

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

---

**Need help?** Check the documentation or create an issue.

**Quick Start:**
1. `npm install`
2. Edit files in `/data` directory
3. `npm run dev`
4. View at `localhost:3000`
