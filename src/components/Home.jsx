import React from "react";
import "./Home.css";
import product2 from "../assets/product2.png";

export const Home = () => {
  return (
    <div className="Home">
      <div className="hero">
        <div class="hero-img">
          <img src={product2} alt="Kaos Keren" className="home-image" />
        </div>

        <div class="hero-content">
          <h1>IRREGULAR</h1>
          <h1>FASHION STORE</h1>
          <p>
            Tampil keren dan nyaman dengan kaos berkualitas tinggi berbahan
            adem, cocok untuk segala aktivitas! Desain bisa dibuat sesuai
            keinginan, mulai dari gambar, tulisan, hingga warna favoritmu. Pesan
            sekarang dan wujudkan kaos impianmu dengan harga bersahabat! Buruan,
            stok terbatas!
          </p>
        </div>
      </div>
    </div>
  );
};

