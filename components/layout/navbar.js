import Image from "next/image";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <div
      className={
        props.transparent
          ? "flex w-[100%] justify-between lg:justify-between items-center absolute z-50 p-3"
          : "flex w-[100%] justify-between bg-[#006cb5] lg:justify-between items-center z-50 p-3"
      }
    >
      <div className="flex">
        <Link href="/">
          <Image
            src="/static/images/logo.png"
            class="cursor-pointer"
            width={props.transparent ? "80px" : "60px"}
            height={props.transparent ? "80px" : "60px"}
          />
        </Link>
        <div className="flex text-white flex-col justify-center	text-center lg:text-center font-bold ml-2">
          <span className="text-3xl">SOET</span>
          <span className="text-sm font-bold">
            SCHOOL OF ENGINEERING AND TECHNOLOGY
          </span>
        </div>
      </div>
      <div className="hidden lg:flex  flex-row justify-center items-center text-white h-100 text-[17px] font-medium">
        <Link href="#">
          <a className="m-3 font-light hover:text-red-400">Announcements</a>
        </Link>
        <Link href="/faculty">
          <a className="m-3 font-light hover:text-red-400">Faculty</a>
        </Link>
        <Link href="/events">
          <a className="m-3 font-light hover:text-red-400">Events</a>
        </Link>
        <Link href="#">
          <a className="m-3 font-light hover:text-red-400">Achievements</a>
        </Link>
        {/* <Link href="#">
          <a className="m-3 font-light hover:text-red-400">Research</a>
        </Link> */}
      </div>
      <div
        onClick={() => props.sideBarToggle(true)}
        className="flex justify-end cursor-pointer lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          className="fill-[white]"
        >
          <path d="M24 6H0V2h24v4zm0 4H0v4h24v-4zm0 8H0v4h24v-4z" />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
