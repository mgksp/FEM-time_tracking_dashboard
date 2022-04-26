import { DataCard, UserCard } from "./components";

import dataJson from "./data/data.json";

import workIcon from "./images/icon-work.svg";
import playIcon from "./images/icon-play.svg";
import studyIcon from "./images/icon-study.svg";
import exerciseIcon from "./images/icon-exercise.svg";
import socialIcon from "./images/icon-social.svg";
import selfCareIcon from "./images/icon-self-care.svg";
import { useState } from "react";

function App() {
  const [timeFrame, setTimeFrame] = useState("weekly");

  const colors = [
    "bg-work",
    "bg-play",
    "bg-study",
    "bg-exercise",
    "bg-social",
    "bg-selfCare",
  ];

  const icons = [
    workIcon,
    playIcon,
    studyIcon,
    exerciseIcon,
    socialIcon,
    selfCareIcon,
  ];

  const data = dataJson.map((item, idx) => ({
    ...item,
    color: colors[idx],
    icon: icons[idx],
  }));

  return (
    <div className="font-rubik min-h-screen bg-dkrBlue text-white text-lg grid grid-rows-main md:place-items-center">
      <main className="px-6 py-20 grid gap-6 max-w-6xl md:grid-cols-4">
        <UserCard setTimeFrame={setTimeFrame} />
        {data.map((item) => (
          <DataCard
            key={item.title}
            color={item.color}
            icon={item.icon}
            title={item.title}
            timeFrame={timeFrame}
            curr={item.timeframes[timeFrame].current}
            prev={item.timeframes[timeFrame].previous}
          />
        ))}
      </main>

      <footer className="text-xs text-center">
        Challenge by{" "}
        <a
          className="text-blue text-sm"
          rel="noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-blue text-sm"
          rel="noreferrer"
          href="https://www.github.com/mgksp"
          target="_blank"
        >
          Prabu
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
