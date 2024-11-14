import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
    const { items, updateItemQuantity } = useContext(CartContext);

    // Calcular o total do carrinho
    const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section className="checkout">
            <h2>Checkout</h2>

            {items.length === 0 ? (
                <p>O carrinho está vazio.</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <img src={item.thumbnail} alt={item.title} width="50" />
                            <p>{item.title}</p>
                            <p>Preço: {item.price}</p>
                            <p>Quantidade: {item.quantity}</p>
                            <p>Subtotal: {(item.price * item.quantity).toFixed(2)}</p>
                            
                            <button onClick={() => updateItemQuantity(item.id, 1)}>+</button>
                            <button onClick={() => updateItemQuantity(item.id, -1)}>-</button>
                        </li>
                    ))}
                </ul>
            )}

            <p id="cart-total-price"> 
                Total do Carrinho: {cartTotal.toFixed(2)}
            </p>
            
            <Link to="/" className="product-actions">
                <button>RETORNAR</button>
            </Link>
        </section>
    );
}