import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="3232312"
            title="The lean startup"
            price={29.99}
            image="https://www.investopedia.com/thmb/eRKJOys7Ff9GRkgg3kW2uZXbNDo=/900x600/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-527398042-0aa90c3c871d4b98883700135c9013de.jpg"
            rating={5}
          />
          <Product
            id="3232311"
            title="Lenovo Chromebook S330 Laptop, 14-Inch FHD (1920 x 1080) Display, MediaTek MT8173C Processor, 4GB LPDDR3, 64GB eMMC, Chrome OS, 81JW0000US, Business Black"
            price={237.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61ViOMIUhmL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3232212"
            title="Fact check"
            price={229.99}
            image="https://miro.medium.com/max/1400/1*Oo1TOrs6RA1gk61cba_9ng.jpeg"
            rating={5}
          />{" "}
          <Product
            id="3232162"
            title="Fact check"
            price={229.99}
            image="https://miro.medium.com/max/1400/1*Oo1TOrs6RA1gk61cba_9ng.jpeg"
            rating={5}
          />{" "}
          <Product
            id="2332312"
            title="Fact check"
            price={229.99}
            image="https://miro.medium.com/max/1400/1*Oo1TOrs6RA1gk61cba_9ng.jpeg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3232112"
            title="XFX Radeon RX 580 GTS XXX Edition 1386MHz OC+, 8GB GDDR5, VR Ready, Dual BIOS, 3xDP HDMI DVI, AMD Graphics Card (RX-580P8DFD6)"
            price={774.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81D46VNLb9L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
