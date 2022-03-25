import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"

import ClientOnly from "../components/ClientOnly.js"
import Cursor from "../components/Cursor.js"
import Navigation from "../components/Navigation.js"
import Hero from "../components/Hero.js"
import Footer from "../components/Footer.js"
import Card from "../components/Card.js"
import styles from '../components/AboutGrid.module.css'

import "../components/reset.css"
import "../components/global.css"

// markup
const AboutPage = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function cursorLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function photoEnter(event) {
    setCursorText("❤️");
    setCursorVariant("contact");
  }

  function linkEnter(event) {
    setCursorText("");
    setCursorVariant("link");
  }

  return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Me - Tom Hackshaw</title>
          <meta name="description" content="Tom Hackshaw is a product designer from Auckland, New Zealand." />
          <link rel="canonical" href="https://danield.design/about/" />
        </Helmet>
        <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave} />
        <Hero text="He aha te mea nui o te ao?  He tāngata, he tāngata, he tāngata." details={false} />
  
        <ClientOnly>
          <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
        </ClientOnly>

        <motion.section className="grid">
          <div className={styles.aboutGrid}>
            <motion.div className={`${styles.video} ${styles.first}`}>
              <video src="https://newportfolio.s3-us-west-2.amazonaws.com/daniel.mp4" className={styles.video} autoPlay muted loop />
            </motion.div>
            <motion.div className={styles.wrapper}>
              <div className={styles.smallVideo}>
                <video src="https://newportfolio.s3-us-west-2.amazonaws.com/wave.mp4" className={styles.video} autoPlay muted loop />
              </div>
              <div className={`${styles.smallVideo} ${styles.second}`}>
                <video src="https://newportfolio.s3-us-west-2.amazonaws.com/franklin.mp4" className={styles.video} autoPlay muted loop onMouseEnter={photoEnter} onMouseLeave={cursorLeave}/>
              </div>
            </motion.div>
            <motion.div className={`${styles.video} ${styles.third}`}>
              <video src="https://newportfolio.s3-us-west-2.amazonaws.com/mondo.mp4" className={styles.video} autoPlay muted loop  onMouseEnter={photoEnter} onMouseLeave={cursorLeave}/>
            </motion.div>
            <motion.div className={`${styles.video} ${styles.fourth}`}>
              <video src="https://newportfolio.s3-us-west-2.amazonaws.com/irma.mp4" className={styles.video} autoPlay muted loop onMouseEnter={photoEnter} onMouseLeave={cursorLeave} />
            </motion.div>
          </div>
        </motion.section>
        <motion.section className="grid about">
          <div className="bio">
            <h2 className="h2">Hi, I'm Tom.</h2>
          </div>
          <div className="bio-body">
            <p className="paragraph paragraph--large">
            Presently I am a high school teacher teaching art and design in Tāmaki Makaurau, so in a very real way people have always deeply informed my work. Anything I make or work on is guided by these set of values.
            </p>
            <p className="paragraph paragraph--large">
            Previously I studied at the Elam School of Fine Arts, where I also briefly taught the first and second year studio programme.</p>
          </div>
        </motion.section>

        <motion.section className="grid about">
          <div className="experience">
            <h2 className="h2">Experience</h2>
            <ul className="list">
              <li className="list-item">
                <h6 className="h6 timeline">
                  2020 - Current
                </h6>
                <h4 className="h4">
                  Product Design Manager at Discord
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2018 - 2020
                </h6>
                <h4 className="h4">
                  Product Design at Discord
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - 2018
                </h6>
                <h4 className="h4">
                  Design and Engineering at SteelSeries
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2014 - 2015
                </h6>
                <h4 className="h4">
                  Front End and UX at Palantir.net
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2010 - 2014
                </h6>
                <h4 className="h4">
                  Freelance and Internships
                </h4>
              </li>
            </ul>
          </div>
          <div className="previous-work">
            <h2 className="h2">Writing</h2>
            <ul className="list">
              <li className="list-item">
                <h6 className="h6 timeline">
                  2021 - Medium
                </h6>
                <h4 className="h4">
                  <a href="https://medium.com/me/stats/post/c435e2f8851b">How to set up Custom Design Linting</a>
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2021 - Figma File
                </h6>
                <h4 className="h4">
                  <a href="https://www.figma.com/community/file/942856928187155104">Intro to Figma Plugin Api</a>
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2020 - Medium
                </h6>
                <h4 className="h4">
                  <a href="https://blog.discord.com/building-open-source-design-tools-to-improve-discords-design-workflow-9a25c29f9143">Building Open Source Plugins</a>
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2018 - Medium
                </h6>
                <h4 className="h4">
                  <a href="https://blog.discord.com/redesigning-the-discord-overlay-cc31c6042d6d">Redesigning the Discord Overlay</a>
                </h4>
              </li>
            </ul>
            {/* <ul className="list">
              <li className="list-item">
                <h6 className="h6 timeline">
                  2017 - Design and Engineering
                </h6>
                <h4 className="h4">
                  SteelSeries.com and Engine Software
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2017 - Design and Engineering
                </h6>
                <h4 className="h4">
                  P.W. LaRue Co. Webshop
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - Engineering and Design
                </h6>
                <h4 className="h4">
                  Foreign Affairs News
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - UX
                </h6>
                <h4 className="h4">
                  Yale Art Gallery
                </h4>
              </li>
              <li className="list-item">
                <h4 className="h4">
                  View LinkedIn ->
                </h4>
              </li>
            </ul> */}
          </div>
        </motion.section>

        <motion.section className="container next-project">
          <div className="grid">
            <h2 className="h2 grid-title">Next Project</h2>
          </div>
          <div className="grid work-grid">
            <Card
              image="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/server-video-tile-imagee.png"
              imageAlt="Mockup of Discord's video chat feature with a person using it"
              link="/server-video"
              color="pink"
              title="Server Video"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
            <Card
              image="https://newportfolio.s3-us-west-2.amazonaws.com/discord-onboarding-image.png"
              imageAlt="Image of Discord's Onboarding Screen"
              link="/discord-growth"
              color="blue"
              title="Discord Onboarding"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
          </div>
        </motion.section>
        <Footer onFooterEnter={contactEnter} onFooterLeave={cursorLeave} onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>

      </div>
  )
}

export default AboutPage
