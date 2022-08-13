const CardRowTwo = () => {
    return (
        <div className="flex flex-col w-[90%] bg-[#ffffff] mt-[30px] p-[15px] items-center rounded-[10px] lg:flex-row md:w-[45%]">
            <div className="mb-[30px] lg:mb-[0px]">
                <img className="h-[auto] max-w-[200px]" src='https://itsmohitchahal.github.io/soet-krmu-static/images/events/evt-2.jpeg' />
            </div>
            <div className="flex flex-col text-[16px] ml-[20px]">
                <span className="font-bold text-[19px]">Web Development Workshop</span>
                <span className="italic text-[14px]">1 April 2022</span>
                <span className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus libero lacus, sit amet consectetur mauris vulputate et. Sed efficitur velit sit amet molestie accumsan.
more ...</span>
            </div>
        </div>
    );
}
export default CardRowTwo;