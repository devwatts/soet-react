export default function VisionMission(props) {
  return (
    <>
      <div
        className={`${
          props.currentOption == "DEPARTMENT VISION & MISSION"
            ? "flex mt-[50px] mb-[10px] items-start sm:w-[90%] ml-[auto] mr-[auto] md:w-[65%]"
            : "hidden"
        }`}
      >
        <div className="md:w-[80%] w-[100%] flex flex-col">
          <span className="text-[22px] text-[#006cb5] font-bold">
            Vision & Mission
          </span>
          <span className="mt-[20px]">
            <span className="font-bold text-[19px] text-[#006cb5]">Vision</span>
            <div>
              <span>
                To be recognized as a Centre of Excellence imparting quality
                education and creating new opportunities for students to meet
                the challenges of technological development in Computer Science
                & Engineering
              </span>
            </div>
          </span>
          <span className="mt-[20px]">
            <span className="font-bold text-[19px] text-[#006cb5]">
              Mission
            </span>
            <div>
              <ul>
                <li>
                  → To promote technical proficiency by adopting effective
                  teaching learning processes.
                </li>
                <li>
                  → To provide environment & opportunity for students to bring
                  out their inherent talents for all round development.
                </li>
                <li>
                  → To promote latest technologies in Computer Science
                  Engineering and across disciplines in order to serve the needs
                  of Industry, Government, Society, and the Scientific
                  community.
                </li>
                <li>
                  → To educate students to be successful, ethical , effective
                  problem-solvers and life-long learners who will contribute
                  positively to the society.
                </li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
