import Link from "next/link";
import Image from "next/image";

export default function SideBar(props) {
  return (
    <div
      className={`fixed z-[100] bg-[white] right-[0px] ${
        props.status ? "sidebar-open" : "sidebar-close"
      } h-[100vh] transition-all`}
    >
      <div className="p-[30px]">
        <div className="flex justify-end">
          <button
            onClick={() => {
              props.sideBarToggle(false);
            }}
          >
            <Image
              src={"/static/images/close-x.svg"}
              width={"30px"}
              height={"30px"}
            />
          </button>
        </div>
        <div className="flex flex-col">
          <Link href={"/"}>
            <a className="mt-[20px]">Home</a>
          </Link>
          <Link href={"#"}>
            <a className="mt-[20px]">Announcments</a>
          </Link>
          <Link href={"#"}>
            <a className="mt-[20px]">Achievements</a>
          </Link>
          <Link href={"/faculty"}>
            <a className="mt-[20px]">Faculty</a>
          </Link>
          <Link href={"/events"}>
            <a className="mt-[20px]">Events</a>
          </Link>
          <Link href={"#"}>
            <a className="mt-[20px]">Research</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
