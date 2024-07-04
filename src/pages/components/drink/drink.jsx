import './drink.css';
import { Layer } from '../layer/layer';


export const Drink = ({id, image, name, ordered, layers}) => (
    
    
    <div className="drink" key={id}>
              <div className="drink__product">
                <div className="drink__cup">
                  <img src={`http://localhost:4000${image}`} alt={name} /> 
                </div>
                <div className="drink__info">
                  <h3>{name}</h3>
                  
                  {layers.map((layer) => (
                    <Layer color={layer.color} label={layer.label} />
                    ))}

                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value={ordered} />
                <button className="order-btn">
                  Objednat
                </button>
              </form>
            </div>
)

