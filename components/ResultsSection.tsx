'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CostBreakdown, calculateROI } from '@/lib/calculations';
import { formatCurrency, formatNumber, formatHours } from '@/lib/formatters';
import GlassCard from './GlassCard';
import CostBreakdownChart from './CostBreakdown';

interface ResultsSectionProps {
  costData: CostBreakdown;
}

function AnimatedCounter({ 
  from, 
  to, 
  duration = 2,
  formatter = (val: number) => val.toString()
}: { 
  from: number; 
  to: number; 
  duration?: number;
  formatter?: (val: number) => string;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, latest => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(formatter(from));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    
    const unsubscribe = rounded.onChange(latest => {
      setDisplayValue(formatter(latest));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, to, duration, formatter]);

  return <span>{displayValue}</span>;
}

export default function ResultsSection({ costData }: ResultsSectionProps) {
  const potentialSavings = calculateROI(costData.totalAnnualCost);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Hero Cost Display */}
      <motion.div variants={itemVariants}>
        <GlassCard className="text-center bg-gradient-to-br from-brand-crayola/10 to-brand-sky/10 border-brand-crayola/30">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-lg text-white/80 font-medium mb-2">
              Total Annual Cost of Poor GTM Data
            </h3>
            <div className="text-5xl md:text-6xl font-bold text-brand-sunflower mb-4">
              <AnimatedCounter 
                from={0} 
                to={costData.totalAnnualCost}
                duration={2.5}
                formatter={formatCurrency}
              />
            </div>
            <div className="text-brand-sunflower/80 text-lg">
              <AnimatedCounter 
                from={0} 
                to={costData.costPerRep}
                duration={2}
                formatter={(val) => `${formatCurrency(val)} per rep per year`}
              />
            </div>
          </motion.div>
        </GlassCard>
      </motion.div>

      {/* Cost Breakdown Grid */}
      <motion.div variants={itemVariants} className="grid gap-4">
        <div className="grid md:grid-cols-3 gap-4">
          <GlassCard className="text-center">
            <div className="text-brand-sky text-2xl font-bold mb-2">
              <AnimatedCounter 
                from={0} 
                to={costData.timeCost}
                formatter={formatCurrency}
              />
            </div>
            <h4 className="text-white/90 font-medium mb-1">Time Cost</h4>
            <p className="text-white/60 text-sm">
              <AnimatedCounter 
                from={0} 
                to={costData.hoursWastedPerYear}
                formatter={(val) => `${formatHours(val)} wasted annually`}
              />
            </p>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="text-brand-sea text-2xl font-bold mb-2">
              <AnimatedCounter 
                from={0} 
                to={costData.opportunityCost}
                formatter={formatCurrency}
              />
            </div>
            <h4 className="text-white/90 font-medium mb-1">Opportunity Cost</h4>
            <p className="text-white/60 text-sm">
              <AnimatedCounter 
                from={0} 
                to={costData.potentialDealsLost}
                formatter={(val) => `${formatNumber(val)} deals lost`}
              />
            </p>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="text-brand-aqua text-2xl font-bold mb-2">
              <AnimatedCounter 
                from={0} 
                to={costData.productivityCost}
                formatter={formatCurrency}
              />
            </div>
            <h4 className="text-white/90 font-medium mb-1">Productivity Cost</h4>
            <p className="text-white/60 text-sm">
              <AnimatedCounter 
                from={0} 
                to={costData.failedConnectionsPerYear}
                formatter={(val) => `${formatNumber(val)} failed connections`}
              />
            </p>
          </GlassCard>
        </div>
      </motion.div>

      {/* Chart */}
      <motion.div variants={itemVariants}>
        <GlassCard>
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Cost Breakdown Analysis
          </h3>
          <CostBreakdownChart costData={costData} />
        </GlassCard>
      </motion.div>

      {/* ROI Message */}
      <motion.div variants={itemVariants}>
        <GlassCard className="bg-gradient-to-r from-brand-sunflower/10 to-brand-crayola/10 border-brand-sunflower/30">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5, type: "spring" }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-sunflower flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-brand-gunmetal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Potential Annual Savings
            </h3>
            <div className="text-4xl font-bold text-brand-sunflower mb-4">
              <AnimatedCounter 
                from={0} 
                to={potentialSavings}
                duration={2}
                formatter={formatCurrency}
              />
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              Investing in quality GTM data could save your company this amount per year 
              by reducing manual work, improving connection rates, and increasing deal velocity.
            </p>
          </div>
        </GlassCard>
      </motion.div>

      {/* Action Buttons */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
        <motion.button
          className="w-full py-3 px-6 bg-brand-gradient text-white font-semibold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.print()}
        >
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Export Results</span>
          </div>
        </motion.button>

        <motion.button
          className="w-full py-3 px-6 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            const text = `I just calculated that poor GTM data is costing my company ${formatCurrency(costData.totalAnnualCost)} per year! Check out this calculator: ${window.location.href}`;
            navigator.clipboard.writeText(text);
          }}
        >
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <span>Share Results</span>
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}