import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

//components
import ConfirmComponent from '../../shared/confirm/Confirm.component';
import EmptyCartComponent from './empty-cart/EmptyCart.component.jsx';

//toast
import { toast } from 'react-toastify';

//css
import './Cart.component.css';

//icons
import { RiDeleteBin6Line } from 'react-icons/ri';

//context
import { useCartContext } from '../../context/cart-context/CartContextProvider';

//utils
import { createOrden } from '../../../utils/items';

const CartComponent = () => {

    const [nombre, setNombre] = useState('')
    const [errorNombre, setErrorNombre] = useState('')
    const [nombreValid, setNombreValid] = useState(false)


    const [email, setEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [emailValid, setEmailValid] = useState(false)

    const [phone, setPhone] = useState('')
    const [errorPhone, setErrorPhone] = useState('')
    const [phoneValid, setPhoneValid] = useState(false)

    const [loading, setLoading] = useState(false);

    const { cartList, removeItem, cleanCart, totalPrice, countTotalPrice } = useCartContext()

    let rowItem = cartList.map((cart, index) => {
        return <div className="row border-top mt-4 mb-4">
            <div className="row main align-items-center">
                <div className="col-2 position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        {cart.quantity}+
                    </span>
                    <img className="cart-item-img" src={cart.item.pictureUrl} /></div>
                <div className="col-6">
                    <div className="row text-muted">{cart.item.garment}</div>
                    <Link className="row" to={"/item/" + cart.item.id}> {cart.item.title}</Link>
                </div>
                <div className="col-2"><span>{cart.item.price} ARS</span></div>
                <div className="col-1 td-delete-icon" onClick={() => { triggerRemove(cart.item) }}> <button className="btn"> <RiDeleteBin6Line className="btn-delete-icon" /> </button> </div>
            </div>
        </div>
    })

    useEffect(() => {
        countTotalPrice()
    }, [])

    const addOrder = async (e) => {
        try {
            e.preventDefault()
            let buyer = {
                nombre,
                email,
                phone
            }
            setLoading(true)
            let orden = await createOrden(cartList, totalPrice, buyer)
            setLoading(false)
            cleanCart()
            toast.success(`Orden creada con éxito, el id de su orden es ${orden.id}`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                theme: 'colored'
            })
        } catch (error) {
            console.log('Error', error)
            setLoading(false)
            toast.error("Ocurrió un error y no pudimos crear su orden!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                theme: 'colored',
                autoClose: 15000
            })
        }

    }

    const triggerRemove = (item) => {
        toast.info(<ConfirmComponent message="¿Desea eliminar el item?" callbackFunction={() => {removeItem(item)}} />, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: false,
            theme: 'light',
            autoClose: 5000
        })
    }
    const triggerClean = () => {
        toast.info(<ConfirmComponent message="¿Desea eliminar todos los items de su carrito?" callbackFunction={cleanCart} />, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: false,
            theme: 'light',
            autoClose: 5000
        })
    }
    /*
    FORM
    */

    const validateField = (fieldName, value) => {

        switch (fieldName) {
            case 'email':

                setErrorEmail('')
                setEmailValid(true)
                if (value.trim().length < 6) {
                    setErrorEmail('El email tiene un minimo de 6 caracteres')
                    setEmailValid(false)
                    break;
                }
                if (value.trim().length > 40) {
                    setErrorEmail('El email tiene un maximo de 40 caracteres')
                    setEmailValid(false)
                    break;
                }
                if (!(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))) {
                    setErrorEmail('El email no es valido')
                    setEmailValid(false)
                    break;
                }
                break;
            case 'name':
                setErrorNombre('')
                setNombreValid(true)
                if (value.trim().length < 6) {
                    setErrorNombre('El nombre tiene un minimo de 6 caracteres')
                    setNombreValid(false)
                    break;
                }
                if (value.trim().length > 20) {
                    setErrorNombre('El nombre tiene un maximo de 20 caracteres')
                    setNombreValid(false)
                    break;
                }
                break;
            case 'phone':
                setErrorPhone('')
                setPhoneValid(true)
                if (value.trim().length != 10) {
                    setErrorPhone('El telefono debe tener 10 caracteres')
                    setPhoneValid(false)
                    break;
                }
                if (!(value.trim().match(/^261([1-9])/i))) {
                    setErrorPhone('El telefono no es valido, debe empezar con 261')
                    setPhoneValid(false)
                    break;
                }
                break;
            default:
                break;
        }
    }

    const changeNombre = (e) => {
        setNombre(e.target.value)
        validateField(e.target.name, e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
        validateField(e.target.name, e.target.value)
    }

    const changePhone = (e) => {
        setPhone(e.target.value)
        validateField(e.target.name, e.target.value)
    }

    return (
        <>
            {cartList.length > 0 &&

                <div className="cart container col-12 row">
                    <div className="cart-items col-8">
                        <h3>Carrito de compras</h3>
                        <Link to="/home#productos" className="me-2"><button className="btn btn-outline-primary">Seguir comprando</button></Link>
                        <button className="btn btn-outline-danger" onClick={() => { triggerClean() }}>Limpiar carrito</button>
                        {
                            rowItem
                        }
                    </div>
                    <div className="cart-checkout col-4">
                        <h3>Checkout</h3>

                        <form className="form-checkout needs-validation">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" name="name" className={nombreValid ? 'form-control is-valid' : 'form-control is-invalid'} id="name" placeholder="jhon doe" value={nombre} onChange={(e) => changeNombre(e)} required />
                                <p className="text-danger mb-3">
                                    {errorNombre}
                                </p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Dirección email</label>
                                <input type="email" name="email" className={emailValid ? 'form-control is-valid' : 'form-control is-invalid'} id="email" placeholder="usuario@gmail.com" aria-describedby="emailHelp" value={email} onChange={(e) => changeEmail(e)} required />
                                <p className="text-danger mb-3">
                                    {errorEmail}
                                </p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Número de telefono (+54)</label>
                                <input type="text" name="phone" className={phoneValid ? 'form-control is-valid' : 'form-control is-invalid'} id="phone" placeholder="Ejemplo. 2615179901" value={phone} onChange={(e) => changePhone(e)} required />
                                <p className="text-danger mb-3">
                                    {errorPhone}
                                </p>
                            </div>
                            <h5 className="mb-3">Total: {totalPrice} ARS</h5>
                            <div className="d-grid gap-2">
                                <button type="submit" className={(!emailValid || !nombreValid || !phoneValid) ? 'btn btn-outline-secondary' : 'btn btn-outline-success'} onClick={(e) => { addOrder(e) }} disabled={!emailValid || !nombreValid || !phoneValid}>Crear orden</button>
                            </div>
                        </form>
                    </div>

                </div>
            }
            {
                cartList.length === 0 && <EmptyCartComponent />
            }
        </>
    );
}

export default CartComponent;
