// data/projects.ts - Projects showcase data

import { ProjectsData } from '@/types';

export const projectsData: ProjectsData = {
  intro: "Building solutions that blend innovation with impact.",
  
  projects: [
    {
      title: "Idol Coach – AI Singing Assistant",
      description:
        "Full-stack AI-powered singing coach with React frontend and FastAPI backend serving 50+ users. Users record vocals in a chat-like interface and receive real-time feedback powered by CNN audio classifier using TensorFlow and Librosa feature extraction. Deployed on AWS (EC2, S3) with PostgreSQL, achieving 30% latency reduction through inference optimization.",
      image:
        "/images/Idol.png",
      technologies: ["React", "Python", "FastAPI", "Librosa", "PostgreSQL", "AWS", "Docker","Gemini"],
      links: {
        github: "https://github.com/aryanparab/Idol-Coach",
        watch: "https://drive.google.com/file/d/1lrmUADXCLoX4zMPax3VONWv4kNPECEs1/view"
      }
    },
    {
      title: "Sinbad AI – Multi-Agent Narrative System",
      description:
        "Distributed AI system with 10+ specialized agents using OpenAI GPT-4 and Anthropic Claude APIs. Implements agent-to-agent communication with RAG architecture using FAISS vector database for 20+ turn context retention. FastAPI backend with MongoDB handles state management, optimized coordination from 2.1s to 1.2s (43% improvement).",
      image:
        "/images/Sinbad.png",
      technologies: ["Python", "React", "Anthropic Claude", "FAISS", "FastAPI", "MongoDB"],
      links: {
        github: "https://github.com/aryanparab/SinbadAI",
        live:"https://sinbad-ai.vercel.app/",
        watch:"https://tinyurl.com/39cncmda"

      }
    },
    // {
    //   title: "Scientific Paper Recommendation System",
    //   description:
    //     "NLP-powered recommendation system using BERT embeddings, PyTorch, and semantic analysis techniques. Combines transformer models with traditional ML (SVM, LDA, K-Means) to process 100K+ research papers, improving retrieval relevance by 22% over TF-IDF baseline. Features cosine similarity search and comprehensive evaluation metrics.",
    //   image:
    //     "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=500&fit=crop",
    //   technologies: ["Python", "PyTorch", "BERT", "Transformers", "scikit-learn", "Hugging Face"],
    //   links: {
    //     github: "https://github.com/aryanparab/paper-recommender"
    //   }
    // },
    {
      title: "Grocery List Generator",
      description:
    "An interactive, Streamlit-powered grocery list and meal planning tool built in Python. It generates organized grocery lists from recipes and user inputs, with modular scripts handling grocery logic, list management, and recipe insights in a lightweight web app.",
  image: "/images/Grocery.png",
  technologies: ["Python", "Streamlit", "Agent Workflows", "Data Processing"],
      links: {
        github: "https://github.com/aryanparab/grocery-list-generator",
        live: "https://aryanparab-grocery-list-generator-streamlit-app-dxclse.streamlit.app/groc",
        watch: "https://drive.google.com/file/d/1gW5i3gI_a1QX9t67hLzP_tpa-QEh3NFY/view?usp=sharing"
      }
    },
    {
      title: "Alter Ego – Persona-Based AI Agent Platform",
      description:
        "Lightweight AI agent framework using OpenAI APIs with memory and tool integration. Implements persona-driven agents with FAISS vector search for context retrieval, fact-checking capabilities, and guardrails. Features OAuth authentication patterns and LangChain orchestration for multi-step workflows.",
      image:
        "/images/Wingman.png",
      technologies: ["Python", "React", "FAISS", "MongoDB","Gemini"],
      links: {
        github: "https://github.com/aryanparab/YourWingman",
        watch: "https://drive.google.com/file/d/1XJ1pXGL2tFpXO0MMK6f7AYkosiChd7LF/view?usp=sharing"
      }
    },
    {
      title: "Mood Music Recommender",
      description:
        "Hybrid recommendation system using sentiment analysis (text/audio) and Spotify API OAuth2 integration. Detects user mood through text sentiment and generates personalized playlists using React/Next.js frontend with FastAPI backend. Features automated playlist generation and real-time music suggestions.",
      image:
        "/images/MoodMusic.png",
      technologies: [ "Tailwind", "Python", "CNN", "Sentiment Analysis","Jupyter Notebook"],
      links: {
        github: "https://github.com/aryanparab/Music-recommendation-using-mood-detection"
      }
    },
    {
      title: "Weenix Operating System Kernel",
      description:
        "Implemented Unix-like OS kernel in C including process management (fork, exec, waitpid), virtual memory subsystem, and VFS layer. Features preemptive scheduler with mutex and condition variables handling 100+ concurrent processes. Comprehensive testing and GDB debugging for race conditions and memory management.",
      image:
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=500&fit=crop",
      technologies: ["C", "Unix", "Systems Programming", "GDB", "Concurrency"],
      links: {
      
      }
    },
    {
      title: "Online Video KYC Verification",
  description:
    "Built an end-to-end Video KYC system that verifies user identity using document OCR, OTP validation, and live face recognition. Implemented Aadhaar data extraction via OCR, webcam-based face capture, and CNN-based facial matching between documents and live feed to ensure identity authenticity.",
  image: "/images/RPM.png",
  technologies: ["Python", "Flask", "Computer Vision", "OCR", "CNN"],
      links: {
        github: "https://github.com/aryanparab/RPM"
      }
    }
  ]
};