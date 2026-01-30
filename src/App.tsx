import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [copied, setCopied] = useState(false);
  const referralCode = "PDXRVDJ";
  const cashAppUrl = useMemo(
    () => `https://cash.app/app/${referralCode}`,
    [referralCode]
  );

  const copyCode = () => {
    navigator.clipboard.writeText(referralCode).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="square-container">
      <header className="lux-header">
        <div className="brand-lockup">
          <h1 className="brand">Cash App</h1>
          <span className="divider-dot">·</span>
          <span className="subline">February Promotion</span>
        </div>
      </header>

      <main className="main-grid">
        <div className="code-panel">
          <label className="section-label">Referral Code</label>
          <button
            className={`code-display${copied ? " copied" : ""}`}
            onClick={copyCode}
            type="button"
          >
            {copied ? "Copied" : referralCode}
          </button>
          <p className="instruction">Enter during sign-up</p>
          <p className="sub-instruction">
            Send $5 within 14 days to qualify
          </p>
        </div>

        <div className="qr-panel">
          <label className="section-label">Scan to Download</label>
          <div className="qr-frame">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=8&color=1d1d1f&bgcolor=ffffff&data=${encodeURIComponent(
                cashAppUrl
              )}`}
              alt="Download Cash App"
              className="qr-image"
            />
          </div>
        </div>
      </main>

      <section className="steps-row">
        <div className="step-item">
          <div className="step-badge">1</div>
          <div className="step-text">
            <strong>Create</strong>
            <span>New account</span>
          </div>
        </div>

        <div className="step-connector" />

        <div className="step-item">
          <div className="step-badge">2</div>
          <div className="step-text">
            <strong>Enter Code</strong>
            <span>Input {referralCode}</span>
          </div>
        </div>

        <div className="step-connector" />

        <div className="step-item">
          <div className="step-badge">3</div>
          <div className="step-text">
            <strong>Send $5</strong>
            <span>Qualifying transaction</span>
          </div>
        </div>
      </section>

      <footer className="square-footer">
        <p>
          Reward issued after qualifying transaction · Valid through Feb 15, 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
