import CardRowTwo from "./cardRowTwo";
import { useState, useEffect } from "react";

const FullCard = (props) => {
  const [sortedEvents, setSortedEvents] = useState([]);
  useEffect(() => {
    setSortedEvents(
      props.data.sort(function (a, b) {
        return new Date(a.event_end_date) - new Date(b.event_end_date);
      })
    );
  }, [props.data]);

  return (
    <div
      className={`bg-[#006cb5] w-[${props.width}] rounded-[10px] mb-[20px] pb-[20px]`}
    >
      <div className="flex justify-center bg-[#ed3237] rounded-t-[10px] h-[70px] font-bold text-white text-[25px] items-center">
        EVENTS AT A GLANCE
      </div>
      <div className="flex w-[100%] justify-around flex-wrap">
        {sortedEvents.map((value, key) => {
          if (value) {
            return <CardRowTwo data={value}></CardRowTwo>;
          }
        })}
      </div>
    </div>
  );
};
export default FullCard;
