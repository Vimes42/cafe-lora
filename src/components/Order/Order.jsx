import { OrderItem } from '../OrderItem/OrderItem'
import './order.css';

const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image');
    const json = await response.json();
    const items = json.data;
    console.log(items)

export const Order = () => (
        <div className="container order__content">
          <h1>Vaše objednávka</h1>
          { items.length === 0 ? (
            <p className="empty-order">Zatím nemáte nic objednáno</p>
          ) : ( 
            <div className="order__items">
            {items.map((item) => <OrderItem key={item.id} name={item.name} image={`http://localhost:4000${item.image}`} />)}
            </div>
          )
          }
        </div>    
    )
