import React, { useEffect, useState } from "react";
import "./App.css";
import HeroImage from "/assets/group-photo.jpg";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/tunexx-website/visits")
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch((err) => console.error("CountAPI error:", err));
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <img className="hero-img" src={HeroImage} alt="TUNEXX Group" />
        <h1 className="hero-title">T U N E X X</h1>
        <p className="hero-subtitle">7‑Member K‑pop Pre‑Debut Boy Group</p>
      </header>

      {/* Music Links */}
      <section className="music-section">
        <h2>Listen & Follow</h2>
        <div className="links">
          <a href="https://music.apple.com" target="_blank" rel="noreferrer">
            🎧 Apple Music
          </a>
          <a href="https://open.spotify.com" target="_blank" rel="noreferrer">
            🎶 Spotify
          </a>
          <a href="https://x.com/TUNEXX_official" target="_blank" rel="noreferrer">
            🐦 X (Twitter)
          </a>
        </div>
      </section>

      {/* Visitor Count */}
      <section className="visitor-count">
        <p>🌟 Visitors so far: {count}</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 TUNEXX Fansite</p>
      </footer>
    </div>
  );
}

export default App;

