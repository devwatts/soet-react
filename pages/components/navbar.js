import Image from "next/image";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <div
      className={
        props.transparent
          ? "flex w-[100%] justify-between lg:justify-between items-center absolute z-50 p-3"
          : "flex w-[100%] justify-center bg-[#006cb5] lg:justify-between items-center z-50 p-3"
      }
    >
      <div className="flex">
        <div>
          <Image src="/static/images/logo.png" width={"80px"} height={"80px"} />
        </div>
        <div className="flex text-white flex-col justify-center	text-center lg:text-center font-bold ml-2">
          <span className="text-3xl">SOET</span>
          <span className="text-sm font-bold">
            SCHOOL OF ENGINEERING AND TECHNOLOGY
          </span>
        </div>
      </div>
      <div className="hidden lg:block flex flex-row justify-center items-center text-white h-100 text-[17px] font-medium">
        <Link href="#">
          <a className="m-3 font-light hover:text-red-400">Announcements</a>
        </Link>
        <Link href="#">
          <a className="m-3 font-light hover:text-red-400">Faculty</a>
        </Link>
        <Link href="/events">
          <a className="m-3 font-light hover:text-red-400">Events</a>
        </Link>
        <Link href="#">
          <a className="m-3 font-light hover:text-red-400">Research</a>
        </Link>
        <Link href={"/auth/faculty/login"} passHref className={""}>
          <a
            className={
              "bg-[#ed3237] text-white px-[15px] py-1 transition-all t-[16px] rounded-[100px] hover:tracking-[1px]"
            }
          >
            Login
          </a>
        </Link>
      </div>
      <div
        onClick={() => props.sideBarToggle(true)}
        className="flex justify-end cursor-pointer lg:hidden"
      >
        <Image
          src={"/static/images/menu.png"}
          width={"30px"}
          height={"30px"}
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
