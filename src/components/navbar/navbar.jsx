import { useState, useContext } from 'react';
import { Navbar as NavbarBS, Button, Modal } from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'
import Cartproduct from '../cartproduct';
import { CartContext } from '../../contexts/Cartcontext';

function Navbar() {
    const [ShowModal, setShowModal] = useState(false);
    const cart = useContext(CartContext)
    const cartproductquantity = cart.items.reduce((sum, products) => sum + products.quantity, 0)
    function handleShow() { setShowModal(true) }
    function handleClose() { setShowModal(false) }

    return (
        <>
            <NavbarBS className='border-bottom border-secondary'>
                <NavbarBS.Collapse className='justify-content-end'>
                    <Button onClick={handleShow} variant='btn btn-outline-secondary'
                        className='text-white'>
                        ({cartproductquantity})<BsCart className='mx-2'></BsCart>سبد خرید </Button>
                </NavbarBS.Collapse>
            </NavbarBS>
            <Modal show={ShowModal} onHide={handleClose} contentClassName='Card-bg' dir='rtl'>


                <Modal.Body className='bg-black text-white'>
                    {cartproductquantity > 0 ? (
                        <>
                            <h3 className='mb-4'>سبد خرید</h3>
                            {cart.items.map((item) => (
                                <Cartproduct
                                    key={item.id}
                                    id={item.id}
                                    quantity={item.quantity}
                                ></Cartproduct>
                            ))}
                            <h3>مجموع قیمت:{cart.getTotalCart()}</h3>
                        </>
                    ) : (
                        <h3>سبد خرید خالی است</h3>
                    )}
                    <Button dir='ltr' className='text-white mt-5 mx-4' variant='btn btn-outline-secondary' onClick={handleClose}>بستن</Button>
                </Modal.Body>

            </Modal>

        </>
    )
};

export default Navbar;


