import React from "react";
import projectStyles from "../styles/Projects.module.css"
import Image from "next/image";
import Github from '/public/img/github.svg'
import UpArrow from "./UpArrow";
import DownArrow from "./DownArrow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'

export const AnyCallLogo = "/img/logo_anyCall.png"
export const NuggetWars = "/img/logo_nuggetWars.png"

export default function Projects(props) {
  return (
    <section id={props.id} className={projectStyles.section}>
      <div className={projectStyles.wrapper}>
        <div className={projectStyles.titleWrapper}>
          <h2 className={projectStyles.title}>My Projects</h2>
        </div>
        <div className={projectStyles.projectsWrapper}>
          <div className={projectStyles.currentProjects}>
            <div className={projectStyles.project} id={projectStyles.anyCall}>
              <a href="https://anycall.multichain.org/" target="_blank">
                <div className={projectStyles.projectInfo}>
                  <Image src={AnyCallLogo} height="63" width="225" alt="anyCall logo"/>
                  <p className={projectStyles.subText}>Block-chain landing page</p>
                </div>
              </a>
              <div className={projectStyles.projectLinks}>
                <a href="https://github.com/AndrewJaco/anyCall2" target="_blank" >
                  <Github />
                  <p>Launch Project</p>
                </a>  
              </div>
            </div>
            <div className={projectStyles.project} id={projectStyles.nuggetWars}>
              <a href="https://nuggetwars.com/" target="_blank" rel="noopener noreferrer">
                <div className={projectStyles.projectInfo}>
                  <Image src={NuggetWars} height="100" width="202" alt="nugget wars logo"/>
                  <p className={projectStyles.subText}>NFT landing page</p>
                </div>
              </a>
              <div className={projectStyles.projectLinks}>
                <a href="https://github.com/AndrewJaco/nugget_wars" target="_blank" >
                  <Github />
                  <p>Launch Project</p>
                </a> 
              </div>
            </div>
          </div>
          <div className={projectStyles.comingSoonProjects}>
            <div className={projectStyles.project} id={projectStyles.comingSoon}>
              <a href="https://github.com/AndrewJaco/" target="_blank">
                <div className={projectStyles.projectInfo}>
                  <FontAwesomeIcon icon={faPersonDigging} className={projectStyles.fa}/>
                  <p className={projectStyles.subText}></p>
                </div>
              </a>
              <div className={projectStyles.projectLinks}>
                <a href="https://github.com/AndrewJaco/" target="_blank" >
                  <Github />
                  <p>Coming Soon</p>
                </a>  
              </div>
            </div>
            <div className={projectStyles.project} id={projectStyles.comingSoon}>
              <a href="https://github.com/AndrewJaco/" target="_blank">
                <div className={projectStyles.projectInfo}>
                  <FontAwesomeIcon icon={faPersonDigging} className={projectStyles.fa}/>
                  <p className={projectStyles.subText}></p>
                </div>
              </a>
              <div className={projectStyles.projectLinks}>
                <a href="https://github.com/AndrewJaco/" target="_blank" >
                  <Github />
                  <p>Coming Soon</p>
                </a>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={projectStyles.arrowWrapper}>
        {/* two arrows */}
        <UpArrow href="#heroNav"/>
        <DownArrow href="#mySkills"/>
      </div>
    </section>
  );
}