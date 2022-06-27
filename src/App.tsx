import React from "react";
import "./App.css";

import Cookies from "js-cookie";

Cookies.set("foo", "bar");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Source code change</h1>
      </header>
    </div>
  );
}

export default App;
