import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

document.body.className = "dark";
function App() {
  const [theme, setTheme] = useState(true);
  function changeScene() {
    setTheme(!theme);
    document.body.className = theme ? "light" : "dark";
  }
  return (
    <>
      <Button className="fixed top-10 left-10">- - -</Button>
      <h1>Ancient Olympic</h1>
      <Button className="fixed top-10 right-10" onClick={changeScene}>
        T
      </Button>
    </>
  );
}

export default App;
