export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(Math.round(num));
}

export function formatPercentage(num: number): string {
  return `${Math.round(num)}%`;
}

export function formatHours(hours: number): string {
  if (hours >= 1000) {
    return `${(hours / 1000).toFixed(1)}K`;
  }
  return formatNumber(hours);
}

export function abbreviateNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
}

export function formatLargeNumber(num: number): string {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(num);
}

export function formatDuration(hours: number): string {
  if (hours < 1) {
    return `${Math.round(hours * 60)} min`;
  }
  if (hours < 24) {
    return `${hours.toFixed(1)} hrs`;
  }
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;
  if (remainingHours === 0) {
    return `${days} days`;
  }
  return `${days}d ${remainingHours.toFixed(1)}h`;
}

export function formatSalaryRange(salary: number): string {
  const ranges = [
    { min: 0, max: 50000, label: 'Entry Level' },
    { min: 50000, max: 80000, label: 'Mid Level' },
    { min: 80000, max: 120000, label: 'Senior Level' },
    { min: 120000, max: 200000, label: 'Executive Level' },
  ];
  
  const range = ranges.find(r => salary >= r.min && salary <= r.max);
  return range ? range.label : 'Executive Level';
}