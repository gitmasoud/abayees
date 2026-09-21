import Image from "next/image";
import styles from "./about.css"
import Link from "next/link"


export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">

  <title>Abaya Collection — The Butterfly Edits</title>


  <nav>
    <div className="styles.brand" style={{ paddingRight: '1.5em' }}><Link href="/">Abayees</Link></div>
     <ul>
      <li><Link href="#abayas">Collections</Link></li>
      <li><Link href="/about">About</Link></li>
    </ul>
  </nav>

  <section className="hero">
    <h1>Our story</h1>
    <p>Dive into our exuisite collection of Abayas</p>
    Hand made with love and precision our Abayas are crafted with skilled worksmanship to the very
    best standards and beyond.

    We have been involved making you adore and feel comfortable in your Abaya for a while now
    and our reviews say it all.

    We want you to feel that you're in the very best botique and we here waiting to help you
    with any queries.
  </section>

        <footer>© 2026 - Abayees Abaya Collection. All rights reserved.</footer>
      </main>
    </div>
  );
}
