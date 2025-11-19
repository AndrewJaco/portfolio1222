'use client';
import React from "react";
import styles from '../styles/BottomContact.module.css'
import Image from "next/image";


export default function Contact(props) {
  return (
    <div className={styles.section} id={props.id}>
      <h2 id={styles.contactTitle}>Contact Me</h2>
      <div id={styles.contactContainer}>
        <ul id={styles.contactGroup}>
          <div id={styles.contactsA}>
            <li><a href='https://github.com/AndrewJaco' target="_blank" rel="noreferrer" className={styles.linkItem}><Image src="/img/github.svg" alt="GitHub" width={24} height={24} /></a></li>
            <li><a href='https://www.facebook.com' target="_blank" rel="noreferrer" className={styles.linkItem}><Image src="/img/facebook.svg" alt="Facebook" width={24} height={24} /></a></li>
            <li><a href='https://www.instagram.com/andrewjaofficial/' target="_blank" rel="noreferrer" className={styles.linkItem}><Image src="/img/instagram.svg" alt="Instagram" width={24} height={24} /></a></li>
          </div>
          <div id={styles.contactsB}>
            <li><a href='mailto:jacobus15@gmail.com' target="_blank" rel="noreferrer" className={styles.linkItem}><Image src="/img/mail.svg" alt="Email" width={24} height={24} /></a></li>
            <li><a href='https://www.linkedin.com/in/andrew-jacobus/' target="_blank" rel="noreferrer" className={styles.linkItem}><Image src="/img/linkedin.svg" alt="LinkedIn" width={24} height={24} /></a></li>
          </div>
        </ul>
      </div>
    </div>
  )
}