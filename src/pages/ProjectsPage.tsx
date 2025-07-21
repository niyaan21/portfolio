import React from 'react';
import { motion } from 'framer-motion';
import { Projects } from '../components/Projects';

export function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Projects />
    </motion.div>
  );
}