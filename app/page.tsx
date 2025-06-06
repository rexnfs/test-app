export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#2A2C35',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        GTM Data Cost <span style={{ color: '#2B6AEF' }}>Calculator</span>
      </h1>
      <p style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
        ✅ App is working! This confirms the deployment is successful.
      </p>
      <p style={{ opacity: 0.7, textAlign: 'center' }}>
        Version: {new Date().toISOString()}
      </p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p>If you can see this, the Next.js app is deployed correctly on Vercel!</p>
      </div>
    </div>
  )
}