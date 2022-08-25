import Navbar from "../../components/layout/navbar";
import Head from "next/head";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CardRowTwo from "../../components/landing-page/cards/cardRowTwo";
import Footer from "../../components/layout/footer";
import SideBar from "../../components/layout/sideBar";
import { useState } from "react";

const images = [
  {
    original:
      "https://www.reviewadda.com/assets/uploads/article_images/drone.jpg",
    originalClass: "event-front",
  },
  {
    original: "https://i.ytimg.com/vi/je9Rr7VrPSk/maxresdefault.jpg",
    originalClass: "event-front",
  },
  {
    original:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--GuYsE3jw--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/v468zo7rtz3vcrr4jjdt.jpeg",
    originalClass: "event-front",
  },
];

export default function Events() {
  const [sideBar, setSideBar] = useState(false);

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
        <div className="w-[90%] m-[auto]">
          <div className="w-[100%] ml-[auto] mr-[auto] mt-[25px] lg:w-[75%]">
            <ImageGallery
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={true}
              infinite={true}
              showBullets={true}
              items={images}
            />
          </div>
          <div className="mt-[40px]">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
              <span className="text-[25px] font-bold">Upcoming Events</span>
              <div className="flex min-w-[80%] justify-around lg:min-w-[40%]">
                <select
                  id="type"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected="">Event Type</option>
                  <option value="">Upcoming Events</option>
                  <option value="">Past Events</option>
                </select>
              </div>
            </div>
            <div className="flex w-[100%] justify-around flex-wrap">
              <CardRowTwo></CardRowTwo>
              <CardRowTwo></CardRowTwo>
              <CardRowTwo></CardRowTwo>
              <CardRowTwo></CardRowTwo>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
