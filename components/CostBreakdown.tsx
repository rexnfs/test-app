'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { CostBreakdown } from '@/lib/calculations';
import { formatCurrency } from '@/lib/formatters';

interface CostBreakdownChartProps {
  costData: CostBreakdown;
}

export default function CostBreakdownChart({ costData }: CostBreakdownChartProps) {
  const data = [
    {
      name: 'Time Cost',
      value: costData.timeCost,
      color: '#1EC6F7', // brand-sky
      description: 'Hours wasted on manual list building'
    },
    {
      name: 'Opportunity Cost',
      value: costData.opportunityCost,
      color: '#20C9AB', // brand-sea
      description: 'Revenue lost from missed deals'
    },
    {
      name: 'Productivity Cost',
      value: costData.productivityCost,
      color: '#32EFBF', // brand-aqua
      description: 'Reduced efficiency from bad data'
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="glass rounded-lg p-4 border border-white/20">
          <p className="text-white font-semibold mb-1">{data.name}</p>
          <p className="text-brand-sunflower font-bold text-lg mb-2">
            {formatCurrency(data.value)}
          </p>
          <p className="text-white/70 text-sm">{data.description}</p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => {
    return (
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {payload.map((entry: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.5 }}
            className="flex items-center space-x-2"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-white/90 text-sm font-medium">
              {entry.value}
            </span>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
            animationBegin={0}
            animationDuration={1500}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}