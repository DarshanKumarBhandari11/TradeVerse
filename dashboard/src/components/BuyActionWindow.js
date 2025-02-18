import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const { closeBuyWindow } = useContext(GeneralContext);
    const navigate = useNavigate();

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e) => {
        if (!dragging) return;
        setPosition({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
        });
    };

    // Handle Mouse Up
    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleBuyClick = () => {
        axios.post("http://localhost:3002/newOrder", {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "BUY",
        });

        closeBuyWindow();
        navigate("/orders");
    };

    const handleCancelClick = () => {
        closeBuyWindow();
    };

    return (
        <div
            className="container"
            id="buy-window"
            style={{ left: `${position.x}px`, top: `${position.y}px`, position: "absolute", cursor: "grab" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(parseInt(e.target.value, 10) || 1)}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(parseFloat(e.target.value) || 0.0)}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <button className="btn btn-blue" onClick={handleBuyClick}>Buy</button>
                    <button className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;
