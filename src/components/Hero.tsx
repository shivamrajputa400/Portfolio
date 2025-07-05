import { useState, useEffect } from 'react';

import { ChevronDown, Terminal, Code, GitBranch } from 'lucide-react';

export const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Software Developer & Embedded Designer';
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700">
              <Terminal size={14} className="text-green-400 mr-2" />
              <span className="text-xs text-gray-300">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hey, There <span className="text-green-400">Shivam Rajput</span>
            </h1>
            
            <div className="h-8 relative">
              <span className="text-xl md:text-2xl text-gray-300">
                {text}
                <span className="animate-pulse inline-block h-5 w-2 ml-1 bg-green-400"></span>
              </span>
            </div>
            
            <p className="text-gray-400 max-w-lg">
              I build exceptional digital experiences with a focus on performance, 
              accessibility, and cutting-edge technologies. Let's create something amazing together.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition-colors duration-200"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-md bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors duration-200"
              >
                Contact Me
              </a>
               <a 
                href="https://kali-terminal.netlify.app/" 
                className="px-6 py-3 rounded-md bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors duration-200"
              >
                Terminal~
              </a>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Profile Photo Section */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Animated Border Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-1 animate-spin-slow">
                  <div className="rounded-full bg-gray-950 p-1">
                    <div className="w-40 h-40 rounded-full bg-gray-900"></div>
                  </div>
                </div>
                
                {/* Profile Image */}
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                  <img
                    src="https://github.com/shivamrajputa400.png"
                    alt="Shivam Rajput - Profile"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  
                  {/* Online Status Indicator */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center animate-bounce">
                  <Code size={20} className="text-green-400" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce delay-300">
                  <GitBranch size={20} className="text-blue-400" />
                </div>
              </div>
            </div>
            
            {/* Code Terminal Background */}
            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-500">portfolio.tsx</div>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex">
                  <span className="text-gray-500 mr-4">1</span>
                  <span className="text-purple-400">const</span>
                  <span className="text-white mx-2">developer</span>
                  <span className="text-purple-400">=</span>
                  <span className="text-gray-300 mx-2">{'{'}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">2</span>
                  <span className="text-gray-300 ml-4">name:</span>
                  <span className="text-green-400 ml-2">'Shivam Rajput'</span>
                  <span className="text-gray-300">,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">3</span>
                  <span className="text-gray-300 ml-4">skills:</span>
                  <span className="text-blue-400 ml-2">[</span>
                  <span className="text-green-400">'C++'</span>
                  <span className="text-gray-300">,</span>
                  <span className="text-green-400">'Embedded'</span>
                  <span className="text-gray-300">,</span>
                  <span className="text-green-400">'DATABASE'</span>
                  <span className="text-blue-400">]</span>
                  <span className="text-gray-300">,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">4</span>
                  <span className="text-gray-300 ml-4">isAvailable:</span>
                  <span className="text-orange-400 ml-2">true</span>
                  <span className="text-gray-300">,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">5</span>
                  <span className="text-gray-300 ml-4">contact:</span>
                  <span className="text-gray-300 ml-2">()</span>
                  <span className="text-purple-400 ml-2">console</span>
                  <span className="text-gray-300">.</span>
                  <span className="text-blue-400">log</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-green-400">'Let's connect!'</span>
                  <span className="text-gray-300">)</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">6</span>
                  <span className="text-gray-300">{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};
