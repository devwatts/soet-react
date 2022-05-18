import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SOET</title>
        <meta name="description" content="SOET Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='main-wrapper'>
          <Navbar transparent={true}></Navbar>
          <div className='top-0 z-[-10] w-[100%] min-h-[100vh] flex p-[100px] flex-col justify-center'>
              <video className='object-cover opacity-[0.8] absolute top-[-50px] left-[0] w-[100%] h-[100%]' autoPlay={true} muted loop src='/static/videos/vid-HD.mp4'/>
              <div className='absolute left-[0] top-[0] w-[100%] h-[100%] bg-[#3e3e3e] mix-blend-overlay	'></div>
              <div className='absolute w-[40%] flex flex-col justify-start items-start'>
                  <span className='text-white text-[1.5em]'>
                  SOET is founded to bring outstanding academicians and industry professionals under one roof to create a world-class teaching hub for aspiring engineers around the globe.
                  </span>
                  <button className='bg-[#ed3237] text-white p-[15px] transition-all t-[16px] rounded-[100px] hover:tracking-[1px]'>EXPLORE PROGRAMS</button>
              </div>
          </div>
      </div>
    </div>
  )
}
