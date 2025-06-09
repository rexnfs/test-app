export default function IndexPage() {
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
        ✅ Working via Pages Router!
      </p>
      <p style={{ opacity: 0.7, textAlign: 'center' }}>
        Deployed at: {new Date().toISOString()}
      </p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: 'rgba(43, 106, 239, 0.2)',
        borderRadius: '8px',
        textAlign: 'center',
        border: '1px solid rgba(43, 106, 239, 0.3)'
      }}>
        <p>This is using the traditional Pages Router instead of App Router.</p>
        <p>If you see this, we can build the calculator using Pages Router.</p>
      </div>
    </div>
  )
}