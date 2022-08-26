import Navbar from "../../components/layout/navbar";
import Head from "next/head";
import Footer from "../../components/layout/footer";
import FacultyCard from "../../components/faculty/cards/facultyCard";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SideBar from "../../components/layout/sideBar";
import { useState, useEffect } from "react";
import API from "../../utils/apis";

const images = [
  {
    original:
      "https://www.krmangalam.edu.in/uploads/largeimages/130pg_099a6668.jpg",
    originalClass: "faculty-front",
  },
  {
    original:
      "https://www.krmangalam.edu.in/uploads/largeimages/129pg_099a6660.jpg",
    originalClass: "faculty-front",
  },
  {
    original:
      "https://www.krmangalam.edu.in/uploads/largeimages/131pg_099a6672.jpg",
    originalClass: "faculty-front",
  },
];

export default function Faculty() {
  const [sideBar, setSideBar] = useState(false);
  const [FacultyData, setFacultyData] = useState();

  useEffect(() => {
    async function getAllFacultyData() {
      setFacultyData(await API.getAllFaculty());
    }
    getAllFacultyData();
  }, []);

  return (
    <div>
      <Head>
        <title>SOET</title>
        <meta name="description" content="SOET Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/static/css/image-lib.css" />
      </Head>
      <div>
        <SideBar sideBarToggle={setSideBar} status={sideBar}></SideBar>
        <Navbar sideBarToggle={setSideBar} transparent={false}></Navbar>
        <img
          className=" w-[100%]"
          src="/static/images/faculty/SpreadBanner.PNG"
        />
        <div className="bg-[#006cb5] p-[20px] w-[90%] ml-[auto] mr-[auto] mt-[75px] border-4 border-[red] flex flex-col justify-between rounded-lg lg:flex-row lg:w-[75%]">
          <div className="w-[100%] mb-[20px] lg:w-[40%] lg:mb-[0]">
            <ImageGallery
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={true}
              infinite={true}
              showBullets={true}
              items={images}
            />
          </div>
          <div className="bg-[#fff] h-[auto] p-[20px] w-[100%] rounded-md flex flex-col lg:w-[58%]">
            <span className="text-[17px] mb-[15px] lg:text-[18px] ">
              Housing well-experienced and distinguished faculty that works
              diligently to transform students into the most desirable
              personalities every industry demands.
            </span>
            <span className="text-[14px] lg:text-[15px]">
              These through leaders connect with the students to identify their
              career interests and offer them personalized mentorship, enabling
              them to shine in their respective professions. With an influx of
              new learning models available, an outcome-based education will
              equip the future workforce with higher adaptability to new
              challenges in the School of Engineering & Technology at K.R.
              Mangalam University, Gurugram.
            </span>
          </div>
        </div>
        <div className="w-[90%] m-[auto]">
          <div className="text-center mt-[50px] mb-[30px]">
            <span className="font-bold text-3xl underline decoration-[red]">
              OUR FACULTY
            </span>
          </div>
          <div className="flex flex-wrap justify-center">
            {FacultyData
              ? FacultyData.map((value, key) => {
                  return <FacultyCard data={value} key={key}></FacultyCard>;
                })
              : ""}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
