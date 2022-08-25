import Image from "next/image";

export default function FacultyCard() {
  return (
    <div className="bg-[#fff] h-[250px] m-[15px] flex flex-col p-[15px] cursor-pointer rounded">
      <div className="m-[auto]">
        <Image
          src="/static/images/faculty/pankaj.webp"
          height="160px"
          width="160px"
        />
      </div>
      <div className="bg-[#006cb5] p-[5px] flex flex-col text-center rounded">
        <span className="text-[16px] text-white">Dr. Pankaj Agarwal</span>
        <span className="text-[14px] text-white italic">Dean & Professor</span>
      </div>
    </div>
  );
}
