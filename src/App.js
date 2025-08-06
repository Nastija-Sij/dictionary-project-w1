import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          Coded with 🤍 by{" "}
          <a
            href="https://github.com/Nastija-Sij"
            target="_blank"
            rel="noreferrer"
          >
            {"  "}
            Nastija Sij
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
