export default function SimplePage() {
  return (
    <div className="min-h-screen bg-brand-gunmetal p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          GTM Data Cost <span className="text-brand-crayola">Calculator</span>
        </h1>
        <p className="text-xl text-white/80 mb-8">
          Discover the hidden costs of poor go-to-market data quality.
        </p>
        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Calculator Coming Soon</h2>
          <p className="text-white/80">
            This is a simplified version to test deployment. The full calculator will load once we resolve any deployment issues.
          </p>
          <div className="mt-6">
            <button className="px-8 py-3 bg-brand-crayola text-white font-semibold rounded-xl hover:bg-brand-sky transition-colors">
              Test Button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}