import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Product({ id, thumbnail, title, price, description, openModal, categoria }) {


    const { addItemToCart } = useContext(CartContext);

    

    const handleClick = () => {
        openModal({ id, thumbnail, title, price, description });
      };


    return (
        <article className="product" key={id}>
            
            <img src={thumbnail} alt={title} />
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className="product-price">$ {price}</p>
                </div>
                <p className="product-actions">
                    <button onClick={handleClick}>...</button>
                    <button onClick={() => addItemToCart(id)}>Add to Cart</button>
                </p> 
            </div>

        </article>
    );
}