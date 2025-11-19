'use client';
import skillStyles from "../styles/Skills.module.css"
import UpArrow from "./UpArrow";
import DownArrow from "./DownArrow";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import NextJs from '../public/img/nextjs.png';
import Elixir from '../public/img/elixir.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSquareJs, faBootstrap, faGithub, faReact, faPhoenixFramework } from '@fortawesome/free-brands-svg-icons'

export default function MySkills(props) {
  return (

    <section id={props.id} className={skillStyles.section}>
      <div className={skillStyles.sectionWrapper}>
        <div className={skillStyles.titleWrapper}>
          <h2 className={skillStyles.title}>Technologies</h2>
        </div>
        <ul className={skillStyles.skillsWrapper} id={skillStyles.smallList}>
          <li className={skillStyles.skill}>
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className={skillStyles.skill}>
            <FontAwesomeIcon icon={faCss3Alt} />
          </li>
          <li className={skillStyles.skill}>
            <FontAwesomeIcon icon={faSquareJs} />
          </li>
          <li className={skillStyles.skill}>
            <FontAwesomeIcon icon={faReact} />
          </li>
          <li className={skillStyles.skill}>
            <Image className={skillStyles.next} src={NextJs} height="55" width="55" alt="nextjs logo" />
          </li>
          <li className={skillStyles.skill}>
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li className={`${skillStyles.skill} ${skillStyles.bootstrap}`}>
            <FontAwesomeIcon icon={faBootstrap} />
          </li>
          <li className={skillStyles.skill}>
            <Image className={skillStyles.elixir} src={Elixir} height="55" width="55" alt="elixir logo" />
          </li>
          <li className={skillStyles.skill}>
            <FontAwesomeIcon icon={faPhoenixFramework} />
          </li>
        </ul>
        <div className={skillStyles.swiperWrapper}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={3.5}
            navigation={false}
            pagination={{ clickable: true }}
            id={skillStyles.swiper}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className={skillStyles.skill}>
              <FontAwesomeIcon icon={faHtml5} />
            </SwiperSlide>
            <SwiperSlide className={skillStyles.skill}>
              <FontAwesomeIcon icon={faCss3Alt} />
            </SwiperSlide>
            <SwiperSlide className={skillStyles.skill}>
              <FontAwesomeIcon icon={faSquareJs} />
            </SwiperSlide>
            <SwiperSlide className={skillStyles.skill}>
              <FontAwesomeIcon icon={faReact} />
            </SwiperSlide>
            <SwiperSlide className={skillStyles.skill}>
              <Image className={skillStyles.next} src={NextJs} height="55" width="55" alt="nextjs logo" />
            </SwiperSlide>
            <SwiperSlide className={skillStyles.skill}>
              <FontAwesomeIcon icon={faGithub} />
            </SwiperSlide>
            <SwiperSlide className={`${skillStyles.skill} ${skillStyles.bootstrap}`}>
              <FontAwesomeIcon icon={faBootstrap} />
            </SwiperSlide>
            <SwiperSlide className={skillStyles.skill}>
              <Image className={skillStyles.elixir} src={Elixir} height="55" width="55" alt="elixir logo" />
            </SwiperSlide>
            <SwiperSlide className={skillStyles.skill}>
              <FontAwesomeIcon icon={faPhoenixFramework} />
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
      <div className={skillStyles.arrowWrapper}>
        <UpArrow href="#projects" />
        <DownArrow href="#aboutMe" />
      </div>
    </section>

  );
}