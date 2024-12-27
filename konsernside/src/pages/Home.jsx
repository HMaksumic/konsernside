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

const Home = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <section className="info-box">
          <h3>Hvem er vi?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus volutpat tincidunt. Sed venenatis sagittis suscipit. Donec lorem ante, sodales in efficitur dictum, dapibus id turpis. Aenean fringilla mollis imperdiet. Praesent pharetra arcu massa, at sollicitudin nibh ornare sit amet. Curabitur ac diam vitae dolor ultricies dictum a eget est. Proin ac sapien ac odio porttitor tristique. Praesent luctus, urna quis sodales consectetur, arcu tortor sagittis massa, vel sagittis nibh mi non nisi. Nam cursus sem nisi, eu condimentum turpis vulputate ut. Sed diam dui, mattis id finibus non, lacinia quis purus. Fusce lectus magna, pretium ut viverra id, porta eget tellus. Vivamus faucibus ultrices orci vitae egestas. Fusce ultrices quam nec lacinia bibendum. Nunc suscipit enim ac egestas tempus</p>
        </section>
        <section className="companies-container">
          <h3>Våre selskaper</h3>
          <div className="company">
            <a href="https://www.aakebergskoglunn.no/">
              <img src={Åkeberg} alt="Company 1 Logo" className="company-logo" />
              <div className="company-name">Åkeberg Skoglunn Pølsemakeri AS</div>
            </a>
            <div className="company-info">Duis at leo consectetur, sollicitudin ante vitae, rhoncus odio. Duis aliquet tempus leo ut volutpat. Nullam accumsan risus nec eros sagittis feugiat. Aliquam lacus lorem, interdum at metus eu, aliquet finibus arcu. Curabitur tortor lorem, rutrum a bibendum et, semper a quam. Ut lobortis ligula ipsum,</div>
          </div>
          <div className="company">
            <a href="https://spiceofnorway.no/">
              <img src={Spice} alt="Company 2 Logo" className="company-logo" />
              <div className="company-name">Spice of Norway</div>
            </a>
            <div className="company-info">iam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus massa, porta at scelerisque id, tempor eu quam. Fusce pharetra, orci ac ultrices consectetur, arcu tellus aliquam velit, vel iaculis justo neque sed felis. Sed pellentesque justo et libero fringilla, sit amet sagittis</div>
          </div>
          <div className="company">
            <a href="https://oivindkarlsen.no/">
              <img src={Karlsen} alt="Company 3 Logo" className="company-logo" />
              <div className="company-name">Øyvind Karlsen Manstad Kjøtt AS</div>
            </a>
            <div className="company-info">us, suscipit at magna vel, dictum eleifend est. Aenean metus orci, euismod ac lectus quis, malesuada semper mauris. Curabitur cursus bibendum massa, sit amet aliquet leo convallis eu. Proin eu justo quis lorem feugiat posuere. Integer ullamcorper ex semper dui pulvinar tristique. Pellentesque neque dui, aliquam ac egestas nec, viverra eu orci. Cras maximus arcu ornare quam mattis lacinia</div>
          </div>
          <div className="company">
            <a href="https://engfugl.no/">
              <img src={Engfugl} alt="Company 3 Logo" className="company-logo" />
              <div className="company-name">Eng Fugl</div>
            </a>
            <div className="company-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus massa, porta at scelerisque id, tempor eu quam. Fusce pharetra, orci ac ultrices consectetur, arcu tellus aliquam velit, vel iaculis justo neque sed felis. Sed pellentesque justo et libero fringilla, sit amet sagittis leo tempor.</div>
          </div>
          <div className="company">
            <a href="/NA">
              <img src={Halalprod} alt="Company 3 Logo" className="company-logo" />
              <div className="company-name">Halalprodusenten</div>
            </a>
            <div className="company-info"> dictum ipsum, nec lobortis mauris volutpat eu. Donec ultrices lacinia leo, eget semper urna ullamcorper vel. Vivamus tempor a purus vel gravida. Morbi ornare, dolor vitae fermentum dapibus, mauris tellus mattis mauris, sed placerat urna magna a dui. In et velit justo. Donec id accumsan tel</div>
          </div>
          <div className="company">
            <a href="/NA">
              <img src={Edelgaard} alt="Company 3 Logo" className="company-logo" />
              <div className="company-name">Edelgård</div>
            </a>
            <div className="company-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus massa, porta at scelerisque id, tempor eu quam. Fusce pharetra, orci ac ultrices consectetur, arcu tellus aliquam velit, vel iaculis justo neque sed felis. Sed pellentesque justo et libero fringilla, sit amet sagittis leo tempor.</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;