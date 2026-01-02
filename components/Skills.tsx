"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = {
  "Frontend": {
    skills: ["React", "Redux", "JavaScript", "JSON", "UI/UX", "GSAP Animations"],
    icon: "⚛️"
  },
  "Backend": {
    skills: ["Node.js", "Python", "Express.js", "RESTful APIs", "MongoDB", "MySQL"],
    icon: "⚙️"
  },
  "Tools & Technologies": {
    skills: ["Visual Studio Code", "Git", "WordPress", "Cloudinary", "Socket.IO", "JWT"],
    icon: "🛠️"
  },
  "AI/ML & Other": {
    skills: ["Machine Learning", "Data Preprocessing", "Predictive Analysis", "Computer Vision", "Nodemailer", "Bcrypt"],
    icon: "✨"
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {Object.entries(skills).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/30 transition-all h-full group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{data.icon}</span>
                    <CardTitle className="text-white text-xl font-bold">
                      {category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
