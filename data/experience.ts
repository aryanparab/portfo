// data/experience.ts - Experience & Education timeline data

import { ExperienceData } from '@/types';



export const experienceData: ExperienceData = {
  timeline: [
    {
      year: "2024",
      type: "Full-time",
      title: "Backend Engineer",
      company: "Deloitte ",
      duration: "Nov 2023 - Dec 2024 · 1 yr 2 mos",
      location: "Mumbai, Maharashtra, India · On-site",
      description: [
        "Worked on a Data Rationalization project involving data cleaning, transformation, and integration to prepare datasets for clustering workflows.",
        "Modified clustering algorithms based on client requirements, dataset characteristics, and output interpretability.",
        "Performed iterative tuning of clustering models by adjusting parameters to improve cluster quality and reliability.",
        "Built Power BI dashboards to visualize and interpret optimized clustering outputs.",
        "Validated metadata across datasets in a data warehousing project, reducing retrieval errors and improving consistency.",
        "Built pipelines to transition data from legacy systems to a new data warehouse for improved analytics and management.",
        "Achieved AWS Solutions Architect and PL-300 certifications, demonstrating proficiency in cloud architecture and data analytics."
      ],
      skills: ["Machine Learning", "Data Science", "AWS", "Power BI"]
    },

    {
      year: "2023",
      type: "Internship",
      title: "Business Analyst",
      company: "Springwood",
      duration: "Feb 2023 - May 2023 · 4 mos",
      location: "Remote",
      description: [
        "Integrated WebEngage analytics to track user events and funnels, contributing to improved marketing performance and revenue growth.",
        "Designed audience segmentation and targeting strategies to improve customer engagement and retention across multiple clients.",
        "Built a lightweight website with ChatGPT integration for real-time notifications and automated client interactions.",
        "Revamped and optimized the company website, improving SEO, content clarity, and overall performance.",
        "Consulted clients on CRM workflows, providing actionable recommendations for conversion optimization and automation."
      ],
      skills: ["Python", "Machine Learning", "Web Analytics", "CRM"]
    },

    {
      year: "2023",
      type: "Internship",
      title: "Head of Outgoing Social Sector",
      company: "AIESEC in Mumbai",
      duration: "Feb 2022 - Feb 2023 · 1 yr 1 mo",
      location: "Mumbai, Maharashtra, India",
      description: [
        "Tracked global demand and supply while adapting exchange products for the local market.",
        "Established 12+ international partnerships, improving customer experience and delivery quality.",
        "Generated ₹2.5+ Lakhs in revenue during the post-COVID recovery phase.",
        "Curated customer journey strategies to streamline international exchange programs.",
        "Achieved 25% growth in overall operations and a 20% sales conversion ratio.",
        "Supervised and coached a team of 16 across marketing, sales, customer experience, and international relations.",
        "Recognized as 2nd Place nationally for Overall Operations in Outgoing Global Volunteer, AIESEC India."
      ],
      skills: ["Operations", "Leadership", "Data Analysis", "Stakeholder Management"]
    },

    {
      year: "2022",
      type: "Full-time",
      title: "Co-Founder",
      company: "SakuraWave",
      duration: "Nov 2020 - Mar 2022 · 1 yr 5 mos",
      location: "India",
      description: [
        "Co-founded an e-commerce venture and achieved ₹8L+ in revenue through strategic business development.",
        "Established partnerships with multiple suppliers for efficient merchandise sourcing.",
        "Led the creation and management of the company website.",
        "Managed order fulfillment, logistics, and customer service operations to ensure timely delivery."
      ],
      skills: ["Entrepreneurship", "Web Development", "Operations", "Business Strategy"]
    },
        {
      year: "2024",
      type: "education",
      title: "Master's in Computer Science",
      company: "University of Southern California",
      duration: "Aug 2024 - Present",
      location: "Los Angeles, California",
      description: [
        "Focus on Machine Learning and Artificial Intelligence",
        "Relevant coursework: Deep Learning, Computer Vision, NLP",
        "Won 1st place at USC Claude Hackathon",
        "Runner-up at Quantum Hackathon"
      ],
      skills: ["PyTorch", "TensorFlow", "Research", "AI"]
    },
    {
      year: "2023",
      type: "education",
      title: "Bachelor's in Computer Engineering",
      company: "Thadomal Shahani",
      duration: "2019 - 2023",
      location: "Mumbai, India",
      description: [
        "Graduated with First Class with Distinction",
        "Founded and led university coding club",
        "Published research paper on ML optimization",
        "Dean's List for academic excellence"
      ],
      skills: ["Algorithms", "Data Structures", "Software Engineering"]
    }
  ]
};
