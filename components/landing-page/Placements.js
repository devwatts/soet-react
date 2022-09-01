export default function Placements(props) {
  return (
    <>
      <div
        className={`${
          props.currentOption == "PLACEMENT RECORDS"
            ? "flex mt-[50px] mb-[10px] items-start sm:w-[90%] ml-[auto] mr-[auto] md:w-[65%]"
            : "hidden"
        }`}
      >
        <div className="md:w-[80%] w-[100%] flex flex-col">
          <span className="text-[22px] text-[#006cb5] font-bold">
            Internship & Placement
          </span>

          <span className="mt-[10px]">
            KR Mangalam University aims at making students industry-ready with a
            regular curriculum and academic placements. Some of the companies
            that are a part of the KRMU placement drive are as follows:
          </span>
          <span className="mt-[20px]">
            <div className="flex flex-col md:flex-row justify-between w-[90%]">
              <ul>
                <li>→ HCL</li>
                <li>→ Paytm</li>
                <li>→ Oyo</li>
                <li>→ TCS</li>
              </ul>
              <ul>
                <li>→ Infosys</li>
                <li>→ Outlook</li>
                <li>→ CPA Global</li>
                <li>→ Airtel</li>
              </ul>
            </div>
          </span>
          <span className="mt-[20px]">
            <div className="flex flex-wrap w-[100%] justify-center md:justify-between ">
              <img
                src="/static/images/company-logos/Air-India-logo.jpg"
                className="w-[200px] h-[auto] max-h-[100px] mt-[10px]"
              />
              <img
                src="/static/images/company-logos/CI.TechMahindra.Profile.png"
                className="w-[200px] h-[auto] max-h-[100px] mt-[10px]"
              />
              <img
                src="/static/images/company-logos/JKC.jpg"
                className="w-[200px] h-[auto] max-h-[100px] mt-[10px]"
              />
              <img
                src="/static/images/company-logos/Speedways_tyres_logo.jpg"
                className="w-[200px] h-[auto] max-h-[100px] mt-[10px]"
              />
              <img
                src="/static/images/company-logos/Ultratech_Cement_Logo.svg.png"
                className="w-[200px] h-[auto] max-h-[100px] mt-[10px]"
              />
              <img
                src="/static/images/company-logos/Wipro-logo.jpg"
                className="w-[200px] h-[auto] max-h-[100px] mt-[10px]"
              />
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
