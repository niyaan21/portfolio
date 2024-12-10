import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Search, Brain, ChevronDown } from 'lucide-react';
import { AnimatedText } from './AnimatedText';

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Main Hero Section */}
      <section className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <AnimatedText 
              text="Heello Niyaan here"
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent p-[70px]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
            >
              Exploring the frontiers of technology through AI, cloud computing, and innovative development.
            </motion.p>
          </motion.div>

          {/* Animated Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
          >
            {[
              { icon: <Code className="w-6 h-6" />, title: "Python Dev", color: "from-purple-500 to-purple-600" },
              { icon: <Brain className="w-6 h-6" />, title: "AI Enthusiast", color: "from-blue-500 to-blue-600" },
              { icon: <Cloud className="w-6 h-6" />, title: "Cloud Expert", color: "from-indigo-500 to-indigo-600" },
              { icon: <Search className="w-6 h-6" />, title: "Search Engine", color: "from-violet-500 to-violet-600" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 group-hover:scale-105">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-4 mx-auto`}>
                    {item.icon}
                  </div>
                  <h3 className="text-gray-800 font-medium text-sm md:text-base">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-white py-12 relative z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "ICSE Score", value: "93%" },
              { label: "Projects", value: "10+" },
              { label: "Certifications", value: "15+" },
              { label: "Tech Stack", value: "8+" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}