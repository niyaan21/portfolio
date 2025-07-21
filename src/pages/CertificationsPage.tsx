import React from 'react';
import { motion } from 'framer-motion';
import { Certifications } from '../components/Certifications';

export function CertificationsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Certifications />
    </motion.div>
  );
}