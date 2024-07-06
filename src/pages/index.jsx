import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner'
import { Menu } from '../components/Menu/Menu'
import { Gallery } from '../components/Gallery/Gallery'
import { Contact } from '../components/Contact/Contact'
import { Footer } from '../components/Footer/Footer'



document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
  <Footer />
  </div>
);

const navBtn = document.querySelector('.nav-btn');
const rolloutNav = document.querySelector('.rollout-nav');
navBtn.addEventListener("click", () => {
  rolloutNav.classList.toggle('nav-closed');
});

rolloutNav.addEventListener("click", () => {
  rolloutNav.classList.toggle('nav-closed');
})
    

const orderBtns = document.querySelectorAll(".order-btn");
orderBtns.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const drinkId = e.target.dataset.id;
    
    await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify([{ op: 'replace', path: '/ordered', value: true ? false : true }])
    })
   window.location.reload()
    
  })
})
