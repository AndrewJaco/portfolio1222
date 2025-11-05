import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import styles from '../styles/Home.module.css'
import Contact from '../components/Contact'
import HeroNav from '../components/HeroNav'
import Projects from '../components/Projects'
import MySkills from '../components/MySkills'
import Footer from '../components/Footer'
import BottomContact from '../components/BottomContact'
import UpArrow from '../components/UpArrow'

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew Jacobus Developer</title>
        <meta name='keywords' content='web development, programming, front-end, frontend, frontend engineer, portfolio'/>
      </Head>
      <div className="wrapper">
        <Contact id="sideContact"/>
        <div className="main">
          <HeroNav id="heroNav"/>
          <Projects id="projects" />
          <MySkills id="mySkills" />
          <AboutMe id="aboutMe"/>
          <BottomContact id="contact" />
          <Footer id="footer" />
        </div>
         
        <div className="toTop">
          <UpArrow href="#heroNav"/>
        </div>
      </div>
    </>
  )
}
