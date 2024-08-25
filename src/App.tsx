"use-client";

import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import IconNpm from "./assets/svgs/npm";
import IconMenu_hamburger from "./assets/svgs/hamburger";
import IconReact from "./assets/svgs/react";
import IconTypescript from "./assets/svgs/typescript";
import Logo from "./assets/images/logo.png";
import IconThemeLightDark from "./assets/svgs/theme";
document.body.className = "dark";
import { Card } from "./components/ui/card";
import IconYoutube from "./assets/svgs/youtube";
import IconDiscord from "./assets/svgs/discord";
import IconTwitter from "./assets/svgs/twitter";
import News from "./components/my-ui/News";
function Start(): JSX.Element {
  const [theme, setTheme] = useState(true);
  const [stickyv, setStickyv] = useState(true);
  function changeScene() {
    setTheme(!theme);
    document.body.className = theme ? "light" : "dark";
    document.querySelectorAll("#link_buttons").forEach((element) => {
      element.classList[theme ? "add" : "remove"]("bg-secondary-foreground");
      element.classList[theme ? "remove" : "add"]("bg-primary-foreground");
    });
  }
  function changeSticky() {
    setStickyv(!stickyv);
    const stickyEl = document.getElementById("sticky");
    if (stickyEl) {
      stickyEl.className = stickyv
        ? "absolute top-0 left-0 flex flex-col w-1/3 bg-slate-800"
        : "hidden";
    }
  }
  return (
    <>
      <Button className="fixed top-10 left-10" onClick={changeSticky}>
        <IconMenu_hamburger fontSize={30} />
      </Button>
      <img
        className="w-1/2 block mr-auto ml-auto"
        src={Logo}
        alt="Logo Image"
      />
      <Button className="fixed top-10 right-10" onClick={changeScene}>
        <IconThemeLightDark fontSize={30}></IconThemeLightDark>
      </Button>
      <div id="sticky" className="hidden">
        <h2 className="text-5xl mb-5">What do you want to find?</h2>
        <Button
          className="w-full"
          onClick={() => {
            window.location.href = "/ancientolympic/#/download";
          }}
        >
          Downloads
        </Button>
        <Button className="w-full">Help</Button>
        <Button className="w-full" onClick={changeSticky}>
          Back
        </Button>
      </div>
    </>
  );
}

function Socials(): JSX.Element {
  return (
    <>
      <h2 className="text-3xl">Socials</h2>
      <Card className="max-w-64 flex flex-row mr-auto ml-auto justify-around pt-2 pb-2">
        <a href="https://discord.gg/ancientolympic">
          <Button size="icon">
            <IconDiscord></IconDiscord>
          </Button>
        </a>
        <a href="https://youtube.com/@ancientolympic">
          <Button size="icon">
            <IconYoutube></IconYoutube>
          </Button>
        </a>
        <a href="https://x.com/AncientOlympic">
          <Button size="icon">
            <IconTwitter></IconTwitter>
          </Button>
        </a>
      </Card>
    </>
  );
}

function AboutSection(): JSX.Element {
  return (
    <>
      <Card className="p-20">
        <h2 className="text-3xl">
          About Us
          <p className="text-lg">
            We are Ancient Olympic, a Minecraft Bedrock Map creator team. Maps
            like the ones you see here are created by us. Primarily Story an
            Minigames Maps
          </p>
        </h2>
      </Card>
    </>
  );
}

function End(): JSX.Element {
  return (
    <>
      <div className="bg-red-500 w-full flex flex-col">
        <h2>We are currently not affiliated with Minecraft Marketplace</h2>
        <div className="flex justify-center items-center flex-row">
          <IconNpm id="icons" fontSize={100} color="black" />
          <IconReact id="icons" fontSize={100} color="black" />
          <IconTypescript id="icons" fontSize={100} color="black" />
        </div>
        <div className="flex justify-center items-center flex-row">
          <Link name="Discord" link="https://discord.gg/ancientolympic" />
          <Link name="GitHub" link="https://github.com/Uuodenson" />
          <Link name="Youtube" link="https://www.youtube.com/@ancientolympic" />
          <Link
            name="MCPedl"
            link="https://mcpedl.com/user/olympic-studios-1/"
          />
        </div>
        <p>S7riel & Felixbox2855</p>
        <p>Copyright @ Ancient Olympic 2024</p>
      </div>
    </>
  );
}

function Link({ name, link }: { name: string; link: string }): JSX.Element {
  return (
    <>
      <a href={link}>
        <Button
          id="link_buttons"
          className="bg-secondary-foreground"
          variant={"link"}
        >
          {name}
        </Button>
      </a>
    </>
  );
}

function App(): JSX.Element {
  return (
    <>
      <Start />
      <News />
      {<Socials />}
      <AboutSection />
      <End />
    </>
  );
}

export default App;
