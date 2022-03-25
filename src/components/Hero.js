import * as React from 'react'
import { motion } from 'framer-motion'
import styles from './hero.module.css'


import ClientOnly from "../components/ClientOnly.js"

function Hero(props) {
  return (
    <div className="grid">
      <div className={styles.hero}>
        <div className={styles.innerGrid}>
          <div className={styles.titleWrapper}>
            <ClientOnly>
              <motion.h1
                className={styles.title}
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', delay: 0.2, mass: 1, damping: 10, stiffness: 80 }}
              >
                {props.text}
              </motion.h1>
            </ClientOnly>
          </div>
        </div>

       
        }
      </div>
    </div>
  )
}

export default Hero