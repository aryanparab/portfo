// data/contact.ts - Contact information and social links

import { ContactData } from '@/types';

export const contactData: ContactData = {
  title: "Get In Touch",
  subtitle: [
    "Ready to create something extraordinary together?",
    "Let's push the boundaries of what's possible on the web."
  ],
  email: "parab.aryan@gmail.com",
  resumeUrl: "/resume.pdf", // Place resume.pdf in /public folder
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aryan-parab-0b44991b2/",
      icon: "Linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/aryanparab",
      icon: "Github"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourhandle",
      icon: "Twitter"
    },
    {
      name: "instagram",
      url: "mailto:parab",
      icon: "instagram"
    }
  ]
};
