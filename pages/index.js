import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/navbar';
import BigCard from './components/bigCard';
import ImageGallery from 'react-image-gallery';

//import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    original: 'https://www.reviewadda.com/assets/uploads/article_images/drone.jpg',
    
  },
  {
    original: 'https://i.ytimg.com/vi/je9Rr7VrPSk/maxresdefault.jpg',
    
  },
  {
    original: 'https://res.cloudinary.com/practicaldev/image/fetch/s--GuYsE3jw--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/v468zo7rtz3vcrr4jjdt.jpeg',
    
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>SOET</title>
        <meta name="description" content="SOET Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,500&family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/static/css/image-lib.css" />
      </Head>
      
      <div className='main-wrapper'>
          <Navbar transparent={true}></Navbar>
          <div className='top-0 z-[-10] w-[100%] min-h-[100vh] flex p-[100px] flex-col justify-center'>
              <video className='object-cover opacity-[0.8] absolute top-[-50px] z-[-2] left-[0] w-[100%] h-[100%]' autoPlay={true} muted loop src='/static/videos/vid-HD.mp4'/>
              <div className='absolute left-[0] top-[0] w-[100%] h-[100%] bg-[#3e3e3e] z-[-1] mix-blend-overlay	'></div>
              <div className='absolute w-[40%] flex flex-col justify-start items-start'>
                  <span className='text-white text-[1.5em] w-[80%] mb-[10px]'>
                        SOET is founded to bring outstanding academicians and industry professionals under one roof to create a world-class teaching hub for aspiring engineers around the globe.
                  </span>
                  <button className='bg-[#ed3237] text-white p-[15px] transition-all t-[16px] rounded-[100px] hover:tracking-[1px]'>EXPLORE PROGRAMS</button>
              </div>
          </div>
          <div className='bg-[#ed3237] h-[80px] mt-[-50px] z-50 w-[100%]'>
                <span className='text-white text-[1.5em] font-bold bg-[#006cb5] h-[90px] block p-[20px]	left-[100px] w-fit mt-[-10px] absolute leading-[50px]'>HIGHLIGHTS</span>
          </div>
          <div className='flex justify-around mt-[50px] mb-[50px] items-center'>
              <div className='w-[40%] flex flex-col'>
                <span className='text-[26px] text-[#006cb5] font-bold text-'>Achieve the ultimate career growth with us</span>
                <span className='text-[18px]'>Founded in 2013, K.R. Mangalam University is establishing itself as an innovative and unique educational institution and is counted amongst the premier engineering colleges in Delhi NCR, offering Engineering and Technology courses. SOET is founded to bring outstanding academicians and industry professionals under one roof to create a world-class teaching hub for aspiring engineers around the globe.</span>
              </div>
              <div className='w-[40%]'>
                 <ImageGallery showPlayButton={false} showFullscreenButton={false} showNav={false} infinite={true} showBullets={true} items={images} />
              </div>
          </div>
          <div className='flex w-[100%] h-[400px] justify-around mt-[50px] mb-[50px]'>
                  <BigCard title={"Announcements"} width={'40%'} height={'100%'}></BigCard>
                  <BigCard title={"Achievements"} width={'40%'} height={'100%'}></BigCard>
          </div>
      </div>
      
    </div>
  )
}
