import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

document.body.className = "dark";
function App() {
  const [theme, setTheme] = useState(true);
  const [stickyv, setStickyv] = useState(true);
  function changeScene() {
    setTheme(!theme);
    document.body.className = theme ? "light" : "dark";
  }
  function changeSticky() {
    setStickyv(!stickyv);
    const stickyEl = document.getElementById("sticky");
    if (stickyEl) {
      stickyEl.className = stickyv
        ? "absolute top-0 left-0 h-full flex flex-col w-1/3"
        : "hidden";
    }
  }
  return (
    <>
      <Button className="fixed top-10 left-10" onClick={changeSticky}>
        - - -
      </Button>
      <h1>Ancient Olympic</h1>
      <Button className="fixed top-10 right-10" onClick={changeScene}>
        T
      </Button>
      <div id="sticky" className="hidden">
        <Button
          onClick={() => {
            window.location.href = "/#/download";
          }}
        >
          Downloads
        </Button>
        <Button>Help</Button>
        <Button onClick={changeSticky}>Back</Button>
      </div>
    </>
  );
}

export default App;
