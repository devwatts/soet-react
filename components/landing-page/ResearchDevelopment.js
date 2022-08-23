export default function ResearchDevelopment(props) {
  return (
    <>
      <div
        className={`${
          props.currentOption == "RESEARCH & DEVELOPMENT"
            ? "flex mt-[50px] mb-[10px] items-start sm:w-[90%] ml-[auto] mr-[auto] md:w-[65%]"
            : "hidden"
        }`}
      >
        <div className="md:w-[80%] w-[100%] flex flex-col">
          <span className="text-[22px] text-[#006cb5] font-bold">
            Research & Development
          </span>

          <span className="mt-[10px]">
            Department has taken initiatives with focus on Research &
            development activities involving both faculty & students. Our
            students are equally contributing by publishing their project
            results in various journals. Good number of faculty members are
            involved in research activities as Ph.D scholars and others have
            initiated. <br></br> Faculty members are actively involved in
            research activities in following research domains:
          </span>
          <span className="mt-[20px]">
            <div>
              <ul>
                <li>→ Machine Learning & Data science</li>
                <li>→ Software Engineering</li>
                <li>→ Bioinformatics</li>
                <li>→ Database technologies</li>
                <li>→ Computer Networks</li>
                <li>→ Image Processing & Computer Vision</li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
