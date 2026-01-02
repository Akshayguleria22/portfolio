"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Freelancing as a Full Stack Developer",
    company: "Self-Employed",
    period: "June 2025 - Present",
    description: "Supporting multiple projects under a supervisor handling freelancing projects",
    achievements: [
      "Hands-on experience with multiple projects as Full-Stack Developer",
      "Working with diverse tech stacks and client requirements",
      "Delivering scalable and production-ready solutions"
    ]
  },
  {
    title: "Virtual Job Simulation",
    company: "Deloitte",
    period: "June 2025",
    description: "Participated in a virtual job simulation to enhance problem-solving skills",
    achievements: [
      "Solved real-world business problems in a simulated environment",
      "Enhanced analytical and decision-making skills",
      "Gained insights into Deloitte's work culture and expectations"
    ]
  },
  {
    title: "Full Stack Intern",
    company: "DCodingTech",
    period: "May 2025 - June 2025",
    description: "Great learning experience working with an amazing team",
    achievements: [
      "Gained hands-on skills in full-stack development",
      "Collaborated with experienced developers on real-world projects",
      "Applied modern development practices and workflows"
    ]
  }
];

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 top-0 w-4 h-4 bg-white rounded-full border-4 border-background z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      />
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-colors">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <CardTitle className="text-white text-xl">{experience.title}</CardTitle>
              <span className="text-gray-400 text-sm">{experience.period}</span>
            </div>
            <CardDescription className="text-gray-300 font-semibold">
              {experience.company}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400 mb-4">{experience.description}</p>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  className="text-gray-300 flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="mr-2 text-white">•</span>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line - static part */}
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-white/20" />
          
          {/* Animated timeline line that grows on scroll */}
          <motion.div
            className="absolute left-[7px] top-0 w-0.5 bg-white origin-top"
            style={{ scaleY }}
          />

          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
