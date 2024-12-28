'use client'
import React, { useEffect, useState, useRef } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Award, Calculator, ListTodo, Trophy, Landmark } from 'lucide-react';
import Footer from './components/Footer';

export default function Portfolio() {
  const heroRef = useRef(null);
  const achievementRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background effect
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['home', 'education', 'projects', 'achievements', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Interactive Calculator",
      description: "A fully functional calculator application with a modern interface. Features basic arithmetic operations, memory functions, and keyboard support. Built with focus on clean code and user experience.",
      tech: ["JavaScript", "HTML", "CSS"],
      icon: <Calculator className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />,
      image: "/api/placeholder/400/300"
    },
    {
      title: "ATM Machine Simulator",
      description: "A simulation of an ATM interface that handles withdrawals, deposits, and balance inquiries. Implements security features and transaction validation with a focus on real-world banking operations.",
      tech: ["JavaScript", "Object-Oriented Programming"],
      icon: <Landmark className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />,
      image: "/api/placeholder/400/300"
    },
    {
      title: "Todo List Application",
      description: "A dynamic task management application with features for adding, completing, and categorizing tasks. Includes local storage functionality to persist data across sessions.",
      tech: ["React", "LocalStorage", "CSS"],
      icon: <ListTodo className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />,
      image: "/api/placeholder/400/300"
    },
    {
      title: "Hackathon Project",
      description: "Participated in a hackathon where I developed an innovative solution. The project demonstrated my ability to work under pressure and deliver functional solutions within tight deadlines.",
      tech: ["Team Collaboration", "Problem Solving", "Rapid Development"],
      icon: <Trophy className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />,
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      
      {/* Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

          .pacifico {
            font-family: 'Pacifico', cursive;
          }

          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }

          .animate-shimmer {
            background: linear-gradient(
              90deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.15) 50%,
              rgba(255,255,255,0) 100%
            );
            background-size: 1000px 100%;
            animation: shimmer 2s infinite linear;
          }

           .slide-up {
            animation: slideUp 0.6s ease-out forwards;
            opacity: 0;
            transform: translateY(30px);
          }

          @keyframes slideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .nav-link {
            position: relative;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background: linear-gradient(to right, #e9d5ff, #9333ea);
            transition: width 0.3s ease;
          }

          .nav-link.active::after,
          .nav-link:hover::after {
            width: 100%;
          }
        `}
      </style>
      <div className="fixed top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full animate-float blur-xl"></div>
      <div className="fixed bottom-20 left-20 w-40 h-40 bg-indigo-500/20 rounded-full animate-float delay-1000 blur-2xl"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-purple-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="pacifico text-xl text-purple-300">RY</span>
            <div className="flex space-x-8">
              {['home', 'education', 'projects', 'achievements', 'skills', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`nav-link capitalize text-sm font-medium transition-all hover:text-purple-300 ${
                    activeSection === section ? 'text-purple-300 active' : 'text-gray-300'
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/Rutab-Yousuf"><Github className="w-5 h-5 text-purple-300 hover:text-purple-400 cursor-pointer transition-transform hover:scale-110" /></a>
              <a href="https://www.linkedin.com/in/rutab-yousuf-a380b0260"><Linkedin className="w-5 h-5 text-purple-300 hover:text-purple-400 cursor-pointer transition-transform hover:scale-110" /></a>
            </div>
          </div>
        </div>
      </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden" ref={heroRef}>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="pacifico text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text slide-up">
              Rutab Yousuf
            </h1>
            <p className="text-2xl text-purple-200 mb-4 slide-up" style={{animationDelay: "0.2s"}}>
              Chartered Management Accountant Student | Programmer | Educator
            </p>
            <p className="max-w-2xl mx-auto text-purple-100 mb-8 slide-up" style={{animationDelay: "0.4s"}}>
              Aspiring professional with a unique blend of accounting, programming, and teaching experience. 
              Currently pursuing CMA while exploring artificial intelligence through GIAIC.
            </p>
            <div className="flex justify-center space-x-4 slide-up" style={{animationDelay: "0.6s"}}>
             <a href="https://github.com/Rutab-Yousuf"><Github className="w-6 h-6 text-purple-300 hover:text-purple-400 transition cursor-pointer hover:scale-125" /></a> 
              <a href="https://www.linkedin.com/in/rutab-yousuf-a380b0260"><Linkedin className="w-6 h-6 text-purple-300 hover:text-purple-400 transition cursor-pointer hover:scale-125" /></a> 
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-purple-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="pacifico text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'CMA Managerial Level 1', org: 'ICMA Pakistan', time: 'Aug 2023 - Present' },
              { title: 'Governor Initiative for AI', org: 'GIAIC', time: 'Feb 2024 - Present' },
              { title: 'Intermediate in Commerce', org: 'Sir Syed Girls College', time: '2021 - 2023' },
              { title: 'Matriculation in Science', org: 'Faiz E Mushtaq Education Foundation', time: '2019 - 2021' }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-purple-800/30 rounded-lg border border-purple-700/50 hover:border-purple-500">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-purple-300">{item.org}</p>
                <p className="text-purple-400">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="pacifico text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-purple-800/30 rounded-lg overflow-hidden border border-purple-700/50 hover:border-purple-500 transition transform hover:-translate-y-2 backdrop-blur-sm">
                 
                    <div className="absolute top-4 right-4 bg-purple-900/80 p-2 rounded-full">
                      {project.icon}
                    </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-purple-200 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-purple-700/50 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Achievements Section */}
       <section id="achievements" className="py-20 bg-purple-900/30" ref={achievementRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="pacifico text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text">
            Achievements
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="group">
              <div className="bg-purple-800/30 p-8 rounded-lg border border-purple-700/50 hover:border-purple-500 transition transform hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 animate-shimmer"></div>
                <div className="relative">
                  <Award className="w-12 h-12 text-purple-400 mb-4 transform group-hover:rotate-12 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">Merit Certificate</h3>
                  <p className="text-purple-300">Business Mathematics and Statistical Interference</p>
                  <p className="text-purple-400">Operational Level 2 - ICMA</p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 bg-purple-700/50 rounded-full text-sm">Mathematics</span>
                    <span className="px-3 py-1 bg-purple-700/50 rounded-full text-sm">Statistics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

         {/* Skills Section */}
         <section id="skills" className="py-20 bg-purple-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="pacifico text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['MS Office', 'Programming', 'Communication', 'Mentoring', 'Time Management'].map((skill, index) => (
              <div key={index} className="p-4 bg-purple-800/30 rounded-lg text-center border">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{icon: <Phone />, text: '+92 318 2444188'}, {icon: <Mail />, text: 'rutabyousuf741@gmail.com'}, {icon: <MapPin />, text: 'Nazimabad no 1, Karachi'}].map((item, index) => (
            <div key={index} className="p-4 bg-purple-800/30 rounded-lg flex items-center gap-4">
              {item.icon}
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
