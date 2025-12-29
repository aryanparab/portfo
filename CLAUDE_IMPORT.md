# Claude Import Guide - Next.js Portfolio Project

## Project Overview

This is **Aryan Parab's** modern, dynamic portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. The project features an animated timeline component and data-driven architecture where all content is easily editable through TypeScript files.

## Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge
- **Package Manager**: npm

## Project Structure

```
nextjs-portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main portfolio page with navigation
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # UI components
│   │   └── timeline.tsx     # Animated timeline component
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section with timeline
│   │   ├── Experience.tsx   # Experience timeline
│   │   ├── Projects.tsx     # Projects showcase
│   │   └── Contact.tsx      # Contact section
│   └── shared/              # Reusable components
│       ├── SectionHeader.tsx # Section header with star
│       └── TechTag.tsx      # Technology tag component
├── data/                    # ⭐ EDITABLE CONTENT
│   ├── hero.ts              # Hero section data
│   ├── about.ts             # About section data
│   ├── experience.ts        # Experience timeline
│   ├── projects.ts          # Projects showcase
│   ├── contact.ts           # Contact information
│   └── navigation.ts        # Navigation items
├── lib/                     # Utilities
│   └── utils.ts             # Utility functions
├── types/                   # TypeScript definitions
│   └── index.ts             # Type definitions
└── Configuration files      # Next.js, Tailwind, TypeScript configs
```

## Content Data Structure

### 1. Hero Section (`data/hero.ts`)
```typescript
{
  name: "ARYAN KHURANA",
  title: "Developer & AI Enthusiast",
  subtitle: "Building immersive experiences at the intersection of AI, web, and robotics"
}
```

### 2. About Section (`data/about.ts`)
- **Intro**: Personal introduction
- **Interests**: 4 interests with icons and descriptions
- **Skills**: Categorized skills (Languages, ML & AI, Cloud & DevOps)
- **Passions**: 3 passions with detailed descriptions
- **Fun Facts**: 5 personal facts with icons
- **Quote**: Personal philosophy quote
- **Values**: 4 core values with emojis and descriptions

### 3. Experience Timeline (`data/experience.ts`)
**Current Position**: Backend Engineer at Deloitte (Nov 2023 - Dec 2024)
- Data Rationalization project
- Machine Learning and clustering
- Power BI dashboards
- AWS Solutions Architect certification

**Education**: 
- Master's in Computer Science at USC (Aug 2024 - Present)
- Focus on ML and AI
- Won USC Claude Hackathon (1st place)
- Runner-up at Quantum Hackathon

**Previous Experience**:
- Software Engineer at Springwood (Jul-Oct 2023)
- Bachelor's in Computer Engineering from Mumbai University (2019-2023)

### 4. Projects Showcase (`data/projects.ts`)
6 featured projects:

1. **AI-Powered Chatbot**
   - Transformer models, NLP, sentiment analysis
   - Won 1st place at USC Claude Hackathon
   - Tech: Python, Transformers, FastAPI, React, Docker

2. **ML Recommendation Engine**
   - Collaborative filtering, 95%+ accuracy
   - Tech: Python, PyTorch, scikit-learn, AWS, PostgreSQL

3. **Interactive 3D Portfolio**
   - Procedurally generated star fields, orbital navigation
   - Tech: JavaScript, HTML5 Canvas, CSS3, WebGL

4. **Real-Time Object Detection**
   - YOLO-based computer vision, 30+ FPS
   - Tech: Python, OpenCV, YOLO, TensorFlow, CUDA

5. **Scalable ETL Pipeline**
   - Enterprise data pipeline, containerized microservices
   - Tech: Python, Apache Airflow, Docker, PostgreSQL, AWS S3

6. **NLP Sentiment Analysis Tool**
   - Multi-language sentiment analysis, 100K+ texts/hour
   - Tech: Python, BERT, Hugging Face, Flask, MongoDB

### 5. Contact Information (`data/contact.ts`)
- Email: aryan@example.com
- Social links: LinkedIn, GitHub, Twitter, Email
- Resume URL: /resume.pdf

## Key Features

### 1. Data-Driven Architecture
- All content stored in TypeScript files for easy editing
- Type-safe data structures
- Centralized content management

### 2. Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Smooth animations and transitions

### 3. Animated Timeline Component
- Built with Framer Motion
- Interactive timeline for experience
- Smooth scroll navigation

### 4. Component-Based Structure
- Reusable UI components
- Section-based architecture
- Easy to maintain and extend

### 5. SEO Optimized
- Next.js metadata API
- Semantic HTML structure
- Optimized performance

## Component Architecture

### Layout Components
- `RootLayout`: Sets up HTML structure, metadata, and global styles
- Main page with fixed navigation and sectioned content

### Section Components
- `Hero`: Introduction with name and title
- `About`: Personal information in timeline format
- `Experience`: Work and education timeline
- `Projects`: Project showcase with images and links
- `Contact`: Contact information and social links

### UI Components
- `Timeline`: Animated timeline component
- `SectionHeader`: Reusable section header with star icon
- `TechTag`: Technology tag with hover effects

### Shared Components
- Consistent styling and behavior
- Type-safe props interface
- Hover and animation effects

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Deployment Ready

The project is configured for easy deployment on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Customization Guide

### Updating Content
1. Edit files in `/data` directory
2. All data is TypeScript typed
3. Changes reflect immediately in development

### Styling Changes
1. Edit `tailwind.config.ts` for theme
2. Modify `app/globals.css` for global styles
3. Component styles in individual files

### Adding New Sections
1. Create component in `components/sections/`
2. Add data structure in `data/`
3. Update navigation in `data/navigation.ts`
4. Import and add to main page

## Dependencies Breakdown

**Core Framework**:
- next@14.2.0
- react@18.3.1
- react-dom@18.3.1
- typescript@5.3.0

**Styling**:
- tailwindcss@3.4.0
- autoprefixer@10.4.0
- postcss@8.4.0

**Animations & UI**:
- framer-motion@11.0.0
- lucide-react@0.344.0

**Utilities**:
- clsx@2.1.0
- tailwind-merge@2.2.0

**Development**:
- @types/node, @types/react, @types/react-dom
- eslint, eslint-config-next

## Personal Brand

**Name**: Aryan Parab
**Title**: Developer & AI Enthusiast
**Focus**: Building immersive experiences at the intersection of AI, web, and robotics

**Key Achievements**:
- Backend Engineer at Deloitte
- Master's student at USC
- 1st place at USC Claude Hackathon
- AWS Solutions Architect certified
- 6 diverse technical projects

**Skills**:
- **Languages**: Python, C++, JavaScript, SQL
- **ML & AI**: PyTorch, TensorFlow, Transformers, Computer Vision, NLP
- **Cloud & DevOps**: AWS, Docker, Git, CI/CD, Linux

This project showcases Aryan's journey from backend engineering to AI research, demonstrating expertise in machine learning, web development, and software engineering.
