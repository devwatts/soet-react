import Image from "next/image";

export default function FacultyCard(props) {
  console.log(props);
  return (
    <div className="bg-[#fff] h-[310px] m-[15px] flex flex-col p-[15px] cursor-pointer rounded hover:scale-105 transition-all">
      <div className="m-[auto]">
        <Image src={props.data.imageURL} height="220px" width="220px" />
      </div>
      <div className="bg-[#006cb5] p-[5px] flex flex-col text-center rounded-md">
        <span className="text-[16px] text-white">{props.data.name}</span>
        <span className="text-[14px] text-white italic">
          {props.data.designation}
        </span>
      </div>
    </div>
  );
}
