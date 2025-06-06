'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { calculateCosts, type CalculatorInputs } from '@/lib/calculations';
import GlassCard from './GlassCard';
import InputSection from './InputSection';
import ResultsSection from './ResultsSection';

export default function Calculator() {
  const [showResults, setShowResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const { control, watch, handleSubmit } = useForm<CalculatorInputs>({
    defaultValues: {
      numberOfReps: 10,
      hoursPerDay: 3,
      averageSalary: 75000,
      emailAccuracy: 75,
      phoneAccuracy: 68,
      jobTitleAccuracy: 72,
      averageDealSize: 25000,
      dealsPerQuarter: 4
    }
  });

  const formData = watch();
  
  const costData = useMemo(() => {
    return calculateCosts(formData);
  }, [formData]);

  const handleCalculate = useCallback(async () => {
    setIsCalculating(true);
    
    // Add a small delay for UX
    setTimeout(() => {
      setShowResults(true);
      setIsCalculating(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            GTM Data Cost{' '}
            <span className="text-gradient">Calculator</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover the hidden costs of poor go-to-market data quality. 
            Calculate time, opportunity, and productivity costs to understand 
            the true impact on your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="sticky top-8">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">
                    Company Details
                  </h2>
                  <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>

                <InputSection control={control} />

                <motion.button
                  type="button"
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className="w-full py-4 px-6 bg-brand-gradient text-white font-semibold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isCalculating ? (
                    <div className="flex items-center justify-center space-x-2">
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Calculating...</span>
                    </div>
                  ) : (
                    'Calculate Your Costs'
                  )}
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {showResults ? (
              <ResultsSection costData={costData} />
            ) : (
              <GlassCard className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 mx-auto mb-6 rounded-full bg-brand-gradient/20 flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg className="w-12 h-12 text-brand-crayola" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl text-white/80 font-medium mb-2">
                    Ready to Calculate
                  </h3>
                  <p className="text-white/60">
                    Fill in your company details and click calculate to see your results
                  </p>
                </div>
              </GlassCard>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}