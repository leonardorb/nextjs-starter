import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Title</title>
        <meta name="description" content="Description." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Start here.</main>
    </div>
  )
}

export default Home
