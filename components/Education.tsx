"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
}

const education: EducationItem[] = [
  {
    degree: "Bachelor in Computer Science Engineering",
    institution: "Chandigarh University",
    period: "2023 - 2027",
    description: "Pursuing B.Tech in Computer Science Engineering",
    achievements: [
      "CGPA: 7.91",
      "Research paper on Secure file hosting on AWS and IIS integration (2025)",
      "Patent file on UrbanGuardian (2024)"
    ]
  },
  {
    degree: "Matriculation (CBSE)",
    institution: "Joseph and Mary Public School, Delhi",
    period: "Completed",
    description: "Secondary education with focus on Science and Mathematics",
    achievements: [
      "Strong foundation in academics",
      "Active participation in extracurricular activities"
    ]
  }
];

function EducationCard({ education, index }: { education: EducationItem; index: number }) {
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
              <CardTitle className="text-white text-xl">{education.degree}</CardTitle>
              <span className="text-gray-400 text-sm">{education.period}</span>
            </div>
            <CardDescription className="text-gray-300 font-semibold">
              {education.institution}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400 mb-4">{education.description}</p>
            <ul className="space-y-2">
              {education.achievements.map((achievement, i) => (
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

export default function Education() {
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
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line - static part */}
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-white/20" />
          
          {/* Animated timeline line that grows on scroll */}
          <motion.div
            className="absolute left-[7px] top-0 w-0.5 bg-white origin-top"
            style={{ scaleY }}
          />

          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
