import ellipsisIcon from "../images/icon-ellipsis.svg";

export default function DataCard({
  icon,
  color,
  title,
  curr,
  prev,
  timeFrame,
}) {
  const timeFrameEnum = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };
  return (
    <div
      className={`rounded-2xl pt-[2.375rem] relative z-0 overflow-hidden ${color} md:pt-12`}
    >
      <img className="absolute -top-1 right-4 -z-10" src={icon} alt="" />
      <div className="rounded-2xl px-6 py-7 bg-dkBlue h-full flex flex-col justify-between cursor-pointer hover:bg-dkBlueHover md:py-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-medium">{title}</h2>
          <img className="cursor-pointer" src={ellipsisIcon} alt="" />
        </div>
        <div className="flex justify-between items-center md:flex-col md:items-start md:gap-5">
          <h3 className="font-light text-[2rem] md:text-[3.5rem]">{curr}hrs</h3>
          <p className="font-light text-mini text-paleBlue tracking-[0.2px]">
            {timeFrameEnum[timeFrame]} - {prev}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
