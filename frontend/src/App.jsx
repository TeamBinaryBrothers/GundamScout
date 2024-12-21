import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Box from "./Box";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="testButton">
        <button>Wishlist</button>
        <button>Collection</button>
        <button>Login</button>
      </div>
      <div className="app">
        <Box image="https://static.wikia.nocookie.net/gunplabuilders/images/f/fa/RG-RX-78-2-Gundam-(2.0)-box.jpg" />
        <Box content="Box 2" />
        <Box content="Box 3" />
        <Box content="Box 4" />
        <Box content="Box 5" />
        <Box content="Box 6" />
        <Box content="Box 7" />
        <Box content="Box 8" />
        <Box content="Box 9" />
        <Box content="Box 10" />
        <Box content="Box 11" />
        <Box content="Box 12" />
      </div>
    </>
  );
};

export default App;
