import React from 'react';
import { Award, CheckCircle2, Medal } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  verifier?: string;
  link?: string;
  id?: string;
}

const courseraProjects: Certificate[] = [
  {
    title: "Lead Generation Messenger Chatbot using Chatfuel",
    issuer: "Coursera",
    date: "May 23, 2024",
    verifier: "Abhishek Jha",
    link: "https://coursera.org/verify/B5KDZR6463U"
  },
  {
    title: "Google Ads for Beginners",
    issuer: "Coursera",
    date: "May 23, 2024",
    verifier: "Ishita Sinha",
    link: "https://coursera.org/verify/TN5HUWTCLUGX"
  },
  {
    title: "Search Engine Optimization (SEO) with Squarespace",
    issuer: "Coursera",
    date: "May 23, 2024",
    verifier: "Heather Dileepan",
    link: "https://coursera.org/verify/UE6L373HLUY5"
  },
  {
    title: "Introduction to Microsoft Excel",
    issuer: "Coursera",
    date: "May 20, 2024",
    verifier: "Summer Scaggs",
    link: "https://coursera.org/verify/V8V8322KMD8B"
  }
];

const skillarenaPrograms: Certificate[] = [
  {
    title: "Sales and Marketing Learning Program",
    issuer: "Skillarena",
    date: "July 5, 2024",
    verifier: "Mr. Sid Baliga & Shrey Tyagi",
    id: "SA0042SM"
  },
  {
    title: "Ethical Hacking Learning Program",
    issuer: "Skillarena",
    date: "April 10, 2024",
    verifier: "Mr. Rohit Gautam & Shrey Tyagi",
    id: "SA0022EN"
  },
  {
    title: "Website Development Learning Program",
    issuer: "Skillarena",
    date: "April 16, 2024",
    verifier: "Harsh Bhatia & Shrey Tyagi",
    id: "SA018WD"
  },
  {
    title: "Stock Marketing and Finance Learning Program",
    issuer: "Skillarena",
    date: "April 10, 2024",
    verifier: "Ms. Rubneet Anand & Shrey Tyagi",
    id: "SA041SM"
  }
];

const googleBadges = [
  "Prompt Design in Vertex AI Machine Learning",
  "Create Image Captioning Models",
  "Applying AI Principles with Google Cloud",
  "Foundations with Anthos",
  "Attention Mechanisms",
  "Encoder-Decoder Architecture",
  "Gemini in Gmail",
  "Gemini in Google Sheets",
  "Introduction to Image Generation",
  "Gemini in Google Docs",
  "Introduction to Responsible AI",
  "Introduction to Large Language Models",
  "Introduction to Generative AI"
];

function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h4 className="font-semibold text-gray-800 mb-2">{cert.title}</h4>
      <div className="space-y-1 text-sm text-gray-600">
        <p className="flex items-center gap-2">
          <Award className="w-4 h-4" />
          {cert.issuer}
        </p>
        <p className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          {cert.date}
        </p>
        {cert.verifier && (
          <p className="text-gray-500 text-sm">Verified by: {cert.verifier}</p>
        )}
        {cert.id && (
          <p className="text-gray-500 text-sm">Certificate ID: {cert.id}</p>
        )}
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-700 inline-flex items-center gap-1 mt-2"
          >
            Verify Certificate
          </a>
        )}
      </div>
    </div>
  );
}

export function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Certifications & Achievements</h2>
        
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-purple-600" />
              Coursera Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseraProjects.map((cert) => (
                <CertificateCard key={cert.title} cert={cert} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Medal className="w-6 h-6 text-purple-600" />
              Skillarena Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillarenaPrograms.map((cert) => (
                <CertificateCard key={cert.title} cert={cert} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-purple-600" />
              Google Cloud & Workspace Badges
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {googleBadges.map((badge) => (
                <div
                  key={badge}
                  className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow"
                >
                  <p className="text-gray-700 text-sm font-medium">{badge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}