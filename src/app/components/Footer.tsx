"use client";

import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { ReactElement } from "react";

interface FooterLink {
  label: string;
  href: string;
  icon?: ReactElement;
}

const FooterComponent = () => {
  const quickLinks: FooterLink[] = [
    { label: "Home", href: "#home" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Skills", href: "#skills" },
  ];

  const technologies: string[] = [
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Lucide Icons",
  ];
  return (
    <footer className="bg-purple-900/30 border-t border-purple-700/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-purple-300 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    aria-label={`Navigate to ${link.label} section`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-purple-300 font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-purple-400">
                <Phone className="w-4 h-4" />
                <span>+92 318 2444188</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Mail className="w-4 h-4" />
                <span>rutabyousuf741@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <MapPin className="w-4 h-4" />
                <span>Nazimabad no 1, Karachi</span>
              </div>
            </div>
          </div>

          {/* Built With */}
          <div>
            <h3 className="text-purple-300 font-semibold mb-4">Built With</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-800/30 rounded-full text-sm text-purple-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Copyright & Social */}
        <div className="border-t border-purple-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-purple-300 text-sm">
                &copy; {new Date().getFullYear()} Rutab Yousuf. All rights
                reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <span className="pacifico text-xl text-purple-300">RY</span>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Rutab-Yousuf"
                  className="text-purple-300 hover:text-purple-400 transition-transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rutab-yousuf-a380b0260"
                  className="text-purple-300 hover:text-purple-400 transition-transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/tabie._here_.09/"
                  className="text-purple-300 hover:text-purple-400 transition-transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
