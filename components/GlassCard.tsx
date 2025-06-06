'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

export default function GlassCard({ 
  children, 
  className = '', 
  hover = false, 
  glow = false,
  delay = 0 
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      className={`
        glass rounded-2xl p-6 
        ${glow ? 'shadow-glow' : 'shadow-glass'}
        ${hover ? 'cursor-pointer transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}