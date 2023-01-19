import React from "react";
import styles from '/styles/BottomContact.module.css'
import Facebook from '/public/img/facebook.svg'
import Github from '/public/img/github.svg'
import Gmail from '/public/img/mail.svg'
import Instagram from '/public/img/instagram.svg'
import Linkedin from '/public/img/linkedin.svg'


export default function Contact(props) {
  return(
    <div className={styles.section} id={props.id}>
      <h2 id={styles.contactTitle}>Contact Me</h2>
      <div id={styles.contactContainer}>
        <ul id={styles.contactGroup}>
          <div id={styles.contactsA}>
            <li><a href='https://github.com/AndrewJaco' target="_blank" className={styles.linkItem}><Github /></a></li>
            <li><a href='https://www.facebook.com' target="_blank" className={styles.linkItem}><Facebook /></a></li>
            <li><a href='https://www.instagram.com/andrewjaofficial/' target="_blank" className={styles.linkItem}><Instagram /></a></li>
          </div>
          <div id={styles.contactsB}>
            <li><a href='mailto:jacobus15@gmail.com' target="_blank" className={styles.linkItem}><Gmail /></a></li>
            <li><a href='https://www.linkedin.com/in/andrew-jacobus-7a4664262/' target="_blank" className={styles.linkItem}><Linkedin /></a></li>
          </div>
        </ul>
      </div>
    </div>
  )
}