export default function Home() {
  return (
    <main>
      <span className="badge">NEXT.JS · NEON POSTGRESQL</span>
      <h1>International OTP API</h1>
      <p>Starter project for a legitimate OTP verification flow for your own app or website.</p>
      <section className="card">
        <h2>API status</h2>
        <p>Health endpoint: <code>/api/health</code></p>
        <p>OTP request endpoint: <code>POST /api/otp/send</code></p>
        <p>OTP verify endpoint: <code>POST /api/otp/verify</code></p>
      </section>
      <section className="card">
        <h2>Before production</h2>
        <ul>
          <li>Connect Neon PostgreSQL and run <code>sql/schema.sql</code>.</li>
          <li>Set <code>DATABASE_URL</code> and a strong <code>OTP_HASH_SECRET</code>.</li>
          <li>Connect an authorized SMS verification provider before sending real SMS.</li>
          <li>Add authentication, rate limiting, abuse monitoring, and a privacy policy.</li>
        </ul>
        <p className="notice">Demo mode never sends a real SMS and never returns a generated OTP in the API response. Real SMS delivery is not configured in this starter.</p>
      </section>
    </main>
  );
}
