import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Sidebar />
        <Content />
      </main>
    </>
  );
}

export default App;
