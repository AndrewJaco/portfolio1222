import heroStyles from "../styles/HeroNav.module.css"
import BigButton from "./BigButton"
import DownArrow from "./DownArrow"


export default function HeroNav(props) {
  return (
    <section className={heroStyles.section} id={props.id}>
      <div className={heroStyles.heroNav}>
        <div className={heroStyles.titleWrapper}>
          <div className={heroStyles.title}>
            <h1 className={heroStyles.heroTitle}>
              Andrew Jacobus
            </h1>
            <p className={heroStyles.titleSubtext}>modern web developer</p>
          </div>
        </div>
        <div className={heroStyles.top3}>
          <div className={heroStyles.btn1}>
            <BigButton id='projectsBtn' content="Striving for excellence. One project at a time." link="#projects" footerText="projects" icon='projects' />
          </div>
          <div className={heroStyles.twoAndThree}>
            <BigButton className={heroStyles.btn2} id='skillsBtn' content="HTML CSS Javascript React Next Bootstrap Git" link="#mySkills" footerText="skills" icon='skills' />
            <BigButton className={heroStyles.btn3} id='aboutMeBtn' content="Frontend Web Developer Innovative Design Brought To Life." link="#aboutMe" footerText="about" icon="about" />
          </div>
        </div>
        <BigButton className={heroStyles.btn4} id='contactBtn' content="Want to hire me? Get in touch. Let’s collaborate." link="#contact" footerText="contact me" icon='contact' />
      </div>
      <div className={heroStyles.sideNav}>
        <DownArrow href="#projects" />
      </div>
    </section>
  );
}

// Frontend Web Developer. Innovative Design Brought To Life.
// Striving for excellence. One project at a time.
// Want to hire me? Get in touch. Let’s collaborate.
// css html react Javascript bootstrap git nextjs
