import React from 'react';
import { Code, Server, Database, Palette, Globe, Cpu } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'Languages' |'systems'| 'other';
};

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};
// SKILLS DATA
export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Systems & Embedded',
      icon: <Cpu size={24} className="text-purple-400" />,
      skills: [
        { name: 'C++', level: 90, category: 'systems' },
        { name: 'Embedded Systems', level: 85, category: 'systems' },
        { name: 'Code Optimization', level: 88, category: 'systems' },
        { name: 'Microcontrollers (ARM, AVR, etc.)', level: 80, category: 'systems' },
        { name: 'OS/RTOS (FreeRTOS, Zephyr)', level: 75, category: 'systems' },
        { name: 'Low-level Debugging', level: 85, category: 'systems' },
      ],
    },

    {
      name: 'Frontend',
      icon: <Code size={24} className="text-blue-400" />,
      skills: [
        { name: 'React', level: 30, category: 'frontend' },
        { name: 'TypeScript', level: 40, category: 'frontend' },
        { name: 'Next.js', level: 50, category: 'frontend' },
        { name: 'HTML/CSS', level: 95, category: 'frontend' },
        { name: 'Tailwind CSS', level: 90, category: 'frontend' },
      ],
    },
    {
      name: 'Backend',
      icon: <Server size={24} className="text-green-400" />,
      skills: [
        { name: 'Node.js', level: 70, category: 'backend' },
        { name: 'Express', level: 70, category: 'backend' },
        { name: 'Python', level: 75, category: 'backend' },
        { name: 'GraphQL', level: 70, category: 'backend' },
      ],
    },
    {
      name: 'Database',
      icon: <Database size={24} className="text-yellow-400" />,
      skills: [
        { name: 'MongoDB', level: 85, category: 'database' },
        { name: 'PostgreSQL', level: 80, category: 'database' },
        { name: 'Firebase', level: 75, category: 'database' },
        { name: 'SQL', level: 65, category: 'database' },
      ],
    },
    {
      name: 'Languages',
      icon: <Palette size={24} className="text-purple-400" />,
      skills: [
        { name: 'c/c++', level: 90, category: 'Languages' },
        { name: 'Python', level: 85, category: 'Languages' },
        { name: 'JAVA', level: 80, category: 'Languages' },
        { name: 'Shell Script', level: 40, category: 'Languages' },
      ],
    },
    {
      name: 'Other',
      icon: <Globe size={24} className="text-red-400" />,
      skills: [
        { name: 'Git', level: 90, category: 'other' },
        { name: 'Networking', level: 75, category: 'other' },
        { name: 'BLINK', level: 70, category: 'other' },
        { name: 'linex', level: 65, category: 'other' },
      ],
    },
  ];
//END OF SKILL DATA
  return (
    <section id="skills" className="py-20">
      <div className="space-y-2 mb-12 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700">
          <Cpu size={14} className="text-green-400 mr-2" />
          <span className="text-xs text-gray-300">What I Know</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Technologies</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          I've worked with a variety of technologies throughout my career. Here's a snapshot of my technical expertise and skill set.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-gray-800">
                {category.icon}
              </div>
              <h3 className="ml-3 text-xl font-bold text-white">{category.name}</h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full">
                    <div 
                      className={`h-full rounded-full ${getColorForCategory(skill.category)}`}
                      style={{ width: `${skill.level}%` }}
                    > </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-gray-900 border border-gray-800 rounded-lg p-8">
        <h3 className="text-xl font-bold text-white mb-6">Learning Path</h3>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 border-l-2 border-gray-800"></div>
          
          <div className="space-y-8">
            {[
              { year: '2020', title: 'Started Learning Python Programming language', description: 'IDE, DSA,fundamentals,tkinterGUI' },
              { year: '2021', title: 'Python Project', description: 'IMPLIMANTATION and responsive design patterns With SQL' },
              { year: '2022', title: 'Web Development', description: 'HTML, CSS, TSX,JS and database management(MongoDB, firebase, SQL)' },
              { year: '2023', title: 'CORE Programming (C/C++,JAVA)', description: 'Advanced DSA patterns, OOPs, Code optimization' },
              { year: '2024', title: 'Systems & Embedded', description: 'Performance optimization, ardiuno, LINEX, ASM and RTOS' },
            ].map((item, index) => (
              <div key={index} className="relative flex">
                <div className="absolute left-6 transform -translate-x-1/2 mt-1">
                  <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-gray-900 z-10"></div>
                </div>
                <div className="ml-12">
                  <span className="inline-block px-2 py-1 bg-gray-800 text-green-400 text-xs rounded mb-2">{item.year}</span>
                  <h4 className="text-white font-bold">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function getColorForCategory(category: string): string {
  switch (category) {
    case 'frontend':
      return 'bg-gradient-to-r from-blue-500 to-blue-400';
    case 'backend':
      return 'bg-gradient-to-r from-green-500 to-green-400';
    case 'database':
      return 'bg-gradient-to-r from-yellow-500 to-yellow-400';
    case 'design':
      return 'bg-gradient-to-r from-purple-500 to-purple-400';
    case 'other':
      return 'bg-gradient-to-r from-red-500 to-red-400';
    default:
      return 'bg-gradient-to-r from-gray-500 to-gray-400';
  }
}
