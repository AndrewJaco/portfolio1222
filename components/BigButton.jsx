import React from "react";
import styles from "../styles/BigButton.module.css"
// import Image from "next/image";
// import Gmail from '/public/img/mail.svg'
// import Project from '/public/img/html-five2.svg'
// import Skills from '/public/img/route.svg'
// import About from '/public/img/user-profile.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCode, faBriefcase, faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function BigButton({ content, link, footerText, id, className, icon }) {
  let iconContent

  switch (icon) {
    case 'projects': iconContent = <FontAwesomeIcon icon={faBriefcase} className={styles.briefcase} />;
      break;
    case 'about': iconContent = <FontAwesomeIcon icon={faAddressCard} className={styles.addressCard} />;
      break;
    case 'skills': iconContent = <FontAwesomeIcon icon={faCode} className={styles.code} />;
      break;
    case 'contact': iconContent = <FontAwesomeIcon icon={faEnvelope} className={styles.envelope} />;
      break;
  }

  return (
    <a className={className} href={link}>
      <div className={styles.bauble} id={id}>
        <div className={styles.icon}>
          {iconContent}
        </div>
        <div className={styles.marquee}>
          <div className={styles.marqueeInner}>
            <span>
              {content}
            </span>
            <span>
              {content}
            </span>
          </div>
        </div>
        <p className={styles.baulbleFooter}>{footerText}</p>
      </div>
    </a>
  )
}