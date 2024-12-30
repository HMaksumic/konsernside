import React from 'react';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import placeholderImage from '../assets/placeholder.jpg';
import Åkeberg from '../assets/polsemakeri.jpg';
import Halalprod from '../assets/halal.jpg';
import Spice from '../assets/Spiceofnorway.jpg';
import Karlsen from '../assets/Karlsen.png';
import Engfugl from '../assets/engfugl.png';
import Edelgaard from '../assets/edelgaard.png';

import EdelgaardBilde from '../assets/edelgaardbilde.jpg';
import EngfuglBilde from '../assets/engfuglbilde.webp';
import HalalBilde from '../assets/halalbilde.jpg';
import KarlsenBilde from '../assets/karlsenbilde.webp';
import SpiceBilde from '../assets/spiceofnorwaybilde.jpg';
import PolsemakeriBilde from '../assets/roger-og-poelser.jpg';

import AboutBilde1 from '../assets/aboutbilde1.webp';
import AboutBilde2 from '../assets/aboutbilde2.jpg';
import AboutBilde3 from '../assets/aboutbilde3.jpg';

const Home = () => {
  return (
    <div className="app-container">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>Sed dapibus volutpat tincidunt. Sed venenatis sagittis suscipit. Donec lorem ante</p>
        </div>
      </section>
      <div className="container">
        <section className="about-section">
          <img src={AboutBilde1} alt="About Us" className="about-image" />
          <div className="about-text">
            <h2>Sed venenatis sagittis suscipit.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus volutpat tincidunt. Sed venenatis sagittis suscipit. Donec lorem ante, sodales in efficitur dictum, dapibus id turpis. Aenean fringilla mollis imperdiet. Praesent pharetra arcu massa, at sollicitudin nibh ornare sit amet.</p>
            <button className="read-more">Les mer</button>
          </div>
        </section>
        <section className="about-section reverse">
          <div className="about-text">
            <h2>Sed venenatis sagittis suscipit.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus volutpat tincidunt. Sed venenatis sagittis suscipit. Donec lorem ante, sodales in efficitur dictum, dapibus id turpis. Aenean fringilla mollis imperdiet. Praesent pharetra arcu massa, at sollicitudin nibh ornare sit amet.</p>
            <button className="read-more reverse">Les mer</button>
          </div>
          <img src={AboutBilde2} alt="Our Mission" className="about-image" />
        </section>
        <section className="about-section">
          <img src={AboutBilde3} alt="About Us" className="about-image" />
          <div className="about-text">
            <h2>Sed venenatis sagittis suscipit.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus volutpat tincidunt. Sed venenatis sagittis suscipit. Donec lorem ante, sodales in efficitur dictum, dapibus id turpis. Aenean fringilla mollis imperdiet. Praesent pharetra arcu massa, at sollicitudin nibh ornare sit amet.</p>
            <button className="read-more">Les mer</button>
          </div>
        </section>
      </div>

      <section className="services"></section>
        <section className="services">
          <h2 className='service-title'>Våre selskaper</h2>
          <div className="services-container">
            <div className="service">
              <img className="company-stock-image" src={PolsemakeriBilde} alt="Service 1" />
              <h3>Åkeberg Skoglunn Pølsemakeri AS</h3>
              <p>Proin ac sapien ac odio porttitor tristique. Praesent luctus, urna quis sodales consectetur, arcu tortor sagittis massa, vel sagittis nibh mi non nisi.</p>
              <img className="company-logo" src={Åkeberg} alt="Service 1" />
            </div>
            <div className="service">
              <img className="company-stock-image" src={KarlsenBilde} alt="Service 1" />
              <h3 style={{ paddingLeft: 10, paddingRight: 10 }}>Øyving Karlsen Maanstad Kjøtt AS</h3>
              <p>Proin ac sapien ac odio porttitor tristique. Praesent luctus, urna quis sodales consectetur, arcu tortor sagittis massa, vel sagittis nibh mi non nisi.</p>
              <img className="company-logo" src={Karlsen} alt="Service 1" />
            </div>
            <div className="service">
              <img className="company-stock-image" src={SpiceBilde} alt="Service 1" />
              <h3>Spice of Norway AS</h3>
              <p>Proin ac sapien ac odio porttitor tristique. Praesent luctus, urna quis sodales consectetur, arcu tortor sagittis massa, vel sagittis nibh mi non nisi.</p>
              <img className="company-logo" src={Spice} alt="Service 1" />
            </div>
            <div className="service">
              <img className="company-stock-image" src={EngfuglBilde} alt="Service 1" />
              <h3>Eng Fugl AS</h3>
              <p>Proin ac sapien ac odio porttitor tristique. Praesent luctus, urna quis sodales consectetur, arcu tortor sagittis massa, vel sagittis nibh mi non nisi.</p>
              <img className="company-logo" src={Engfugl} alt="Service 1" />
            </div>
            <div className="service">
              <img className="company-stock-image" src={HalalBilde} alt="Service 1" />
              <h3>Halal Produsenten AS</h3>
              <p>Proin ac sapien ac odio porttitor tristique. Praesent luctus, urna quis sodales consectetur, arcu tortor sagittis massa, vel sagittis nibh mi non nisi.</p>
              <img className="company-logo" src={Halalprod} alt="Service 1" />
            </div>
            <div className="service">
              <img className="company-stock-image" src={EdelgaardBilde} alt="Service 1" />
              <h3>Edelgård AS</h3>
              <p>Proin ac sapien ac odio porttitor tristique. Praesent luctus, urna quis sodales consectetur, arcu tortor sagittis massa, vel sagittis nibh mi non nisi.</p>
              <img className="company-logo" src={Edelgaard} alt="Service 1" />
            </div>
          </div>
        </section>
      <Footer />
    </div>
  );
};

export default Home;