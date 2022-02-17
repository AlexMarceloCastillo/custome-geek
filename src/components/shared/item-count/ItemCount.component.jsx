import React, { useState } from 'react';

//icons
import { AiOutlinePlus, AiOutlineMinus, AiOutlineLoading3Quarters } from 'react-icons/ai';

//css
import './ItemCount.component.css';




const ItemCountComponent = ({loading = false, initial, stock, onAdd}) => {

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
                <button className="btn btn-light" onClick={() => decrementar()} disabled={count <= 0 || stock <= 0}>
                    <AiOutlineMinus className={count <= 0 ? 'icon-disabled' : 'icon-active'} />
                </button>
                <h5 className="item-count-number">{count !== 0 ? count : 0}</h5>
                <button className="btn btn-light" onClick={() => aumentar()} disabled={count === stock || stock <= 0}>
                    <AiOutlinePlus className={count === stock ? 'icon-disabled' : 'icon-active'} />
                </button>
            </div>
            <button className="btn btn-primary btn-add-to-cart mt-2" onClick={() => { onAdd(count)} } disabled={count <= 0 ||  stock <= 0}>
                Agregar al carrito 
                {loading && <AiOutlineLoading3Quarters className="loader-count" />}
                </button>
        </div>
    );
}

export default ItemCountComponent;
