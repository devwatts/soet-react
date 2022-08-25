export default function HighlightNavigation(props) {
  return (
    <div className="bg-[#ed3237] h-[80px] z-50 w-[100%]  mt-[-80px]">
      <span className="ml-[40px] text-white text-[18px] font-bold bg-[#006cb5] h-[90px] absolute mt-[-10px] p-[20px] w-fit leading-[50px] lg:text-[1.5em]">
        {props.currentOption}
      </span>
    </div>
  );
}
