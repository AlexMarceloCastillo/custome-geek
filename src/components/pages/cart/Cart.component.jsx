import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//toast
import { toast } from 'react-toastify';

//component
import LoaderComponent from '../../shared/loader/Loader.component.jsx';

//css
import './Cart.component.css';

//icons
import { RiDeleteBin6Line } from 'react-icons/ri';

//context
import { useCartContext } from '../../context/cart-context/CartContextProvider';

//utils
import { createOrden } from '../../../utils/items';
import EmptyCartComponent from './empty-cart/EmptyCart.component.jsx';

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

    let tr = cartList.map((cart, index) => {
        return <tr key={index} className="cart-item-table-row col-12 ">
            <td className="col-md-1 td-text td-delete-icon" onClick={() => { removeItem(cart.item) }}> <button className="btn"> <RiDeleteBin6Line className="btn-delete-icon" /> </button> </td>
            <td className="col-md-8">
                <img className="cart-item-img" src={cart.item.pictureUrl} alt="" />
                <Link to={'/item/' + cart.item.id} className="link-item"> {cart.item.title} </Link>
            </td>
            <td className="col-md-1 td-text"><span>{cart.quantity}</span></td>
            <td className="col-md-1 td-text"><span>{cart.item.price}</span></td>
            <td className="col-md-1 td-text"><span>{cart.item.price * cart.quantity}</span></td>
        </tr>
    })

    let cleanItems = () => {
        if (window.confirm('¿Esta seguro de eliminar todos los items de su carrito?')) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                cleanCart()
            }, 2000)
        }
    }

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
                theme: 'colored'
            })
        }

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
        <div className="container my-5 d-flex cart">
            {cartList.length > 0
                &&
                <>
                    <LoaderComponent isLoading={loading} />
                    <div className="cart-table col-md-8">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Subtotal (ARS)</th>
                                    <th scope="col">Total (ARS)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tr
                                }
                            </tbody>
                        </table>
                        <div className='actions-all-items'>
                            <button className='btn btn-primary' style={{ marginRight: 10 + 'px' }}>Volver al home</button>
                            <button className='btn btn-outline-danger' onClick={cleanItems}>Limpiar carrito</button>
                        </div>
                    </div>
                    <div className="cart-checkout col-md-4">

                        <form className="form-checkout needs-validation">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" name="name" className={nombreValid ? 'form-control is-valid' : 'form-control is-invalid'} id="name" placeholder="jhon doe" value={nombre} onChange={(e) => changeNombre(e)} required/>
                                <p className="text-danger mb-3">
                                    {errorNombre}
                                </p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Dirección email</label>
                                <input type="email" name="email" className={emailValid ? 'form-control is-valid' : 'form-control is-invalid'} id="email" placeholder="usuario@gmail.com" aria-describedby="emailHelp" value={email} onChange={(e) => changeEmail(e)}required />
                                <p className="text-danger mb-3">
                                    {errorEmail}
                                </p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Número de telefono</label>
                                <input type="text" name="phone" className={phoneValid ? 'form-control is-valid' : 'form-control is-invalid'} id="phone" placeholder="2611111111" value={phone} onChange={(e) => changePhone(e)} required />
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
                </>
            }
            {
                cartList.length === 0 && <EmptyCartComponent />
            }
        </div>
    );
}

export default CartComponent;
