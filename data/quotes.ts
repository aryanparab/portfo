// data/quotes.ts - Animated quotes for each section

export const sectionQuotes = {
  about: {
    quote: "Always learning, always growing. That's the developer way!",
    variant: 'planet' as const,
    position: 'right' as const,
  },
  experience: {
    quote: "Every company taught me something unique. Each role shaped who I am today.",
    variant: 'constellation' as const,
    position: 'left' as const,
  },
  projects: {
    quote: "Code is poetry. Every project is a new verse in my story.",
    variant: 'nebula' as const,
    position: 'right' as const,
  },
  contact: {
    quote: "Let's build something amazing together! The next big thing starts with a conversation.",
    variant: 'shootingStar' as const,
    position: 'center' as const,
  },
};

// You can also add more quotes and rotate them
export const alternativeQuotes = {
  about: [
    "Turning coffee into code since [year]",
    "Building the future, one commit at a time",
    "Always learning, always growing",
  ],
  experience: [
    "Experience is the teacher of all things",
    "Every job is a self-portrait of the person who does it",
    "The only way to do great work is to love what you do",
  ],
  projects: [
    "Code is like humor. When you have to explain it, it's bad",
    "First, solve the problem. Then, write the code",
    "Make it work, make it right, make it fast",
  ],
  contact: [
    "Great things are never done alone",
    "The best way to predict the future is to create it",
    "Let's create something incredible together",
  ],
};