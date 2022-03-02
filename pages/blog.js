import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>My Popular Blogs</h2>
        <div className={styles.blogItem}>
          <Link href={'/blogpost/how-did-it-start'}>
          <h3 className={styles.blogItemh3}>How did it Start?</h3></Link>
          <p>Birth was the first step</p>
        </div>
        <div className={styles.blogItem}>
          <h3 className={styles.blogItemh3}>How did it Start?</h3>
          <p>Birth was the first step</p>
        </div>
        <div className={styles.blogItem}>
          <h3 className={styles.blogItemh3}>How did it Start?</h3>
          <p>Birth was the first step</p>
        </div>
      </main>
    </div>
  )
}

export default Blog;