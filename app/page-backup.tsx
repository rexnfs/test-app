export default function Home() {
  return (
    <div className="min-h-screen bg-brand-gunmetal noise-texture">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            GTM Data Cost <span className="text-gradient">Calculator</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover the hidden costs of poor go-to-market data quality. 
            Calculate time, opportunity, and productivity costs to understand 
            the true impact on your business.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Company Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-white/90 font-medium text-sm mb-2">
                  Number of Sales Reps
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  defaultValue="10"
                  className="w-full h-2 bg-gradient-to-r from-brand-sea to-brand-aqua rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-right text-white font-semibold">10</div>
              </div>
              
              <div>
                <label className="block text-white/90 font-medium text-sm mb-2">
                  Hours per Day on List Building
                </label>
                <input 
                  type="range" 
                  min="0" 
                  max="8" 
                  step="0.5"
                  defaultValue="3"
                  className="w-full h-2 bg-gradient-to-r from-brand-crayola to-brand-sky rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-right text-white font-semibold">3 hrs</div>
              </div>
            </div>
            
            <button className="w-full mt-8 py-4 px-6 bg-brand-gradient text-white font-semibold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300">
              Calculate Your Costs
            </button>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-brand-gradient/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-brand-crayola" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl text-white/80 font-medium mb-2">Ready to Calculate</h3>
              <p className="text-white/60">Fill in your company details and click calculate to see your results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}