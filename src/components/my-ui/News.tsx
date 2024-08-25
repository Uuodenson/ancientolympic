import { useState } from "react";
import { Button } from "../ui/button";
import DiscordBanner from "../../assets/discordbanner.svg";
import { Card } from "../ui/card";
const news: { src: string; title: string; link: string }[] = [
  {
    src: "https://yt3.googleusercontent.com/fcC_OVaROlTodUacWSOVpdZOsdFJ05g0EuYzpZ9vLaekEVm3xfaLmfDAzWWFhdRAmJLOB4R2USE=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    title: "We are Olympic Games",
    link: "https://mcpedl.com/user/olympic-studios-1/",
  },
  {
    src: "https://media.discordapp.net/attachments/1065334159993737216/1203784042277896232/og.png?ex=66cc2e80&is=66cadd00&hm=56fed4e03a62c2093719bf3dd16bfbff8d5aa7fd97aba3401878538cd681685f&=&format=webp&quality=lossless&width=550&height=309",
    title: "Olympic Games 2.0",
    link: "google.com",
  },
  {
    src: DiscordBanner,
    title: "Join our Discord",
    link: "https://discord.gg/ancientolympic",
  },
];
function News() {
  const timervalue = 25;
  const [index, setIndex] = useState(0);
  setInterval(() => {
    if (index + 1 < news.length) setIndex(index + 1);
    else setIndex(0);
  }, timervalue * 1000);
  return (
    <>
      <Card>
        <div>
          <p className="text-3xl bg-slate-700 w-full rounded-sm pb-2">
            {news[index].title}
          </p>

          <div className="flex flex-row justify-center mr-auto ml-auto">
            <Button
              className="h-auto"
              onClick={() => {
                if (index + 1 < news.length) setIndex(index + 1);
                else setIndex(0);
              }}
            >
              +
            </Button>
            <div
              className="w-1/2 overflow-hidden object-fill rounded-sm"
              onClick={() => (window.location.href = news[index].link)}
            >
              <img
                className="w-full h-64"
                src={news[index].src}
                alt={news[index].title}
              />
            </div>
            <Button
              className="h-auto mr-2"
              onClick={() => {
                if (index - 1 >= 0) setIndex(index - 1);
                else setIndex(news.length - 1);
              }}
            >
              -
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}

export default News;
