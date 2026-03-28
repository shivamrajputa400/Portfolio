import React from 'react';
import { User, Calendar, MapPin, Award, BookOpen, Coffee } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="space-y-2 mb-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700">
              <User size={14} className="text-green-400 mr-2" />
              <span className="text-xs text-gray-300">About Me</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Know More <span className="text-green-400">About Me</span>
            </h2>
          </div>
          
          <p className="text-gray-400 mb-6">
           I am a focused embedded systems programmer specializing in low-level development with C/C++. I design efficient, reliable firmware for microcontrollers and embedded platforms, integrating hardware interfaces, real-time constraints, and peripheral drivers. With working knowledge of system-level software, communication protocols, and embedded toolchains, I deliver robust solutions bridging hardware and software with precision and control.
          </p>
          
          <p className="text-gray-400 mb-6">
          Cyber Security enthusiast with hands-on experience in Web Application Penetration Testing (OWASP Top 10), 
Burp Suite, and security labs (PortSwigger, DVWA). Completed a Cyber Security internship at DRDO with 
practical exposure to vulnerability assessment, Linux security tooling, and network security concepts. 
Currently expanding into Cloud Security (AWS, IAM, Hybrid Multi-Cloud) and exploring AI Security fundamentals.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Calendar size={18} className="text-green-400 mr-2" />
              <span className="text-gray-300">Born:2004</span>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="text-green-400 mr-2" />
              <span className="text-gray-300">Location: Delhi(NCR),india</span>
            </div>
            <div className="flex items-center">
              <Award size={18} className="text-green-400 mr-2" />
              <span className="text-gray-300">Degree: Computer Science</span>
            </div>
            <div className="flex items-center">
              <BookOpen size={18} className="text-green-400 mr-2" />
              <span className="text-gray-300">Experience: self-employed</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition-colors duration-200"
            >
              Hire Me
            </a>
            <a 
              href="#" 
              className="px-6 py-3 rounded-md bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors duration-200"
            >
              Download CV
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg blur-3xl opacity-30 transform -rotate-6"></div>
          <div className="relative">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Work Experience</h3>
              
              <div className="space-y-4">
                {[
                  { 
                    position: 'executive', 
                    company: 'xpertenz', 
                    period: '2023 - 2024', 
                    description: 'Leading the frontend development team, implementing new features, and optimizing performance.' 
                  },
                  { 
                    position: 'founder', 
                    company: 'Grootz', 
                    period: '2023 - 2025', 
                    description: 'Developed responsive websites and applications for various clients across different industries.' 
                  },
                 
                ].map((job, index) => (
                  <div key={index} className="border-l-2 border-green-500 pl-4">
                    <h4 className="text-white font-bold">{job.position}</h4>
                    <p className="text-green-400 text-sm">{job.company}</p>
                    <p className="text-gray-500 text-xs mb-2">{job.period}</p>
                    <p className="text-gray-400 text-sm">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              
              <div className="space-y-4">
                {[
                  { 
                    degree: 'Bachelor of Computer Science', 
                    institution: 'Dr. APJ Abdul kalam Technichal University', 
                    period: '2022 - 2026', 
                    description: 'Foundations of programming, algorithms, software development ,Specialized in web technologies and human-computer interaction.' 
                  },
                ].map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <h4 className="text-white font-bold">{edu.degree}</h4>
                    <p className="text-blue-400 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-xs mb-2">{edu.period}</p>
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: <Coffee size={24} />, count: '200+', label: 'Coffee Cups' },
          { icon: <Award size={24} />, count: '15+', label: 'Certifications' },
          { icon: <BookOpen size={24} />, count: '10+', label: 'Projects Completed' },
          { icon: <User size={24} />, count: '2K+', label: 'Connections' },
        ].map((stat, index) => (
          <div 
            key={index} 
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center text-green-400 mb-3">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.count}</h3>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
