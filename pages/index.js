import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from './components/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SOET</title>
        <meta name="description" content="SOET Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <video playsinline="" src="https://itsmohitchahal.github.io/soet-krmu-static/resources/vid-HD.mp4" type="video/mp4" autoplay="" loop="" muted="" class="front-video"></video>
    </div>
  )
}
