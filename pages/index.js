import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {GameBoard} from '../components/GameBoard'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fuzzy Pancake</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Fuzzy Pancake
        </h1>
<GameBoard/>
        </main>
    </div>
  )
}
