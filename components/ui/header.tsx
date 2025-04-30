"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Download, Menu, X } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            Waqar Safdar
          </motion.div>
          <nav className="hidden md:flex items-center gap-6">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="sm" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </motion.header>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
} 