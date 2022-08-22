import ImageGallery from "react-image-gallery";
const images = [
  {
    original:
      "https://www.krmangalam.edu.in/uploads/banner/36hbanner_poster-alibabacloudbanner.webp",
    originalClass: "landing-highlight",
  },
  {
    original: "https://www.krmangalam.edu.in/images/set-img-2.jpg",
    originalClass: "landing-highlight",
  },
  {
    original: "https://www.krmangalam.edu.in/images/set-img-3.jpg",
    originalClass: "landing-highlight",
  },
];
export default function ResourcesInfo(props) {
  return (
    <>
      <div
        className={`${
          props.currentOption == "DEPARTMENTAL PEO'S & PSO's"
            ? "flex mt-[50px] mb-[10px] items-start sm:w-[90%] ml-[auto] mr-[auto] md:w-[65%]"
            : "hidden"
        }`}
      >
        <div className="md:w-[80%] w-[100%] flex flex-col">
          <span className="text-[22px] text-[#006cb5] font-bold">
            PEOs and PSOs of Department
          </span>

          <span className="mt-[10px]">
            <span className="font-bold text-[19px] text-[#006cb5]">
              Program Educational Objectives (PEO)
            </span>
            <div>
              <ol className="list-decimal list-inside">
                <li className="mt-[5px]">
                  Graduates of the program will be able to apply fundamental
                  principles of engineering in problem solving and understand
                  the role of computing in multiple disciplines.
                </li>
                <li className="mt-[5px]">
                  Graduates will learn to apply various computational techniques
                  & tools for developing solutions & projects in real world.
                </li>
                <li className="mt-[5px]">
                  Be employed as computer science professionals beyond
                  entry-level positions or be making satisfactory progress in
                  graduate programs.
                </li>
                <li className="mt-[5px]">
                  Demonstrate that they can function, communicate, collaborate
                  and continue to learn effectively as ethically and socially
                  responsible computer science professionals.
                </li>
              </ol>
            </div>
          </span>
          <span className="mt-[20px]">
            <span className="font-bold text-[19px] text-[#006cb5]">
              Program Specific Outcomes (PSO)
            </span>
            <div>
              By the completion of program the student will have following
              Program specific outcomes.
              <ol className="list-decimal list-inside">
                <li className="mt-[5px]">
                  Foundation of Computer System: Ability to understand the
                  principles and working of computer systems.
                </li>
                <li className="mt-[5px]">
                  Foundations of Software development: Possess professional
                  skills and knowledge of software design process. Familiarity
                  and practical competence with a broad range of programming
                  language and open source platforms.
                </li>
                <li className="mt-[5px]">
                  Foundation of mathematical concepts: Ability to apply
                  mathematical methodologies to solve computation task, model
                  real world problem using appropriate data structure and
                  suitable algorithm.
                </li>
                <li className="mt-[5px]">
                  Applications of Computing and Research Ability: Ability to use
                  knowledge in various domains to identify research gaps and
                  hence to provide solution to new ideas and innovations.
                </li>
              </ol>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
