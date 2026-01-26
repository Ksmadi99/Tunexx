import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // or App.css if you prefer

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

import groupPhoto from './assets/group-photo.jpg' // Put your group photo in src/assets/

function App() {
  const members = [
    { name: 'PARK DONGGYU', role: 'Leader' },
    { name: 'KIM INHU', role: 'Oldest' },
    { name: 'PARK JAEHOON', role: 'Member' },
    { name: 'MOONSUNGJUN', role: 'Member' },
    { name: 'TAIRA', role: 'Member' },
    { name: 'KIM SIHWAN', role: 'Member' },
    { name: 'ARCTIC', role: 'Youngest' },
  ]

  return (
    <div className="App">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>TUNEXX</h1>
        <p>WE EXIST ON OUR OWN TERMS</p>
        <span>DEBUT · EARLY MARCH 2026</span>
      </section>

      {/* GROUP PHOTO */}
      <section className="group-photo">
        <img src={groupPhoto} alt="Tunexx group" />
      </section>

      {/* MEMBERS SECTION */}
      <section className="members">
        <h2>MEMBERS</h2>
        <div className="member-cards">
          {members.map((m) => (
            <div className="member-card" key={m.name}>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
