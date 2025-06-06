export default function TestPage() {
  return (
    <div className="min-h-screen bg-brand-gunmetal flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Test Page Works!</h1>
        <p className="text-white/80">If you can see this, the app is deployed correctly.</p>
        <a href="/" className="inline-block mt-4 px-6 py-2 bg-brand-crayola text-white rounded-lg hover:bg-brand-sky transition-colors">
          Go to Calculator
        </a>
      </div>
    </div>
  )
}