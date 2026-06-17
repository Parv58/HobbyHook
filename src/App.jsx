import { useState } from 'react'
import Form from "./form.jsx"
function App() {
  return (
    <>
      <h2
  style={{
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.7rem",
    fontWeight: "500",
    lineHeight: "1.8",
    textAlign: "center",
    color: "white",
    letterSpacing: "0.5px",
    textShadow: "2px 2px 15px rgba(0,0,0,0.25)",
    maxWidth: "900px",
    margin: "0 auto"
  }}
>
  “You’re not tired. You’re just bored of things you never loved.
  The only way out of the endless scroll is to chase what actually sets your mind on fire.”
</h2>

<br /><br />

<h2
  style={{
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.7rem",
    fontWeight: "500",
    lineHeight: "1.8",
    textAlign: "center",
    color: "white",
    letterSpacing: "0.5px",
    textShadow: "2px 2px 15px rgba(0,0,0,0.25)",
    maxWidth: "900px",
    margin: "0 auto"
  }}
>
  “The best time to start something new was yesterday. The next best? Right now.”
</h2>
      <br /><br /><br /><br />
      <Form />
    </>
  )
}

export default App