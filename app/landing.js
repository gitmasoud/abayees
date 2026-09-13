import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

  <title>Abaya Collection — The Butterfly Edit</title>


  <nav>
    <div class="brand">Abaya Collection</div>
    <ul>
      <li>Shop</li>
      <li>Collections</li>
      <li>About</li>
    </ul>
  </nav>

  <section class="hero">
    <h1>Timeless Elegance, Modern Silhouettes</h1>
    <p>Discover our curated abaya collection — where luxurious fabrics meet contemporary design, crafted for every occasion.</p>
  </section>

  <div class="grid">

    <article class="card">
      <div class="card-img">
        <img src="images/classic-black-abaya.jpg" alt="Classic Black Front-Open Abaya" />
        <span class="tag">New In</span>
      </div>
      <div class="card-body">
        <h3>The Everyday Black</h3>
        <p class="desc">Timeless front-open silhouette in premium Nidha fabric. Effortless layering for daily elegance.</p>
        <span class="price">£65.00</span>
      </div>
    </article>

    <article class="card">
      <div class="card-img">
        <img src="images/butterfly-beaded-abaya.jpg" alt="Beaded Butterfly Motif Abaya" />
        <span class="tag gold">Signature</span>
      </div>
      <div class="card-body">
        <h3>The Monarch</h3>
        <p class="desc">Hand-beaded butterfly motifs trail down the front panel and up one sleeve — an enchanting, wearable work of art.</p>
        <span class="price">£149.00</span>
      </div>
    </article>

    <article class="card">
      <div class="card-img">
        <img src="images/butterfly-sleeve-abaya.jpg" alt="Butterfly Sleeve Abaya" />
        <span class="tag">New In</span>
      </div>
      <div class="card-body">
        <h3>Abayat Al-Farashah</h3>
        <p class="desc">Flowy, wide-cut sleeves inspired by butterfly wings. Lightweight drape for effortless movement.</p>
        <span class="price">£95.00</span>
      </div>
    </article>

    <article class="card">
      <div class="card-img">
        <img src="images/evening-embroidered-abaya.jpg" alt="Embroidered Occasion Abaya" />
        <span class="tag">Occasion</span>
      </div>
      <div class="card-body">
        <h3>The Evening Edit</h3>
        <p class="desc">Intricate embroidery on a relaxed A-line silhouette. Designed for weddings, Eid, and formal gatherings.</p>
        <span class="price">£120.00</span>
      </div>
    </article>

  </div>

  <footer>© 2025 Abaya Collection. All rights reserved.</footer>


      </main>
    </div>
  );
}
