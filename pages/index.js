import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/navbar';
import HalfCard from './components/halfCard';
import FullCard from './components/fullCard';
import ImageGallery from 'react-image-gallery';
import Link from 'next/link'

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
      <div className='w-100 bg-[#3e3e3e] border-t-[8px] border-[#ed3237] h-fit'>
          <div className='flex flex-col text-white w-100 justify-around mt-[40px] md:flex-row'>
              <div className='flex w-[90%] self-center flex-col text-[14px] md:w-[45%]'>
                  <Image src="/static/images/logo.png" height={'100px'} width={'100px'} layout={'fixed'}/>
                  <Link href={'#'}><a className='mt-[10px] mb-[10px] text-[#91d8f7] font-bold text-[17px]'>Academics</a></Link>
                  <Link href={'#'}><a className='mt-[10px] mb-[10px] text-[#91d8f7] font-bold text-[17px]'>Admissions</a></Link>
                  <Link href={'#'}><a className='mt-[10px] mb-[10px] text-[#91d8f7] font-bold text-[17px]'>Faculty</a></Link>
                  <Link href={'#'}><a className='mt-[10px] mb-[10px] text-[#91d8f7] font-bold text-[17px]'>Examination</a></Link>
                  <Link href={'#'}><a className='mt-[10px] mb-[10px] text-[#91d8f7] font-bold text-[17px]'>About SOET</a></Link>
                  <div className='mt-[10px] mb-[20px] flex flex-col w-100'>
                    <Link href={'#'}><a className='w-[100%] mt-[5px] text-[13px]'>Email: <br></br>welcome@krmangalam.edu.in</a></Link>
                    <Link href={'#'}><a className='w-[100%] mt-[5px] text-[13px]'>Number: <br></br>01148884888, 8800697010,8800697015</a></Link>
                    <Link href={'#'}><a className='w-[100%] mt-[5px] text-[13px]'>Location: <br></br>Sohna Road, Gurugram,</a></Link>
                  </div>
              </div>
              <div className='flex w-[90%] self-center justify-center flex-wrap text-[14px] border-t-[8px] border-[#ed3237] md:w-[45%]'>
                <span className='mt-[30px] mb-[10px] text-[#91d8f7] font-bold text-[17px]'>SUBSCRIBE TO UPDATES</span>
                    <div className='flex mt-[10px] mb-[30px] bg-[#fff] p-[20px]'>
                       <form action='/' class="w-full max-w-sm">
                            <div class="flex items-center border-b border-[#ed3237] py-2">
                              <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Full name"/>
                              <button class="flex-shrink-0 bg-[#ed3237] border-[#ed3237] text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                                Sign Up
                              </button>
                            </div>
                        </form>
                    </div>
              </div>
              
          </div>
      </div>
    </div>
  )
}
