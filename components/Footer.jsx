import footerStyles from "../styles/Footer.module.css"
import Image from "next/image"
const Icon = "/img/aj_logo.svg"

export default function AboutMe(props) {
  return (
    <section id="props.id" className={footerStyles.section}>
      <Image height="100" width="100" src={Icon}/>
      <p>Built by Andrew Jacobus 2022</p>
      <p>with design inspiration from <a href="https://brittanychiang.com/">Britanny Chiang</a> & <a href="https://www.thecraftsmen.tech/">TheCraftsmen</a></p>
    </section>
  )
}