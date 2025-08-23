import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { useContext } from 'react'
import { BsTrash } from 'react-icons/bs'
import { CartContext } from '../contexts/Cartcontext'


function ProductItem({ product }) {
    const cart = useContext(CartContext)
    const productquantity = cart.getProductQuantity(product.id)
    return (
        <Card className='mt-5 card-bg'>
            <Card.Body>
                <Card.Img
                    variant='top'
                    src={product.image}
                    height='200px'
                    style={{ objectFit: 'cover' }}
                />
                <Card.Title align='right' className='pt-4 text-light'>
                    {product.title}
                </Card.Title>
                <Card.Text align='right' className='text-light' dir='rtl'>
                    {product.price.toLocaleString()} تومان
                </Card.Text>
                {productquantity > 0 ? (
                    <>
                        <Form as={Row}>
                            <Form.Label column='true' sm='6' className='text-white'>
                                تعداد :  {productquantity}
                            </Form.Label>
                            <Col sm='18' dir='rtl' >
                                <Button
                                    onClick={() => cart.addItemToCart(product.id)}
                                    sm='6'
                                    className='mx-2 text-succes'
                                    variant='btn btn-outline-secondary'
                                >+</Button>
                                <Button
                                    onClick={() => cart.removeFromCart(product.id)}
                                    sm='6'
                                    className='mx-2 text-warning'
                                    variant='btn btn-outline-secondary'
                                >-</Button>
                                <Button
                                    onClick={() => cart.deleteFromCart(product.id)}
                                    sm='6'
                                    className='mx-2   text-danger'
                                    variant='btn btn-outline-secondary'
                                >حذف <BsTrash /></Button>
                            </Col>

                        </Form>
                    </>
                ) : (
                    <Button

                        onClick={() => cart.addItemToCart(product.id)}
                        variant='btn btn-outline-secondary'
                        className='text-white'
                    >
                        افزودن به سبد خرید
                    </Button>
                )}
            </Card.Body>
        </Card>
    )
}

export default ProductItem;