const CardRow = () => {
    return (
        <div className="bg-[#ffffff] flex rounded-[10px] p-[15px] items-center mt-[12px]">
            <div className="bg-[#ed3237] h-[70px] w-[70px] flex flex-col items-center justify-center rounded-[10px]">
                <span className="text-white text-[13px]">Feb</span>
                <span className="text-white text-[20px] font-bold">26</span>
                <span className="text-white text-[13px]">2022</span>
            </div>
            <div className="w-[70%] ml-[20px]">
                <span className="text-[14px] md:text-[15px]">Workshop on Research Applications of flow cytometry in Biological Studies</span>
            </div>
        </div>
    );
}
export default CardRow;