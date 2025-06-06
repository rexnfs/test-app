'use client';

import { Control, useController } from 'react-hook-form';
import { motion } from 'framer-motion';
import Slider from './Slider';
import { CalculatorInputs } from '@/lib/calculations';
import { formatCurrency } from '@/lib/formatters';

interface InputSectionProps {
  control: Control<CalculatorInputs>;
}

export default function InputSection({ control }: InputSectionProps) {
  const { field: numberOfReps } = useController({
    name: 'numberOfReps',
    control,
  });

  const { field: hoursPerDay } = useController({
    name: 'hoursPerDay',
    control,
  });

  const { field: averageSalary } = useController({
    name: 'averageSalary',
    control,
  });

  const { field: emailAccuracy } = useController({
    name: 'emailAccuracy',
    control,
  });

  const { field: phoneAccuracy } = useController({
    name: 'phoneAccuracy',
    control,
  });

  const { field: jobTitleAccuracy } = useController({
    name: 'jobTitleAccuracy',
    control,
  });

  const { field: averageDealSize } = useController({
    name: 'averageDealSize',
    control,
  });

  const { field: dealsPerQuarter } = useController({
    name: 'dealsPerQuarter',
    control,
  });

  return (
    <div className="space-y-8">
      {/* Team Size */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Slider
          label="Number of Sales Reps"
          value={numberOfReps.value}
          min={1}
          max={100}
          onChange={numberOfReps.onChange}
          gradient="sea-aqua"
        />
      </motion.div>

      {/* Time Investment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Slider
          label="Hours per Rep per Day on List Building/Research"
          value={hoursPerDay.value}
          min={0}
          max={8}
          step={0.5}
          onChange={hoursPerDay.onChange}
          unit=" hrs"
          gradient="crayola"
        />
      </motion.div>

      {/* Salary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <div className="flex justify-between items-center">
          <label className="text-white/90 font-medium text-sm">
            Average Rep Salary
          </label>
          <span className="text-white font-semibold text-lg">
            {formatCurrency(averageSalary.value)}
          </span>
        </div>
        <input
          type="range"
          min={40000}
          max={200000}
          step={5000}
          value={averageSalary.value}
          onChange={(e) => averageSalary.onChange(Number(e.target.value))}
          className="w-full h-2 bg-gradient-to-r from-brand-sunflower to-brand-crayola rounded-lg appearance-none cursor-pointer"
        />
      </motion.div>

      {/* Data Accuracy Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
          Data Accuracy Rates
        </h3>
        
        <Slider
          label="Email Accuracy"
          value={emailAccuracy.value}
          min={0}
          max={100}
          onChange={emailAccuracy.onChange}
          unit="%"
          gradient="sky"
        />

        <Slider
          label="Phone Number Accuracy"
          value={phoneAccuracy.value}
          min={0}
          max={100}
          onChange={phoneAccuracy.onChange}
          unit="%"
          gradient="sea-aqua"
        />

        <Slider
          label="Job Title/Company Accuracy"
          value={jobTitleAccuracy.value}
          min={0}
          max={100}
          onChange={jobTitleAccuracy.onChange}
          unit="%"
          gradient="crayola"
        />
      </motion.div>

      {/* Deal Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-6"
      >
        <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
          Deal Information
        </h3>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-white/90 font-medium text-sm">
              Average Deal Size
            </label>
            <span className="text-brand-sunflower font-semibold text-lg">
              {formatCurrency(averageDealSize.value)}
            </span>
          </div>
          <input
            type="range"
            min={5000}
            max={500000}
            step={5000}
            value={averageDealSize.value}
            onChange={(e) => averageDealSize.onChange(Number(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-brand-sunflower to-brand-crayola rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <Slider
          label="Deals per Rep per Quarter"
          value={dealsPerQuarter.value}
          min={1}
          max={20}
          onChange={dealsPerQuarter.onChange}
          gradient="sea-aqua"
        />
      </motion.div>
    </div>
  );
}