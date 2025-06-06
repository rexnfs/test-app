# GTM Data Cost Calculator

A modern, interactive Next.js application that helps companies understand the hidden costs of poor go-to-market data quality.

## Features

- **Interactive Cost Calculator**: Calculate time, opportunity, and productivity costs
- **Real-time Updates**: See results update as you adjust parameters
- **Animated UI**: Smooth animations and transitions using Framer Motion
- **Glass Morphism Design**: Modern, sophisticated visual design
- **Responsive**: Works perfectly on desktop and mobile devices
- **Export Results**: Print or share your cost analysis

## Tech Stack

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom brand colors
- **Framer Motion** for animations
- **React Hook Form** for form handling
- **Recharts** for data visualization

## Brand Colors

- Primary Blue (Crayola): `#2B6AEF`
- Sky Blue: `#1EC6F7`
- Sea Green: `#20C9AB`
- Aqua: `#32EFBF`
- Sunflower: `#FFBD12`
- Gunmetal: `#2A2C35`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This application is optimized for deployment on Vercel:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Deploy automatically

## Calculations

The calculator computes:

1. **Time Cost**: Hours wasted by sales reps on manual list building
2. **Opportunity Cost**: Deals lost due to inaccurate contact data  
3. **Productivity Cost**: Reduced efficiency from bad data quality
4. **Total Annual Cost**: Combined impact on the business

## Project Structure

```
/app
  layout.tsx          # Global layout and metadata
  page.tsx           # Main page component
  globals.css        # Global styles and animations
/components
  Calculator.tsx     # Main calculator logic
  InputSection.tsx   # Form inputs and sliders
  ResultsSection.tsx # Animated results display
  CostBreakdown.tsx  # Interactive chart component
  GlassCard.tsx      # Reusable glass morphism card
  Slider.tsx         # Custom branded slider component
/lib
  calculations.ts    # Cost calculation logic
  formatters.ts      # Number and currency formatting
```

## License

This project is for demonstration purposes.