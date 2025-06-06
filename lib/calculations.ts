export interface CalculatorInputs {
  numberOfReps: number;
  hoursPerDay: number;
  averageSalary: number;
  emailAccuracy: number;
  phoneAccuracy: number;
  jobTitleAccuracy: number;
  averageDealSize: number;
  dealsPerQuarter: number;
}

export interface CostBreakdown {
  timeCost: number;
  opportunityCost: number;
  productivityCost: number;
  totalAnnualCost: number;
  hoursWastedPerYear: number;
  failedConnectionsPerYear: number;
  potentialDealsLost: number;
  costPerRep: number;
}

export function calculateCosts(inputs: CalculatorInputs): CostBreakdown {
  const {
    numberOfReps,
    hoursPerDay,
    averageSalary,
    emailAccuracy,
    phoneAccuracy,
    jobTitleAccuracy,
    averageDealSize,
    dealsPerQuarter
  } = inputs;

  // Working days and hours per year
  const workingDaysPerYear = 250;
  const workingHoursPerYear = 2080;
  const hourlyRate = averageSalary / workingHoursPerYear;

  // Time cost calculation
  const hoursWastedPerRepPerYear = hoursPerDay * workingDaysPerYear;
  const hoursWastedPerYear = hoursWastedPerRepPerYear * numberOfReps;
  const timeCost = hoursWastedPerYear * hourlyRate;

  // Data accuracy calculations
  const averageDataAccuracy = (emailAccuracy + phoneAccuracy + jobTitleAccuracy) / 3;
  const dataInaccuracyRate = (100 - averageDataAccuracy) / 100;
  
  // Connection attempts per year (assuming each hour of list building = 10 connection attempts)
  const connectionAttemptsPerYear = hoursWastedPerYear * 10;
  const failedConnectionsPerYear = connectionAttemptsPerYear * dataInaccuracyRate;

  // Opportunity cost calculation
  const dealsPerYear = dealsPerQuarter * 4 * numberOfReps;
  const potentialDealsLost = Math.floor(dealsPerYear * dataInaccuracyRate * 0.3); // 30% of attempts could have been deals
  const opportunityCost = potentialDealsLost * averageDealSize;

  // Productivity cost (reduced efficiency due to bad data)
  const productivityLossRate = dataInaccuracyRate * 0.4; // 40% productivity loss from bad data
  const productivityCost = (averageSalary * numberOfReps) * productivityLossRate;

  // Total costs
  const totalAnnualCost = timeCost + opportunityCost + productivityCost;
  const costPerRep = totalAnnualCost / numberOfReps;

  return {
    timeCost,
    opportunityCost,
    productivityCost,
    totalAnnualCost,
    hoursWastedPerYear,
    failedConnectionsPerYear,
    potentialDealsLost,
    costPerRep
  };
}

export function calculateROI(currentCost: number, dataQualityImprovement: number = 0.8): number {
  // Assuming 80% improvement in data quality saves 80% of the calculated costs
  return currentCost * dataQualityImprovement;
}

export function getIndustryBenchmarks() {
  return {
    emailAccuracy: 75,
    phoneAccuracy: 68,
    jobTitleAccuracy: 72,
    averageDataAccuracy: 72,
    timeSpentOnListBuilding: 3.2, // hours per day
  };
}