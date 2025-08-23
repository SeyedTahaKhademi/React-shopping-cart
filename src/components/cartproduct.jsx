import { Button } from 'react-bootstrap'
import { getProductData } from '../data/items'
import { useContext } from 'react'
import { CartContext } from '../contexts/Cartcontext'


function Cartproduct({ id, quantity }) {
    const productData = getProductData(id)
    const cart = useContext(CartContext)
    // if (!productData) {
    //     return <p className="text-danger">محصول پیدا نشد (id: {id})</p>
    // }
    return (
        <>
            <p>{productData.title}</p>
            <p>تعداد :{quantity}</p>
            <p> قیمت :{quantity * productData.price}</p>
            <Button size='sm' className='mb-5 text-white'
                variant='btn btn-outline-secondary'
                onClick={() => cart.deleteFromCart(id)}>حذف از سبد خرید</Button>

        </>
    )
}


export default Cartproduct

