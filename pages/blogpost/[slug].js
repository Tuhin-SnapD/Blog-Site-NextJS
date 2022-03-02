import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title: {slug}</h1>
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iure consequatur hic nulla impedit, aliquid beatae illum harum. Illum officia error fugiat, minima suscipit nihil amet. Cumque, perspiciatis fugiat minus, harum excepturi ea numquam maiores dolores accusamus hic ducimus nemo!
      </div>
      </main>
    </div>
  )
}

export default slug;