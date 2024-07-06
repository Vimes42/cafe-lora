import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header/Header';
import { Order } from '../components/Order/Order'
import { Footer } from '../components/Footer/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />

      <main className="order">
        <Order />
      </main>

      <Footer />
    </div>
  </div>
);
