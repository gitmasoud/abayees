import Image from "next/image";
import styles from "./landing.css"
import Link from "next/link"
import AddToCart from "@/components/AddToCart"
import Cart from "@/components/Cart";

//var paddingBrand = 

export default function Landing() {
  const product = {
    id: "ai-audit",
    name: "Abaya 001",
    price: 4500,
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">

  <title>Abaya Collection — The Butterfly Edits</title>


  <nav>
    <div className="brandName" style={{ paddingRight: '1.5em' }}><a href="/">Abayees</a></div>
    <ul>
  <li><a href="#abayas">Collections</a></li>
  <li><Link href="/about">About</Link></li>
   <li className="socialIcon">
   <a
  href="https://www.instagram.com/abayees26/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
</a>
  </li>
  <li className="cartItem">
    <Cart />
  </li>
</ul>
  </nav>

  <section className="hero">
    <video controls>
      <source src="/img/abayee001video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>

  <section className="heroTxt">
    <h1>Timeless Elegance, Modern Silhouettes</h1>
    <p>Discover our curated abaya collection — where luxurious fabrics meet contemporary design, crafted for every occasion.</p>
  </section>

  <div className="grid" >

    <article className="card" id="abayas">
      <div className="card-img">
        <img src="/img/abayee001.jpg" alt=" Black Front-Open Abaya" loading="eager" />
        <span className="tag">New In</span>
      </div>
      <div className="card-body">
        <h3>The Everyday Black</h3>
        <p className="desc">Timeless front-open silhouette in premium Nidha fabric. Effortless layering for daily elegance.</p>
        <span className="price">£45.00</span>
      </div>
      <AddToCart product={product} />
    </article>

    <article className="card">
      <div className="card-img">
        <img src="/img/abayee002.jpg" alt="Beaded Butterfly Motif Abaya" />
        <span className="tag gold">Signature</span>
      </div>
      <div className="card-body">
        <h3>The Monarch</h3>
        <p className="desc">Hand-beaded butterfly motifs trail down the front panel and up one sleeve — an enchanting, wearable work of art.</p>
        <span className="price">£35.00</span>
      </div>
      <AddToCart product={product} />
    </article>

    <article className="card">
      <div className="card-img">
        <img src="/img/abayee003.jpg" alt="Butterfly Sleeve Abaya" />
        <span className="tag">New In</span>
      </div>
      <div className="card-body">
        <h3>Abayat Al-Farashah</h3>
        <p className="desc">Flowy, wide-cut sleeves inspired by butterfly wings. Lightweight drape for effortless movement.</p>
        <span className="price">£45.00</span>
      </div>
      <AddToCart product={product} />
    </article>

    <article className="card">
      <div className="card-img">
        <img src="/img/abayee004.jpg" alt="Embroidered Occasion Abaya" />
        <span className="tag">Occasion</span>
      </div>
      <div className="card-body">
        <h3>The Evening Edit</h3>
        <p className="desc">Intricate embroidery on a relaxed A-line silhouette. Designed for weddings, Eid, and formal gatherings.</p>
        <span className="price">£45.00</span>
      </div>
      <AddToCart product={product} />
    </article>

  </div>

  <footer>© 2026 Abayees Abaya Collection. All rights reserved.</footer>


      </main>
    </div>
  );
}
