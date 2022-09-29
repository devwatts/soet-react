import { useState, useEffect } from "react";

const CardRowTwo = (props) => {
  const [cardData, setCardData] = useState({});
  useEffect(() => {
    setCardData(props.data);
  }, []);

  const splitDescription = cardData
    ? cardData.event_desc?.substring(0, 250)
    : "";
  return (
    <div className="flex flex-col w-[90%] bg-[#ffffff] mt-[30px] p-[15px] items-center rounded-[10px] lg:flex-row md:w-[45%]">
      <div className="mb-[30px] lg:mb-[0px]">
        <img className="h-[auto] max-w-[200px]" src={cardData?.event_cover} />
      </div>
      <div className="flex flex-col text-[16px] ml-[20px]">
        <span className="font-bold text-[19px]">{cardData?.event_name}</span>
        <span className="italic text-[14px]">{cardData?.event_date}</span>
        <span className="text-[16px]">
          {splitDescription} <a href="#">more ...</a>
        </span>
      </div>
    </div>
  );
};
export default CardRowTwo;
