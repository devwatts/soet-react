const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const CardRow = (props) => {
  var newDate = new Date(parseInt(props.data.date));
  return (
    <div className="bg-[#ffffff] flex rounded-[10px] p-[15px] items-center mt-[12px]">
      <div className="bg-[#ed3237] h-[70px] w-[70px] flex flex-col items-center justify-center rounded-[10px]">
        <span className="text-white text-[13px]">
          {monthNames[newDate.getMonth()]}
        </span>
        <span className="text-white text-[20px] font-bold">
          {newDate.getDate()}
        </span>
        <span className="text-white text-[13px]">{newDate.getFullYear()}</span>
      </div>
      <div className="w-[70%] ml-[20px]">
        <span className="text-[14px] md:text-[15px]">
          {props.data.description}
        </span>
      </div>
    </div>
  );
};
export default CardRow;
