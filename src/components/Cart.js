
import { CartContext } from "../context/CartContext";
import React from "react";

export default function Cart({ id, thumbnail, title, price, quantity, onUpdateQuantity }) {


    return (
        <div>

        <li key={id} className="cart-item" id="cart-items">
            
            <div>
            <img src={thumbnail} alt= {thumbnail} width="250" />
                <h3>{title}</h3>
                <label>Price: ${price}</label>
                <div className="cart-item-actions">
                    <button  onClick={() => onUpdateQuantity(id, -1)}>-</button>
                    <p> {quantity} </p>
                    <button  onClick={() => onUpdateQuantity(id, 1)}>+</button>
                </div>
                <div>
                <label >Total  Price: ${price*quantity}</label>
                </div>
            </div>
        </li>
        </div>
    );
}
