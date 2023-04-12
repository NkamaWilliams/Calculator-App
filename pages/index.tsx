import Head from 'next/head';
import styles from "@/pages/styles.js"
import keyStyles from '@/styles/Keypad.module.css'
import {useState} from 'react'
import Image from 'next/image';
import Screen from './screen';
import Welcome from './welcome';
import Header from './header';
import Calc from '@/styles/Calc.module.css';
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

//SCREEN BRANCH

export default function Home() {
  const [main, setMain] = useState({
    disp: "399,981",
    input: [],
    command: ""
  })

  const buttons = [
    {7: '7', 8:'8', 9: '9', del: 'DEL'},
    {4: '4', 5: '5', 6: '6', plus: '+'},
    {1: '1', 2: '2', 3: '3', minus: '-'},
    {dot: '.', 0: '0', div: '/', mul: 'x'},
    {reset: 'RESET', equals: '='}
  ]

  const key = buttons.map(i => {
    let val = Object.values(i);
    const row = val.map(x => {
      switch(x){
        case "DEL": return <span className={keyStyles.del}>{x}</span>
        case "RESET": return <span className={keyStyles.reset}>{x}</span>
        case "=": return <span className={keyStyles.equals}>{x}</span>
        default: return <span>{x}</span>
      }
    });
    return <div className={keyStyles.key}>{row}</div>;
  })
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=League+Spartan'/>
      </Head>

      <main className={Calc.main1}>
        <div className={Calc.container}>
          <Header />
          <Screen disp={main.disp}/>
          <section className={keyStyles.keypad}>
            {key}
          </section>
        </div>
      </main>

    </>
  )
}
