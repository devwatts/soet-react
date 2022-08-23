import ImageGallery from "react-image-gallery";
const images = [
  {
    original: "/static/images/alumni/Capture1.PNG",
    originalClass: "landing-highlight",
  },
  {
    original: "/static/images/alumni/Capture2.PNG",
    originalClass: "landing-highlight",
  },
  {
    original: "/static/images/alumni/Capture3.PNG",
    originalClass: "landing-highlight",
  },
  {
    original: "/static/images/alumni/Capture.PNG",
    originalClass: "landing-highlight",
  },
];
export default function Alumni(props) {
  return (
    <>
      <div
        className={`${
          props.currentOption == "ALUMNI"
            ? "flex flex-col-reverse justify-around w-[65%] sm:w-[65%] ml-[auto] mr-[auto] mt-[50px] mb-[10px] items-center"
            : "hidden"
        }`}
      >
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
