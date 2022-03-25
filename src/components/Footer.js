import * as React from 'react'
import { Link } from "gatsby"
import styles from './footer.module.css'
import { motion } from 'framer-motion'

function Footer(props) {
  function mouseEnter(event) {
    props.onFooterEnter();
  }

  function mouseLeave(event) {
    props.onFooterLeave();
  }

  function linkEnter(event) {
    props.onLinkEnter();
  }

  function linkLeave(event) {
    props.onLinkLeave();
  }
  return (
    <div id="contact" className="grid grid--full contact">
      <div className={styles.footer}>
        <div className={styles.card} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <h2 className={styles.title}>
            Want to talk?
          </h2>
          <h2 className={`${styles.title} ${styles.contact} `}>
            <a href="mailto:tom@tomhackshaw.com">Send me an email.</a>
          </h2>
        </div>
        <nav className={styles.footerLinks}>
          <div className={styles.openSource}>
          © 2022 Tom Hackshaw
          </div>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com/tomhackshaw" target="_blank" onMouseEnter={linkEnter} onMouseLeave={linkLeave} className={styles.socialLink}>
              Twitter
            </a>
            <a href="https://github.com/et0and" target="_blank" onMouseEnter={linkEnter} onMouseLeave={linkLeave} className={styles.socialLink}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/tom-hackshaw/" target="_blank" onMouseEnter={linkEnter} onMouseLeave={linkLeave} className={styles.socialLink}>
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Footer