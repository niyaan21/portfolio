import React from 'react';
import { Code, Bot, Search, Brain } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  link?: string;
}

const projects: Project[] = [
  {
    title: "AI-Powered Search Engine",
    description: "Built a custom search engine using Python and machine learning algorithms for improved search relevance and faster results.",
    technologies: ["Python", "Machine Learning", "NLP", "FastAPI"],
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Lead Generation Chatbot",
    description: "Developed an intelligent chatbot using Chatfuel for automated lead generation and customer engagement.",
    technologies: ["Chatfuel", "JavaScript", "API Integration"],
    icon: <Bot className="w-6 h-6" />
  },
  {
    title: "Language Model Project",
    description: "Created a small language model for specific domain tasks, implementing modern NLP techniques.",
    technologies: ["Python", "PyTorch", "Transformers", "NLP"],
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Cloud Infrastructure Setup",
    description: "Designed and implemented cloud infrastructure using AWS and Google Cloud for scalable applications.",
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
    icon: <Code className="w-6 h-6" />
  },
  // --- Added Projects ---
  {
    title: "Daily Affer",
    description: "A daily affirmation web app to boost positivity and mindfulness.",
    technologies: ["React", "Web App"],
    icon: <Search className="w-6 h-6" />,
    link: "https://dailyaffer.created.app/"
  },
  {
    title: "The Notes Maker",
    description: "A simple and effective notes app for organizing your thoughts.",
    technologies: ["React", "Productivity"],
    icon: <Code className="w-6 h-6" />,
    link: "https://thenotesmaker.netlify.app/"
  },
  {
    title: "The News Fetcher",
    description: "Fetch and read the latest news from various sources in one place.",
    technologies: ["React", "API", "News"],
    icon: <Search className="w-6 h-6" />,
    link: "https://thenewsfetcher.netlify.app/"
  },
  {
    title: "Poems from Photos",
    description: "Generate poems from your photos using AI.",
    technologies: ["AI", "React", "Creativity"],
    icon: <Brain className="w-6 h-6" />,
    link: "https://poemsfromphotos.netlify.app/"
  },
  {
    title: "Read It Later",
    description: "Save articles and read them later with a clean, distraction-free interface.",
    technologies: ["React", "Productivity"],
    icon: <Code className="w-6 h-6" />,
    link: "https://vø-read-it-later-app-iota.vercel.app/"
  },
  {
    title: "Health & Wellness Tracker",
    description: "Track your daily water intake and wellness habits.",
    technologies: ["React", "Health"],
    icon: <Search className="w-6 h-6" />,
    link: "https://vø-water-intake-tracker-bice.vercel.app/"
  },
  {
    title: "Fiancé App",
    description: "A finance management app to track expenses and features.",
    technologies: ["React", "Finance"],
    icon: <Bot className="w-6 h-6" />,
    link: "https://vø-flinance-app-features-nine.vercel.app/"
  },
  // --- End Added Projects ---
];

export function Projects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg text-purple-600 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-purple-600 hover:text-purple-700"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}