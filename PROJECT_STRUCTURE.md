# Next.js Portfolio - Project Structure

## Directory Structure

```
nextjs-portfolio/
├── app/
│   ├── layout.tsx                 # Root layout with providers
│   ├── page.tsx                   # Main portfolio page
│   └── globals.css                # Global styles
├── components/
│   ├── ui/
│   │   └── timeline.tsx           # Timeline component (from aceternity)
│   ├── sections/
│   │   ├── Hero.tsx               # Home section
│   │   ├── About.tsx              # About section with timeline
│   │   ├── Experience.tsx         # Experience & Education
│   │   ├── Projects.tsx           # Projects showcase
│   │   └── Contact.tsx            # Contact section
│   ├── canvas/
│   │   ├── StarField.tsx          # Star field canvas animation
│   │   └── PlanetNavigation.tsx   # Planet navigation system
│   ├── navigation/
│   │   ├── Navbar.tsx             # Navigation menu
│   │   └── PlanetHitboxes.tsx     # Planet clickable areas
│   └── shared/
│       ├── SectionHeader.tsx      # Reusable section header with star
│       └── TechTag.tsx            # Reusable tech tag component
├── data/
│   ├── hero.ts                    # Hero section data
│   ├── about.ts                   # About section data
│   ├── experience.ts              # Experience timeline data
│   ├── projects.ts                # Projects data
│   ├── contact.ts                 # Contact info & social links
│   └── navigation.ts              # Navigation menu items
├── lib/
│   ├── utils.ts                   # Utility functions
│   └── animations.ts              # Animation helpers
├── public/
│   └── images/                    # Project images
├── types/
│   └── index.ts                   # TypeScript type definitions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Key Features

### 1. Dynamic Data Management
All content is stored in `/data` directory as TypeScript objects that can be easily updated.

### 2. Reusable Components
Each section is a separate component that receives data as props.

### 3. Type Safety
TypeScript types ensure data consistency across the project.

### 4. Easy Updates
To add/edit content:
- Projects: Edit `data/projects.ts`
- Experience: Edit `data/experience.ts`
- About: Edit `data/about.ts`

Components automatically update when data changes.

## Setup Instructions

See README.md for installation and development instructions.
