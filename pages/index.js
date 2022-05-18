import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Navbar from './components/navbar';
import '../public/static/css/videocontainer.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SOET</title>
        <meta name="description" content="SOET Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='main-wrapper'>
          <Navbar></Navbar>
          <div className='video-container absolute top-0 z-[-10]'>
              <video autoplay='true' muted loop src='/static/videos/vid-HD.mp4'/>
          </div>
      </div>
    </div>
  )
}
