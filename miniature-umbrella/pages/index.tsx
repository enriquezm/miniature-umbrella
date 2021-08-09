import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Generator from '../generator/index';


export default function Home(this: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>uName Generator</title>
        <meta name="description" content="Cyberpunk name generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          uName Generator
        </h1>

        <p className={styles.description}>
          Generate our cyberpunk uName.
        </p>

        <div className={styles.grid}>
          <Generator />
        </div>
      </main>

      <footer className={styles.footer}>
        
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </footer>
    </div>
  )
}
