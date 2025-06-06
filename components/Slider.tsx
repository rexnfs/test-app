'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  unit?: string;
  gradient?: 'sea-aqua' | 'sky' | 'crayola';
  formatter?: (value: number) => string;
}

export default function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  unit = '',
  gradient = 'sea-aqua',
  formatter
}: SliderProps) {
  const [isDragging, setIsDragging] = useState(false);

  const gradientClasses = {
    'sea-aqua': 'from-brand-sea to-brand-aqua',
    'sky': 'from-brand-sky to-brand-crayola',
    'crayola': 'from-brand-crayola to-brand-sky'
  };

  const percentage = ((value - min) / (max - min)) * 100;

  const displayValue = formatter ? formatter(value) : value;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-white/90 font-medium text-sm">
          {label}
        </label>
        <motion.span 
          className="text-white font-semibold text-lg"
          key={value}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {displayValue}{unit}
        </motion.span>
      </div>
      
      <div className="relative">
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${gradientClasses[gradient]} rounded-full`}
            style={{ width: `${percentage}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        
        <motion.input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          whileTap={{ scale: 0.98 }}
        />
        
        <motion.div
          className="absolute top-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-brand-crayola transform -translate-y-1/2 pointer-events-none"
          style={{ left: `calc(${percentage}% - 10px)` }}
          animate={{ 
            scale: isDragging ? 1.2 : 1,
            boxShadow: isDragging 
              ? '0 0 20px rgba(43, 106, 239, 0.5)' 
              : '0 4px 12px rgba(0, 0, 0, 0.3)'
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </div>
  );
}