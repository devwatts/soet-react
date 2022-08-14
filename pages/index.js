import Head from 'next/head'
import Navbar from '../components/layout/navbar';
import HalfCard from '../components/landing-page/cards/halfCard';
import FullCard from '../components/landing-page/cards/fullCard';
import Highlights from '../components/landing-page/Highlights';
import Footer from '../components/layout/footer';
import SideBar from '../components/layout/sideBar';
import { useState } from 'react';

//import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";




export default function Home() {
  const [sideBar,setSideBar] = useState(false);
  return (
    <div>
      <Head>
        <title>SOET</title>
        <meta name="description" content="SOET Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/static/css/image-lib.css" />
      </Head>
      <SideBar sideBarToggle={setSideBar} status={sideBar}></SideBar>
      <div className='main-wrapper'>
          <Navbar sideBarToggle={setSideBar} transparent={true}></Navbar>
          <div className='top-0 z-[-10] w-[100%] min-h-[100vh] flex p-[20px] flex-col justify-center md:p-[100px]'>
              <video className='object-cover opacity-[0.8] top-[0px] absolute  z-[-2] left-[0] w-[100%] h-[100%] xl:top-[-50px]' autoPlay={true} playsInline muted loop src='/static/videos/vid-HD.mp4'/>
              <div className='absolute left-[0] top-[0] w-[100%] h-[100%] bg-[#3e3e3e] z-[-1] mix-blend-overlay	'></div>
              <div className='absolute w-[80%] md:w-[40%] flex flex-col justify-start items-start'>
                  <span className='text-white text-[18px] w-[80%] mb-[10px] lg:text-[1.5em]'>
                        SOET is founded to bring outstanding academicians and industry professionals under one roof to create a world-class teaching hub for aspiring engineers around the globe.
                  </span>
                  <button className='bg-[#ed3237] text-white p-[15px] transition-all t-[16px] rounded-[100px] hover:tracking-[1px]'>EXPLORE PROGRAMS</button>
              </div>
          </div>
          <div className='bg-[#ed3237] h-[80px] z-50 w-[100%] mt-[-80px]'>
                <span className='ml-[40px] text-white text-[1.5em] font-bold bg-[#006cb5] h-[90px] absolute mt-[-10px] p-[20px] w-fit leading-[50px]'>HIGHLIGHTS</span>
          </div>
          <Highlights></Highlights>
          <div className='flex flex-col w-[100%] h-fit justify-around items-center mt-[50px] mb-[50px] lg:flex-row lg:h-[400px]'>
                  <HalfCard title={"Announcements"}></HalfCard>
                  <HalfCard title={"Achievements"}></HalfCard>
          </div>
          <div className='flex justify-around w-100'>
              <FullCard width={'90%'}></FullCard>
          </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
