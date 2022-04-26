import { useState } from "react";
import userPic from "../images/image-jeremy.png";

const timeFrameEnum = {
  DAILY: "daily",
  WEEKLY: "weekly",
  MONTHLY: "monthly",
};

export default function UserCard({ setTimeFrame }) {
  const [active, setActive] = useState(timeFrameEnum.WEEKLY);

  return (
    <div className="bg-dkBlue rounded-2xl md:row-span-2">
      <div className="bg-blue p-7 rounded-2xl flex items-center gap-4 md:flex-col md:items-start md:pt-8 md:pb-20">
        <img
          className="border-4 border-white rounded-full w-16 md:mb-6 md:w-20"
          src={userPic}
          alt="user"
        />
        <div className="">
          <p className="text-mini">Report for</p>
          <h1 className="text-2xl font-light md:text-[2.5rem] md:leading-[3rem]">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div className="flex justify-between gap-3 p-7 font-light text-desaturatedBlue md:flex-col md:p-8 md:items-start">
        <div
          onClick={() => {
            setActive(timeFrameEnum.DAILY);
            setTimeFrame(timeFrameEnum.DAILY);
          }}
          className={
            active === timeFrameEnum.DAILY
              ? "cursor-pointer text-white"
              : "hover:text-white cursor-pointer"
          }
        >
          Daily
        </div>
        <div
          onClick={() => {
            setActive(timeFrameEnum.WEEKLY);
            setTimeFrame(timeFrameEnum.WEEKLY);
          }}
          className={
            active === timeFrameEnum.WEEKLY
              ? "cursor-pointer text-white"
              : "hover:text-white cursor-pointer"
          }
        >
          Weekly
        </div>
        <div
          onClick={() => {
            setActive(timeFrameEnum.MONTHLY);
            setTimeFrame(timeFrameEnum.MONTHLY);
          }}
          className={
            active === timeFrameEnum.MONTHLY
              ? "cursor-pointer text-white"
              : "hover:text-white cursor-pointer"
          }
        >
          Monthly
        </div>
      </div>
    </div>
  );
}
