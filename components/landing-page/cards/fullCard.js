import CardRowTwo from "./cardRowTwo";
const FullCard = (props) => {
  return (
    <div
      className={`bg-[#006cb5] w-[${props.width}] rounded-[10px] mb-[20px] pb-[20px]`}
    >
      <div className="flex justify-center bg-[#ed3237] rounded-t-[10px] h-[70px] font-bold text-white text-[25px] items-center">
        EVENTS AT A GLANCE
      </div>
      <div className="flex w-[100%] justify-around flex-wrap">
        {props.data.map((value, key) => {
          return <CardRowTwo data={value}></CardRowTwo>;
        })}
      </div>
    </div>
  );
};
export default FullCard;
