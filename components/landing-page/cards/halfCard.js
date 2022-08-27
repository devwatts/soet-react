import Link from "next/link";
import CardRow from "./cardRow";
import { useEffect, useState } from "react";

const HalfCard = (props) => {
  const [AnnouncementData, setAnnouncementData] = useState([]);
  const [AchievementsData, setAchievementsData] = useState([]);
  useEffect(() => {
    if (props.title == "Announcements") {
      setAnnouncementData(props.data.data);
    } else if (props.title == "Achievements") {
      setAchievementsData(props.data.data);
    }
  }, [props.data]);
  return (
    <div
      className={`bg-[#006cb5] mt-[20px] w-[90%] h-[fit-content] justify-center rounded-[10px] p-[20px] lg:mt-[20px] lg:w-[40%]`}
    >
      <div className="flex justify-between">
        <span className="text-white text-[20px] font-bold">{props.title}</span>
        <Link href="#">
          <a className="text-white">more...</a>
        </Link>
      </div>
      <div>
        {AnnouncementData
          ? AnnouncementData.map((value, key) => {
              return <CardRow key={key} data={value}></CardRow>;
            })
          : ""}
        {AchievementsData
          ? AchievementsData.map((value, key) => {
              return <CardRow key={key} data={value}></CardRow>;
            })
          : ""}
      </div>
    </div>
  );
};

export default HalfCard;
