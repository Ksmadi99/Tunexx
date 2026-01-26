import './App.css'
import groupPhoto from './assets/group-photo.jpg'

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
      <section className="hero">
        <h1>TUNEXX</h1>
        <p>WE EXIST ON OUR OWN TERMS</p>
        <span>DEBUT · EARLY MARCH 2026</span>
      </section>

      <section className="group-photo">
        <img src={groupPhoto} alt="Tunexx group" />
      </section>

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
