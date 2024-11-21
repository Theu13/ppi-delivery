import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";
import { Link } from "react-router-dom";

export default function Checkout() {
    const { items, updateItemQuantity } = useContext(CartContext); // Obtém os itens e a função de atualização

    const totalPrice = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <section className="checkout" id="checkout">
            <h1 id="checkout">Checkout</h1>

            {items.length > 0 ? (
                <div className="checkout-items">
                    <ul>
                        {items.map((product) => (

                             <Cart
                                id={product.id}
                                thumbnail={product.thumbnail}
                                title={product.title}
                                price={product.price}
                                quantity={product.quantity}
                                item={product}
                                onUpdateQuantity={updateItemQuantity}
                            />

                          
                        ))}
                    </ul>
                    <div className="total">
                        <h2 id="cart-total-price">Total Cart: ${totalPrice.toFixed(2)}</h2>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}

            <Link to="/" className="product-actions">
                <button>RETURN</button>
            </Link>
        </section>
    );
}
