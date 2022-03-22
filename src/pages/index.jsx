import Head from 'next/head'
import classes from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import { Footer } from 'src/components/Footer'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  // ボタンのカウントアップ
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    // fooを受け取ってfoo + 1のfunctionを作成する
    setCount((count) => count + 1);
  };
  // コンポーネントがマウントされるときに読み込まれる
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    // リターン以後はアンマウントの際の処理を書く
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [])
  return (
    <div className={classes.container}>
      <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <h1>{count}</h1>
      <button href="/about" onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  )
}
