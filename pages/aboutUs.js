import React from 'react'
import style from '../styles/AboutUs.module.css'

import Head from 'next/head'

import AboutCard from '../modules/aboutUs/components/_aboutCard'

function aboutUs() {
  return (
    <div className={style.mainContainer}>
        <Head>
            <title>About</title>
        </Head>
        <AboutCard />
    </div>
  )
}

export default aboutUs