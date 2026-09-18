import Image from "next/image";
import styles from "./landing.css"

export default function Landing() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

  <title>Abaya Collection — The Butterfly Edits</title>


  <nav>
    <div className="styles.brand">Abaya Collection</div>
    <ul>
      <li>Shop</li>
      <li>Collections</li>
      <li>About</li>
    </ul>
  </nav>

  <section className="hero">
    <h1>Timeless Elegance, Modern Silhouettes</h1>
    <p>Discover our curated abaya collection — where luxurious fabrics meet contemporary design, crafted for every occasion.</p>
    
    <video controls width="100%">
      <source src="/img/abayee001video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>

  <div className="grid">

    <article className="card">
      <div className="card-img">
        <img src="/img/abayee001.jpg" alt=" Black Front-Open Abaya" loading="eager" />
        <span className="tag">New In</span>
      </div>
      <div className="card-body">
        <h3>The Everyday Black</h3>
        <p className="desc">Timeless front-open silhouette in premium Nidha fabric. Effortless layering for daily elegance.</p>
        <span className="price">£65.00</span>
      </div>
    </article>

    <article className="card">
      <div className="card-img">
        <img src="/img/abayee002.jpg" alt="Beaded Butterfly Motif Abaya" />
        <span className="tag gold">Signature</span>
      </div>
      <div className="card-body">
        <h3>The Monarch</h3>
        <p className="desc">Hand-beaded butterfly motifs trail down the front panel and up one sleeve — an enchanting, wearable work of art.</p>
        <span className="price">£149.00</span>
      </div>
    </article>

    <article className="card">
      <div className="card-img">
        <img src="/img/abayee003.jpg" alt="Butterfly Sleeve Abaya" />
        <span className="tag">New In</span>
      </div>
      <div className="card-body">
        <h3>Abayat Al-Farashah</h3>
        <p className="desc">Flowy, wide-cut sleeves inspired by butterfly wings. Lightweight drape for effortless movement.</p>
        <span className="price">£95.00</span>
      </div>
    </article>

    <article className="card">
      <div className="card-img">
        <img src="/img/abayee004.jpg" alt="Embroidered Occasion Abaya" />
        <span className="tag">Occasion</span>
      </div>
      <div className="card-body">
        <h3>The Evening Edit</h3>
        <p className="desc">Intricate embroidery on a relaxed A-line silhouette. Designed for weddings, Eid, and formal gatherings.</p>
        <span className="price">£120.00</span>
      </div>
    </article>

  </div>

  <footer>© 2025 Abaya Collection. All rights reserved.</footer>


      </main>
    </div>
  );
}
