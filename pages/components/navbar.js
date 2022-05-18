import react from "react";
import Image from "next/image";
import Link from 'next/link';

const Navbar = (props) => {
    return (
        <div className={props.transparent? 'flex w-[100%] justify-between absolute z-50 p-3' : 'flex w-[100%] justify-between z-50 p-3'}>
            <div className="flex">
                <div>
                    <Image src="/static/images/logo.png" width={"80px"} height={"80px"}/>
                </div>
                <div className="flex text-white flex-col justify-center	text-center font-bold ml-2">
                    <span className="text-2xl	">SOET</span>
                    <span className="text-sm font-bold">SCHOOL OF ENGINEERING AND TECHNOLOGY</span>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center text-white h-100 text-[17px] font-medium">
                <Link href="#"><a className="m-3 hover:text-red-400">Announcements</a></Link>
                <Link href="#"><a className="m-3 hover:text-red-400">Faculty</a></Link>
                <Link href="#"><a className="m-3 hover:text-red-400">Events</a></Link>
                <Link href="#"><a className="m-3 hover:text-red-400">Research</a></Link>
            </div>
        </div>
    )
}

export default Navbar;