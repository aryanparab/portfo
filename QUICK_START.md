# Quick Start Guide - Adding & Editing Content

This guide shows you exactly how to add new content to your portfolio without touching any component code!

## 🎯 What You Need to Know

**All content is in the `/data` folder!** Just edit these files and your portfolio updates automatically.

---

## 📝 Adding a New Project

**File:** `data/projects.ts`

```typescript
{
  title: "Your Project Name",
  description: "A detailed description of what your project does, technologies used, and achievements.",
  image: "https://images.unsplash.com/photo-...",  // Unsplash or /images/your-image.png
  technologies: ["React", "Node.js", "MongoDB", "AWS"],
  links: {
    github: "https://github.com/yourusername/project",  // Optional
    live: "https://yourproject.com"  // Optional
  }
}
```

**Steps:**
1. Open `data/projects.ts`
2. Copy the last project object
3. Paste it after the last one (don't forget the comma)
4. Update all fields
5. Save - project appears automatically!

---

## 💼 Adding Work Experience

**File:** `data/experience.ts`

```typescript
{
  year: "2024",
  type: "work",  // or "education"
  title: "Your Job Title",
  company: "Company Name · Full-time",
  duration: "Jan 2024 - Present",
  location: "City, Country",
  description: [
    "Achievement or responsibility 1",
    "Achievement or responsibility 2",
    "Achievement or responsibility 3"
  ],
  skills: ["Skill1", "Skill2", "Skill3"]
}
```

**To add education instead:**
```typescript
{
  year: "2024",
  type: "education",  // ⬅️ Change this
  title: "Degree Name",
  company: "University Name",
  // ... rest same
}
```

---

## 🎓 Adding Education

Same as work experience, just change `type: "education"`.

The timeline automatically filters between Work and Education!

---

## 🎯 Updating About Section

**File:** `data/about.ts`

### Adding an Interest

```typescript
interests: [
  // ... existing interests
  {
    icon: "🎸",  // Any emoji
    title: "Music",
    description: "Playing guitar, producing beats, live performances"
  }
]
```

### Adding a Skill Category

```typescript
skills: [
  // ... existing skills
  {
    icon: "🎨",
    category: "Design",
    skills: ["Figma", "Photoshop", "Illustrator"]
  }
]
```

### Adding a Fun Fact

```typescript
funFacts: [
  // ... existing facts
  {
    icon: "⚡",
    text: "Built my first website at age 12 using HTML and Paint"
  }
]
```

---

## 📧 Updating Contact Information

**File:** `data/contact.ts`

```typescript
export const contactData: ContactData = {
  email: "your.email@example.com",  // ⬅️ Change this
  resumeUrl: "/resume.pdf",  // Place resume.pdf in /public folder
  social: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/YOUR-PROFILE",  // ⬅️ Update
      icon: "Linkedin"
    },
    {
      name: "GitHub", 
      url: "https://github.com/YOUR-USERNAME",  // ⬅️ Update
      icon: "Github"
    },
    // Add more social links...
  ]
};
```

**Available icons:** `Linkedin`, `Github`, `Twitter`, `Mail`, `Instagram`, `Facebook`

---

## 🖼️ Using Images

### Option 1: Unsplash (Easy)

1. Go to [unsplash.com](https://unsplash.com)
2. Find an image
3. Click "Copy Image URL"
4. Use in your data: `image: "https://images.unsplash.com/..."`

### Option 2: Your Own Images

1. Place image in `/public/images/` folder
2. Reference: `image: "/images/my-project.png"`

**Make sure to update `next.config.js` if using external domains:**

```javascript
images: {
  domains: ['images.unsplash.com', 'yourdomain.com'],
}
```

---

## 🎨 Changing Colors

**File:** `tailwind.config.ts`

```typescript
colors: {
  golden: {
    DEFAULT: '#F8E45F',  // ⬅️ Change primary color
    dark: '#D4AF37',     // ⬅️ Change dark variant
  },
}
```

**Common color suggestions:**
- Blue: `#3B82F6` / `#1E40AF`
- Purple: `#A855F7` / `#7C3AED`
- Green: `#10B981` / `#059669`
- Red: `#EF4444` / `#DC2626`

---

## ✏️ Editing Text Content

### Hero Section
**File:** `data/hero.ts`

```typescript
name: "YOUR NAME",
title: "Your Title",
subtitle: "Your tagline or description"
```

### About Intro
**File:** `data/about.ts`

```typescript
intro: "Your introduction text here"
```

### Projects Intro
**File:** `data/projects.ts`

```typescript
intro: "Your projects section introduction"
```

---

## 🔢 Step-by-Step: Complete New Project Addition

1. **Open** `data/projects.ts`

2. **Find** the `projects` array

3. **Add** this at the end (before `]`):

```typescript
,  // ⬅️ Don't forget comma after previous project!
{
  title: "AI Resume Builder",
  description: "Built an AI-powered resume builder using GPT-4. Users can generate professional resumes in seconds with personalized content suggestions.",
  image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800",
  technologies: ["Next.js", "OpenAI", "Tailwind", "Prisma"],
  links: {
    github: "https://github.com/yourusername/ai-resume",
    live: "https://ai-resume-builder.com"
  }
}
```

4. **Save** the file

5. **Refresh** your browser - done! ✅

---

## ❓ Common Questions

### How many projects can I add?
As many as you want! The component automatically handles all of them.

### Do I need to restart the dev server?
No! Next.js hot-reloads automatically. Just save and refresh.

### Can I remove the Timeline component?
Yes! Edit `components/sections/About.tsx` to use a different layout.

### How do I change the navigation menu?
Edit `data/navigation.ts` to add/remove menu items.

### Where do I put my resume PDF?
In `/public/resume.pdf`, then it's accessible at `/resume.pdf`

---

## 🚨 Common Mistakes

### ❌ Forgetting commas
```typescript
{ title: "Project 1" }
{ title: "Project 2" }  // ❌ Missing comma above!
```

```typescript
{ title: "Project 1" },  // ✅ Comma here
{ title: "Project 2" }
```

### ❌ Wrong quotes in links
```typescript
url: 'https://...'  // ❌ Single quotes
url: "https://..."  // ✅ Double quotes
```

### ❌ Misspelled icon names
```typescript
icon: "linkedin"  // ❌ Lowercase
icon: "Linkedin"  // ✅ Capitalized
```

---

## 🎯 Testing Your Changes

1. Save the file
2. Check browser console (F12) for errors
3. If you see TypeScript errors, check:
   - All commas in place
   - All quotes closed
   - All required fields present

---

## 💡 Pro Tips

1. **Use Comments:** Add `//` for notes
   ```typescript
   // This is my favorite project!
   { title: "..." }
   ```

2. **Keep Backups:** Copy data files before major changes

3. **Test Incrementally:** Add one item at a time

4. **Use TypeScript:** Your IDE will show errors immediately!

---

**Need more help?** Check `README.md` or the component files for examples!
