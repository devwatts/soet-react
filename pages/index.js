import Head from 'next/head'
import Navbar from './components/navbar';
import HalfCard from './components/halfCard';
import FullCard from './components/fullCard';
import ImageGallery from 'react-image-gallery';
import Footer from './components/footer';
import SideBar from './components/sideBar';
import { useState } from 'react';

//import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    original: 'https://www.reviewadda.com/assets/uploads/article_images/drone.jpg',
    originalClass:'landing-highlight' 
    
  },
  {
    original: 'https://i.ytimg.com/vi/je9Rr7VrPSk/maxresdefault.jpg',
    originalClass:'landing-highlight' 
    
  },
  {
    original: 'https://res.cloudinary.com/practicaldev/image/fetch/s--GuYsE3jw--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/v468zo7rtz3vcrr4jjdt.jpeg',
    originalClass:'landing-highlight'  
    
  },
];

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
          <div className='flex md:flex-row flex-col-reverse md:justify-around justify-center mt-[50px] mb-[10px] items-center'>
              <div className='md:w-[40%] w-[90%] flex flex-col'>
                <span className='text-[26px] text-[#006cb5] font-bold text-'>Achieve the ultimate career growth with us</span>
                <span className='text-[18px]'>Founded in 2013, K.R. Mangalam University is establishing itself as an innovative and unique educational institution and is counted amongst the premier engineering colleges in Delhi NCR, offering Engineering and Technology courses. SOET is founded to bring outstanding academicians and industry professionals under one roof to create a world-class teaching hub for aspiring engineers around the globe.</span>
              </div>
              <div className='md:w-[40%] mb-[40px] md:mb-[0px] w-[90%]'>
                 <ImageGallery showPlayButton={false} showFullscreenButton={false} showNav={false} infinite={true} showBullets={true} items={images} />
              </div>
          </div>
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
