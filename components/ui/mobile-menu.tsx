"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "./button";
import { Download } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-[250px] bg-background border-l z-50 p-6"
          >
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <a href="/resume.pdf" download onClick={onClose}>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 