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
    <Header />
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

const orderForms = document.querySelectorAll(".drink__controls");
orderForms.forEach((form) => {
  form.addEventListener("click", (e) => {
    e.preventDefault();
    const drinkId = e.target.dataset.id;
    console.log(drinkId)
  })
})
