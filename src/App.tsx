import { createElement, useEffect } from "react";
import "./App.css";

const AGENT_ID = "agent_6101m4d7xva6fymthez0fr4zd4t4";
// const WIDGET_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed";
const WIDGET_SRC = "https://elevenlabs.io/convai-widget/index.js"; 

const features = [
  {
    title: "Knowledge Base Search",
    text: "Ask questions and get answers grounded in our internal documents.",
  },
  {
    title: "Voice Conversations",
    text: "Talk to the ATG AI assistant naturally, hands-free.",
  },
  {
    title: "Always Available",
    text: "Get help from the AI team's assistant any time you need it.",
  },
];

function App() {
  // The widget script must be added from code. A <script> tag written
  // inside JSX will not run in React.
useEffect(() => {
  // Prevent duplicate script insertion
  if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) return;

  const script = document.createElement("script");
  script.src = WIDGET_SRC;
  script.async = true;
  script.type = "text/javascript";
  document.body.appendChild(script);
}, []);

  return (
    <div className="app">
      <header className="nav">
        <div className="logo">ATG <span>AI Team</span></div>
        <nav>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="badge">Welcome</p>
          <h1>
            Meet the <span className="accent">ATG AI Team</span> Assistant
          </h1>
          <p className="subtitle">
            Ask anything about our AI team, projects and knowledge base. Click
            the chat button at the bottom right to start a conversation.
          </p>
        </section>

        <section id="about" className="section">
          <h2>About Us</h2>
          <p>
            The ATG AI Team builds intelligent tools that help people find
            information faster and work smarter.
          </p>
        </section>

        <section id="features" className="section">
          <h2>What the Assistant Can Do</h2>
          <div className="cards">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        © {new Date().getFullYear()} ATG AI Team. All rights reserved.
      </footer>

      {/* ElevenLabs agent widget (createElement avoids TypeScript errors for the custom element) */}
      {createElement("elevenlabs-convai", { "agent-id": AGENT_ID })}
    </div>
  );
}

export default App;
