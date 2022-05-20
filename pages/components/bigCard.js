import Link from "next/link";
import CardRow from "./cardRow";

const BigCard = (props) => {
    return(
        <div className={`bg-[#006cb5] w-[${props.width}] h-[${props.height}] rounded-[10px] p-[20px]`}>
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

export default BigCard;