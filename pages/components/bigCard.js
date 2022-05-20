import Link from "next/link";
const BigCard = (props) => {
    return(
        <div className={`bg-[#006cb5] w-[${props.width}] h-[${props.height}] rounded-[10px]`}>
            <div className="flex justify-between p-[20px]">
                <span className="text-white text-[20px] font-bold">
                    {props.title}
                </span> 
                <Link href="#"><a className="text-white">more...</a></Link>
            </div>
            <div>
                <div className="row">

                </div>
            </div>
        </div>
    );
}

export default BigCard;