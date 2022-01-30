import React, { useState } from 'react';

//icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

//css
import './ItemCount.component.css';

const ItemCountComponent = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const aumentar = () => {
        setCount(count + 1)
    }

    const decrementar = () => {
        setCount(count - 1)
    }

    return (
        <div className="item-count">
            <div className="item-count-buttons d-flex justify-content-between align-items-center">
                <button className="btn btn-light" onClick={() => decrementar()} disabled={count <= 0}>
                    <AiOutlineMinus className={count <= 0 ? 'icon-disabled' : 'icon-active'} />
                </button>
                <h5 className="item-count-number">{count}</h5>
                <button className="btn btn-light" onClick={() => aumentar()} disabled={count === stock}>
                    <AiOutlinePlus className={count === stock ? 'icon-disabled' : 'icon-active'} />
                </button>
            </div>
            <button className="btn btn-primary btn-add-to-cart mt-2" onClick={() => { onAdd(count, () => { setCount(0) }, () => { setCount(stock - count) }) }} disabled={count <= 0}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCountComponent;
