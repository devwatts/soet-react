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
export default function Highlights(props) {
  return (
    <>
      <div
        className={`${
          props.currentOption == "DEPARTMENT HIGHLIGHTS"
            ? "flex flex-col-reverse justify-around w-[65%] sm:w-[90%] ml-[auto] mr-[auto] mt-[50px] mb-[10px] items-center"
            : "hidden"
        }`}
      >
        <div className="w-[100%] mt-[30px] flex flex-col">
          <span className="text-[22px] text-[#006cb5] font-bold text-">
            Achieve the ultimate career growth with us
          </span>
          <span className="text-[16px]">
            SOET brings together outstanding academicians, industry
            professionals, and experienced researchers to impart hands-on and
            multi-disciplinary learning experience. The curriculum of the
            programs caters to the ever-changing needs and demands of the
            industry. The school has state-of-the-art infrastructure and
            domain-specific labs. SOET aims to provide exposure to the
            principles and practices of Design/Developments and projects in the
            field of Engineering. SOET offers Ph.D. programmes in all domains of
            the School.
          </span>
        </div>
        <div className=" mb-[40px] md:mb-[0px] w-[80%]">
          <ImageGallery
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={true}
            infinite={true}
            showBullets={true}
            items={images}
          />
        </div>
      </div>
    </>
  );
}
