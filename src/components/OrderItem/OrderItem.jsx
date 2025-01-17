import './orderItem.css';

export const OrderItem = ({name, image}) => (
        <div className="order-item">
              <img
                src={image}
                className="order-item__image" alt={name}
              />
              <div className="order-item__name">
                {name}
              </div>
            </div>
    )