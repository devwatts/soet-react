import Head from "next/head";
import Navbar from "../components/layout/navbar";
import HalfCard from "../components/landing-page/cards/halfCard";
import FullCard from "../components/landing-page/cards/fullCard";
import Highlights from "../components/landing-page/Highlights";
import HomeInfo from "../components/landing-page/Home";
import HighlightNavigation from "../components/landing-page/HighlightsNavigation";
import SideNavigation from "../components/landing-page/SideNavigation";
import PEOandPSO from "../components/landing-page/PEOandPSO";
import Placements from "../components/landing-page/Placements";
import FacultyInfo from "../components/landing-page/faculty";
import ResearchDevelopment from "../components/landing-page/ResearchDevelopment";
import VisionMission from "../components/landing-page/VisionMission";
import Alumni from "../components/landing-page/Alumni";
import Footer from "../components/layout/footer";
import SideBar from "../components/layout/sideBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import API from "../utils/apis";

//import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import ResourcesInfo from "../components/landing-page/ResourcesInfo";

export default function Home() {
  const [sideBar, setSideBar] = useState(false);
  const [navigationOption, setnavigationOption] = useState("DEAN'S MESSAGE");
  const { push } = useRouter();
  const [AchievementsData, setAchievementsData] = useState([]);
  const [AnnouncementData, setAnnouncementData] = useState([]);
  const [EventData, setEventData] = useState([]);

  useEffect(() => {
    async function setAnnouncements() {
      await API.getAllAnnouncementsApi().then((resp) => {
        setAnnouncementData(resp);
      });
    }
    setAnnouncements();
    async function setAchievements() {
      await API.getAllAchievementsApi().then((resp) => {
        setAchievementsData(resp);
      });
    }
    setEvents();
    async function setEvents() {
      await API.getAllEvents().then((resp) => {
        setEventData(resp);
      });
    }
    setEvents();
  }, []);

  return (
    <div>
      <Head>
        <title>SOET</title>
        <meta name="description" content="SOET Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/static/css/image-lib.css" />
      </Head>
      <SideBar sideBarToggle={setSideBar} status={sideBar}></SideBar>
      <div className="main-wrapper">
        <Navbar sideBarToggle={setSideBar} transparent={true}></Navbar>
        <div className="top-0 z-[-10] w-[100%] min-h-[100vh] flex p-[20px] flex-col justify-center md:p-[100px]">
          <video
            className="object-cover opacity-[0.8] top-[0px] absolute  z-[-2] left-[0] w-[100%] h-[100%] xl:top-[-50px]"
            autoPlay={true}
            playsInline
            muted
            loop
            src="/static/videos/vid-HD.mp4"
          />
          <div className="absolute left-[0] top-[0] w-[100%] h-[100%] bg-[#3e3e3e] z-[-1] mix-blend-overlay	"></div>
          <div className="absolute w-[80%] md:w-[40%] flex flex-col justify-start items-start">
            <span className="text-white text-[18px] w-[80%] mb-[10px] lg:text-[1.5em]">
              SOET is founded to bring outstanding academicians and industry
              professionals under one roof to create a world-class teaching hub
              for aspiring engineers around the globe.
            </span>
            <button
              onClick={() =>
                push(
                  "https://www.krmangalam.edu.in/uploads/prospectus/4clfl_soet_brochure.pdf"
                )
              }
              className="bg-[#ed3237] text-white p-[15px] transition-all t-[16px] rounded-[100px] hover:tracking-[1px]"
            >
              EXPLORE PROGRAMS
            </button>
          </div>
        </div>
        <HighlightNavigation
          currentOption={navigationOption}
        ></HighlightNavigation>
        <div className="lg:flex lg:flex-row-reverse w-[90%] ml-[auto] mr-[auto] justify-between  lg:h-[fit-content]">
          <SideNavigation
            currentOption={navigationOption}
            changeOption={setnavigationOption}
          ></SideNavigation>
          <Highlights currentOption={navigationOption}></Highlights>
          <HomeInfo currentOption={navigationOption}> </HomeInfo>
          <ResourcesInfo currentOption={navigationOption}></ResourcesInfo>
          <PEOandPSO currentOption={navigationOption}></PEOandPSO>
          <Placements currentOption={navigationOption}></Placements>
          <FacultyInfo currentOption={navigationOption}></FacultyInfo>
          <ResearchDevelopment
            currentOption={navigationOption}
          ></ResearchDevelopment>
          <VisionMission currentOption={navigationOption}></VisionMission>
          <Alumni currentOption={navigationOption}></Alumni>
        </div>
        <div className="flex flex-col w-[100%] h-fit justify-around items-center mt-[50px] mb-[50px] lg:flex-row">
          <HalfCard data={AnnouncementData} title={"Announcements"}></HalfCard>
          <HalfCard data={AchievementsData} title={"Achievements"}></HalfCard>
        </div>
        <div className="flex justify-around w-100">
          <FullCard data={EventData} width={"90%"}></FullCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
