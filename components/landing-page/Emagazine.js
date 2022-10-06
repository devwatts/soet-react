import ImageGallery from "react-image-gallery";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Emagazine(props) {
  const { push } = useRouter();
  return (
    <>
      <div
        className={`${
          props.currentOption == "MAGAZINE"
            ? "flex justify-around mt-[50px] mb-[10px] items-center w-[100%] lg:w-[65%]"
            : "hidden"
        }`}
      >
        <div className="w-[100%]  flex flex-col">
          <span className="text-[22px] text-[#006cb5] font-bold text-">
            E-Magazines
          </span>
          <span className="text-[16px] flex flex-col">
            <button
              onClick={() => push("https://krmangalameduin-my.sharepoint.com/:b:/g/personal/1901010026_krmu_edu_in/ESJ59RCIFzNAgSFUqEW85foBEprS3sr4KG85bkUr2fG33g?e=EMYpA9")}
              className="bg-[#ed3237] text-white p-[15px] transition-all t-[16px] rounded-[100px] w-[fit-content] hover:tracking-[1px] m-5"
            >
              Prism (JAN - MARCH 2022)
            </button>
            <button
              onClick={() => push("https://krmangalameduin-my.sharepoint.com/:b:/g/personal/1901010026_krmu_edu_in/ETnljUbkblBCsMosOittPoEB2WpaM_N5a5w1CnLz_FoSxg?e=h2qgrX")}
              className="bg-[#ed3237] text-white p-[15px] transition-all t-[16px] rounded-[100px] w-[fit-content] hover:tracking-[1px] m-5"
            >
              Prism (APRIL - MAY 2022)
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
