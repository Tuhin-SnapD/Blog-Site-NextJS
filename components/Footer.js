import React from 'react'
import styles from '../styles/Home.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
        <a href="https://github.com/Tuhin-SnapD">
        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
          Developed by Tuhin Chakrabarty
        </a>
    </footer>
  )
}

export default Footer