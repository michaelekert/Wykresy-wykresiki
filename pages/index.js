import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
      <div className="main_charts">
            <h1>O stronie</h1>
            <p>Aplikacja napisana przez grupę 3 w technologi Next.js, która pobiera dane z API GUS’u i prezentuje je w postaci wykresów za pomocą biblioteki Charts.js</p>
            <img src="Chart.png" alt=""/>
      </div>
  );
}


