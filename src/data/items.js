 const ProductList = [
    {
        id: 1,
        title: 'قالب آوین ',
        price: 77,
        image: '/image/product1.jpg'
    },
    {
        id: 2,
        title: 'قالب آوین 1',
        price: 439,
        image: '/image/product1.jpg'
    },
    {
        id: 3,
        title: 'قالب آوین 2',
        price: 780,
        image: '/image/product1.jpg'
    },
    {
        id: 4,
        title: 'قالب آوین 3',
        price: 1250 ,
        image: '/image/product1.jpg'
    },
    {
        id: 5,
        title: 'قالب آوین ',
        price: 320,
        image: '/image/product1.jpg'
    },
    {
        id: 6,
        title: 'قالب آوین 1',
        price: 780,
        image: '/image/product1.jpg'
    },
    {
        id: 7,
        title: 'قالب آوین 2',
        price: 650,
        image: '/image/product1.jpg'
    },
    {
        id: 8,
        title: 'قالب آوین 3',
        price: 728 ,
        image: '/image/product1.jpg'
    },
];

function getProductData(id) {
    let productData = ProductList.find((item) => (item.id == id)
        
    )
    return productData
};

export {ProductList , getProductData}