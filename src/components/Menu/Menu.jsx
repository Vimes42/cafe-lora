import './menu.css';
import { Drink } from '../Drink/Drink'

const response = await fetch("http://localhost:4000/api/drinks")
const json = await response.json();
const drinksjson = json.data;

export const Menu = () => (

    <section className="menu" id="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
            {drinksjson.map((drink) => (
              <Drink key={drink.id} id={drink.id} image={drink.image} name={drink.name} ordered={drink.ordered} layers={drink.layers} />
            ))}
          </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>
)