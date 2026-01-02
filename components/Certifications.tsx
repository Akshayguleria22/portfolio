"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const certifications = [
  {
    title: "Advanced Python",
    issuer: "LinkedIn Learning",
    date: "2025",
    icon: "🐍"
  },
  {
    title: "Job Simulation",
    issuer: "Deloitte",
    date: "2025",
    icon: "💼"
  },
  {
    title: "Full Stack Development with Java",
    issuer: "Infosys Springboard",
    date: "2025",
    icon: "💻"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2025",
    icon: "☁️"
  },
  {
    title: "Blockchain: Decentralized Applications",
    issuer: "Chandigarh University",
    date: "2025",
    icon: "⛓️"
  },
  {
    title: "Learning how to learn-Powerful ways to learn",
    issuer: "Coursera",
    date: "2025",
    icon: "🧠"
  }
];

const achievements = [
  {
    title: "Wrote a Research Paper",
    description: "Secure file hosting on AWS and IIS integration",
    organization: "Chandigarh University",
    year: "2025",
    icon: "📄"
  },
  {
    title: "Filed a Patent",
    description: "UrbanGuardian - Smart city safety solution",
    organization: "Chandigarh University",
    year: "2024",
    icon: "⚡"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications & Achievements
        </motion.h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/30 transition-all h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{cert.icon}</span>
                        <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-300">
                        {cert.issuer}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-gray-400 text-sm">{cert.date}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎓</span>
              Academic Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/30 transition-all h-full">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <span className="text-4xl">{achievement.icon}</span>
                        <div>
                          <CardTitle className="text-white text-lg mb-2">
                            {achievement.title}
                          </CardTitle>
                          <CardDescription className="text-gray-300 mb-2">
                            {achievement.description}
                          </CardDescription>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-400">{achievement.organization}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400">{achievement.year}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
