import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary app</header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          Coded by .{" "}
          <a src="https://github.com/Nastija-Sij" target="_blank">
            {"  "}
            Nastija Sij.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
