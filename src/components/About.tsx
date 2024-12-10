import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Currently pursuing my education at HR College, I'm passionate about technology
              and its potential to solve real-world problems. My journey in tech started
              during my time at Greenlawns High School, where I developed a strong foundation
              in computer science.
            </p>
            <div className="flex items-center gap-3 text-purple-600">
              <GraduationCap className="w-6 h-6" />
              <span className="font-medium">ICSE Board Score: 93%</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-600" />
              Technical Skills
            </h3>
            <div className="space-y-4">
              {[
                { skill: 'Python Development', level: 90 },
                { skill: 'AI/ML', level: 75 },
                { skill: 'AWS & Google Cloud', level: 70 },
                { skill: 'Search Engine Development', level: 85 }
              ].map((item) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.skill}</span>
                    <span className="text-gray-400">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}