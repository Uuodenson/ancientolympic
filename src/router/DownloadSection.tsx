import { Button } from "../components/ui/button";
import { useState } from "react";

const maps: { name: string; link: string }[] = [
  {
    name: "OlympicGames.mcworld(v.1.6.0)",
    link: "https://www.mediafire.com/file/e1seez0576ms7i8/OlympicGames_1.0.6.mcworld/file",
  },
  {
    name: "SavingChristmas.mcworld",
    link: "https://www.mediafire.com/file/zxyn74bdwt9zruw/%25C2%25A7cSaving_%25C2%25A7rChristmas.mcworld/file",
  },
  {
    name: "Birthday Parkour",
    link: "https://www.mediafire.com/file/3c92v2xs7cavipm/Birthday_Parkour.mcworld/file",
  },
  {
    name: "MobFishing Game",
    link: "https://www.mediafire.com/file/y5kqdwdyi72u51o/Mob-Fishing-Map.mcworld/file",
  },
];
function DownloadSection() {
  const [theme, setTheme] = useState(true);
  function changeScene() {
    setTheme(!theme);
    document.body.className = theme ? "light" : "dark";
  }
  return (
    <>
      <Button className="fixed top-10 right-10" onClick={changeScene}>
        T
      </Button>
      <Button
        className="fixed top-10 left-10"
        onClick={() => {
          window.location.href = "/ancientolympic/";
        }}
      >
        -
      </Button>
      <h1 className="text-5xl mb-5">Downloads</h1>
      <div className="flex flex-col justify-center items-center">
        {maps.map((map) => {
          return <>{mapDownload(map)}</>;
        })}
      </div>
      <hr className="w-full" />
    </>
  );
}

function mapDownload({
  link,
  name,
}: {
  link: string;
  name: string;
}): JSX.Element {
  return (
    <>
      <hr className="w-full mb-2" />
      <div className="flex flex-row justify-around w-full">
        <p className="font-bold min-w-60 mt-[0.5rem]">{name}</p>
        <a href={link} className="flex flex-row">
          <Button className="w-24">Download</Button>
          <img
            className="w-10 h-10"
            src="data:image/png;base64,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"
            alt="mediafire"
          />
        </a>
      </div>
      <div className="mt-2"></div>
    </>
  );
}

export default DownloadSection;
