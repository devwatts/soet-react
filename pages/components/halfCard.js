import Link from "next/link";
import CardRow from "./cardRow";

const HalfCard = (props) => {
    return(
        <div className={`bg-[#006cb5] mt-[20px] w-[90%] h-[100%] justify-center rounded-[10px] p-[20px] lg:mt-[20px] lg:w-[40%]`}>
            <div className="flex justify-between">
                <span className="text-white text-[20px] font-bold">
                    {props.title}
                </span> 
                <Link href="#"><a className="text-white">more...</a></Link>
            </div>
            <div>
                <CardRow></CardRow>
                <CardRow></CardRow>
                <CardRow></CardRow>
            </div>
        </div>
    );
}

export default HalfCard;