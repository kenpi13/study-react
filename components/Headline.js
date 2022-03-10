import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { Links } from '../components/Links'
import styles from '../styles/Home.module.css'
import React from 'react'

export function Headline(props) {
  console.log(props);
  return (
    <div>
        <h1 className={styles.title}>
          {props.page} page
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/{props.page}.js</code>
        </p>
    </div>
  )
}
