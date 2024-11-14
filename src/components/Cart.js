import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
    const { items, updateItemQuantity } = useContext(CartContext);

    return (
        <div>
            <h2>Seu Carrinho</h2>
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
        </div>
    );
}
