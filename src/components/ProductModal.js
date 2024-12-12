import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductModal({ id, thumbnail, title, price, description }) {


    const { items } = useContext(CartContext);


    return (
        <article className="modalproduct" >
            <img src={thumbnail} alt={title} />
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <h4 className="product-price">$ {price}</h4>
                    <p>{description}</p>
                </div>
                {/* <p className="product-actions">
                    <button onClick={() => addItemToCart(id)}>Add to Cart</button>
                </p>  */}
            </div>

        </article>
    );
}

