import AboutMeStyles from "../styles/AboutMe.module.css"
import UpArrow from "./UpArrow"
import DownArrow from "./DownArrow";
import Image from "next/image";

export const ProfilePic = "/img/andrew_profile.jpeg"


export default function AboutMe(props) {
  return (
    <div className={AboutMeStyles.aboutMe} id={props.id}>
      <div className={AboutMeStyles.aboutMeWrapper}>
        
          <div className={AboutMeStyles.card}>
            <div className={AboutMeStyles.cardWrapper}>
              <Image className={AboutMeStyles.profilePic} src={ProfilePic} width="252" height="336" alt="Picture of Andrew Jacobus"/>
              <ul className={AboutMeStyles.cardText}>
                <li>University of Oklahoma  </li>
                <li>International and Area Studies</li>
                <li>Taught English as a second language for 12 years</li>
                <li>Transitioned into a career in programming</li>
              </ul>
            </div>
          </div>
          <div className={AboutMeStyles.info}>
            <h1 className={AboutMeStyles.title}>About:</h1>
            <p className={AboutMeStyles.infoText}>
              Hello, my name is Andrew Jacobus. I am a self-taught web developer. I became interested in programming in 2022 and decided to change careers. I had previously taught English as a second language in Taiwan for 12 years. 
              <br/> <br />  
              I have a passion for helping people, learning, and making things work. My focus is on frontend development with React and Next, but I’m excited to see where my path will lead in the future. </p>
          </div>
        
      </div>
      <div className={AboutMeStyles.arrowWrapper}>
        {/* two arrows */}
        <UpArrow href="#mySkills"/>
        <DownArrow href="#contact"/>
      </div>
    </div>
  );
}