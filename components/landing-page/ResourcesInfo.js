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
          props.currentOption == "RESOURCES"
            ? "flex mt-[50px] mb-[10px] items-start sm:w-[90%] ml-[auto] mr-[auto] md:w-[65%]"
            : "hidden"
        }`}
      >
        <div className="md:w-[80%] w-[100%] flex flex-col">
          <span className="text-[22px] text-[#006cb5] font-bold">
            Department Resources
          </span>
          <span className="text-[16px]">
            The department houses fully air-conditioned computer lab &
            Classrooms with state of art facilities with latest upgraded
            generation computers having licenses operating system, software
            licenses, latest teaching aids like Audio-Visual Classrooms,
            high-speed internet facilities & fully equiped Wi-Fi infrastructure.
            Department has a full time software development cell which offers
            our students the opportunity to work late in the evenings with
            faculty on real time problems & projects.
          </span>
          <span className="mt-[20px]">
            <span className="font-bold text-[19px] text-[#006cb5]">
              Major Computing labs
            </span>
            <div className="flex flex-col md:flex-row justify-between w-[90%]">
              <ul>
                <li>→ Programming Labs</li>
                <li>→ Microprocessor Lab</li>
                <li>→ Data Science Lab</li>
                <li>→ Computer Programming Lab</li>
              </ul>
              <ul>
                <li>→ Image Processing Lab</li>
                <li>→ Computer Organization Lab</li>
                <li>→ Web Development Lab</li>
                <li>→ Network Lab</li>
              </ul>
            </div>
          </span>
          <span className="mt-[20px]">
            <span className="font-bold text-[19px] text-[#006cb5]">
              Facilities for Value addition Learning in Labs
            </span>
            <div className="flex flex-col md:flex-row justify-between w-[90%]">
              <ul>
                <li>→ Machine Learning with Python & R</li>
                <li>→ Web Development & Design</li>
                <li>→ MSSql & open Source Databases</li>
                <li>→ Ethical Security and Hacking</li>
              </ul>
              <ul>
                <li>→ Open Source Technologies</li>
                <li>→ Artificial Intelligence</li>
                <li>→ Competitive Coding</li>
                <li>→ Mobile-App Development</li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
