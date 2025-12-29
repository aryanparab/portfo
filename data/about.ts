// data/about.ts - About section data

export interface AboutData {
  // Story section
  greeting: string;
  story: string[];
  
  // Stats
  stats: {
    value: string;
    label: string;
  }[];
  
  // Technical skills organized by category
  technicalSkills: {
    [category: string]: string[];
  };
  
  // Personal interests
  interests?: {
    icon: string;
    title: string;
    description: string;
  }[];
  
  // Passions
  passions?: {
    emoji: string;
    title: string;
    description: string;
  }[];
  
  // Fun facts
  funFacts?: {
    icon: string;
    text: string;
  }[];
  
  // Quote
  quote?: string;
  
  // Values
  values?: {
    emoji: string;
    title: string;
    description: string;
  }[];
}

export const aboutData: AboutData = {
  // Greeting
  greeting: "Hi, I'm Aryan Parab 👋",
  
  // Story paragraphs
  story: [
    "I'm a full-stack developer passionate about creating elegant solutions to complex problems. With a strong foundation in both frontend and backend technologies, I build scalable applications that make a difference.",
    
    "Over the past few years, I've specialized in AI/ML integration, working with cutting-edge technologies like LLMs, RAG systems, and deep learning frameworks. I love turning ambitious ideas into reality through clean, efficient code.",
    
    "When I'm not coding, you'll find me exploring new technologies, reading about history, wildlife, mythologies and Anime , or playing Football. I believe in continuous learning and staying ahead of the curve in this ever-evolving tech landscape."
  ],
  
  // Stats for mini showcase
 stats: [
  { value: "Always", label: "Learning Mode" },
  { value: "Builder", label: "Mindset" },
  { value: "Yes", label: "Open to Chaos" }
]

,
  
  // Technical Skills - organized by category
  technicalSkills: {
    "Languages/Frameworks": [
      "Python",
      "C",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "FastAPI",
      "R"
    ],
    "Databases/Cloud": [
      "MongoDB",
      "PostgreSQL",
      "AWS (S3, EC2)",
      "Docker",
      "SQL",
      "Redis",
      "Vector DB"
    ],
    "AI/ML": [
      "LLMs",
      "NLP",
      "Deep Learning",
      "ML Pipelines",
      "Keras",
      "TensorFlow",
      "RAG"
    ],
    "Tools": [
      "Git",
      "CI/CD",
      "Tableau",
      "Power BI",
      "Agile/Scrum",
      "Multithreading"
    ]
  },
  
  // Personal interests (optional - for future sections)
  interests: [
    {
      icon: "📚",
      title: "Reading",
      description: "History and Mythology, Science fiction novels, tech blogs, research papers, Mangas"
    },
    {
      icon: "🎮",
      title: "Sports",
      description: "Football, Cricket, Badminton"
    },
    {
      icon: "✈️",
      title: "Travel",
      description: "Exploring cultures, photography, adventure sports"
    },
    {
      icon: "🎵",
      title: "Music",
      description: "Bollywood, Hip Hop, Dance"
    }
  ],
  
  // Passions (optional - for future sections)
  passions: [
    {
      emoji: "🤖",
      title: "Artificial Intelligence",
      description: "Building intelligent systems that learn and adapt. Fascinated by neural networks and their potential to solve complex problems."
    },
    {
      emoji: "🌐",
      title: "Immersive Web Experiences",
      description: "Creating 3D visualizations and interactive interfaces that push the boundaries of what's possible on the web."
    },
    {
      emoji: "🔬",
      title: "Research & Innovation",
      description: "Exploring novel approaches in computer vision, NLP, and optimization to drive technological advancement."
    }
  ],
  
  // Fun facts (optional - for future sections)
  funFacts: [
    {
      icon: "🏆",
      text: "Won 4-hour Claude Hackathon at USC - built an AI assistant in record time"
    },
    {
      icon: "☕",
      text: "Can't function without morning coffee - it's basically my debug mode activator"
    },
    {
      icon: "🌙",
      text: "Peak productivity hits after midnight - something about the quiet darkness"
    },
    {
      icon: "🎵",
      text: "Codes best with lo-fi hip hop - have curated playlists for different moods"
    },
    {
      icon: "🚀",
      text: "Dream project: AI that codes alongside me and cracks jokes"
    }
  ],
  
  // Quote (optional - for hero section)
  quote: "Building technology that doesn't just work, but delights. Creating experiences that make people think 'how did they do that?'",
  
  // Values (optional - for future sections)
  values: [
    {
      emoji: "💡",
      title: "Innovation",
      description: "Seeking the next breakthrough"
    },
    {
      emoji: "🎯",
      title: "Impact",
      description: "Solutions that matter"
    },
    {
      emoji: "🌱",
      title: "Growth",
      description: "Never stop learning"
    },
    {
      emoji: "🤝",
      title: "Collaboration",
      description: "Best ideas from teamwork"
    }
  ]
};