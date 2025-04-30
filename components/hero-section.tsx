"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Yellow background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 to-yellow-50" />
      
      <div className="container relative py-20 md:py-32">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl"
          >
            <Image
              src="/profile.jpg"
              alt="Waqar Safdar"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Waqar Safdar
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Frontend Developer
            </h2>
            <p className="max-w-[42rem] text-gray-600 mb-8">
              Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 