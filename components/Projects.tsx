"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "PathPilot",
    description:
      "PathPilot is an intelligent academic companion that combines AI-powered course planning, machine learning-based resource recommendations, and behavioral analytics to help students achieve academic excellence",
    technologies: [
      "NextJS",
      "ML",
      "LLM",
      "Python",
      "TypeScript",
      "MongoDB",
      "TailwindCSS",
    ],
    link: "https://path-pilot-one.vercel.app/",
    image: "/projects/pathpilot.png",
    date: "January 2026",
  },
  {
    title: "Tripee",
    description:
      "Tripee is a full-stack travel and cultural discovery platform with: Trip planning and budget tracking, Places and cultural artifacts discovery, Visual search (ML embeddings), AI-assisted recommendations",
    technologies: [
      "React",
      "Machine Learning",
      "Clip",
      "Torch",
      " Python",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    link: "https://tripee-pi.vercel.app/",
    image: "/projects/Tripee.png",
    date: "December 2025",
  },
  {
    title: "Aarogini",
    description:
      "Full-stack women's healthcare platform with ML-driven report analysis, cycle prediction, and health recommendations for personalized wellness",
    technologies: ["MERN", "Machine Learning", "CSV Dataset", "React"],
    link: "https://aarogini.vercel.app/",
    image: "/projects/Aarogini.png",
    date: "October 2025",
  },
  {
    title: "Blabber Chat App",
    description:
      "Real-time chat application using MERN stack with Socket.IO, secure authentication, and Cloudinary integration for media uploads",
    technologies: ["MERN", "Socket.IO", "JWT", "Cloudinary", "oauth"],
    link: "https://blabber-sigma.vercel.app/",
    image: "/projects/chat.png",
    date: "July 2025",
  },
  {
    title: "Mojito Lover",
    description:
      "A stunning GSAP-powered cocktail website with cool effects and lock sections, scroll-driven experience packed with advanced animations.",
    technologies: ["ThreeJS", "GSAP", "React", "TailwindCSS"],
    link: "https://mojito-lover.vercel.app/",
    image: "/projects/mojito.png",
    date: "June 2025",
  },
  {
    title: "Subscription Tracker",
    description:
      "Backend subscription tracking system with JWT authentication, email reminders, and MongoDB storage",
    technologies: ["Express.js", "MongoDB", "JWT", "Nodemailer"],
    link: "#",
    image: "/projects/subscription.svg",
    date: "June 2025",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all h-full overflow-hidden group">
                {/* Project Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-blue-950/40 to-black overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🚀</div>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading="eager"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-2 font-semibold"
                  >
                    View Project →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
