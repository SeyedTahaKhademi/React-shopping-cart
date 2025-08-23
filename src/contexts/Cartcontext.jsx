// import { createContext, useState } from "react";
// import { getProductData } from '../data/items'

// export const CartContext = createContext({
//     Items: [],
//     getProductQuantity: () => { },
//     additemtocart: () => { },
//     removefromcart: () => { },
//     deletefromcart: () => { },
//     getTotalcart: () => { }

// })

// export function CartProvider({ children }) {

//     const [Cartproducts, setCartproducts] = useState([]);

//     function getProductQuantity(id) {
//         const quantity = Cartproducts.find((item) => item.id === id)?.quantity;
//         if (quantity === undefined) {
//             return 0
//         }
//         return quantity;
//     };

//     function additemtocart(id) {

//         const quantity = getProductQuantity(id);

//         if (quantity === 0) {
//             setCartproducts([...Cartproducts, { id: id, quantity: 1 }])
//         } else {
//             setCartproducts(
//                 Cartproducts.map((item) => item.id === id ? {
//                     ...item,
//                     quantity: item.quantity + 1
//                 } : item)
//             )
//         }


//     }
//     function deletefromcart(id) {
//         setCartproducts((Cartproducts) => {
//             Cartproducts.filter((item) => {
//                 return item.id != id
//             })
//         })

//     }

//     function removefromcart(id) {
//         const quantity = getProductQuantity(id)
//         if (quantity === 1) {
//             deletefromcart(id)
//         } else {
//             setCartproducts(
//                 Cartproducts.map((item) => item.id === id ? {
//                     ...item,
//                     quantity: item.quantity - 1
//                 } : item)
//             )
//         }

//     }

//     function getTotalcart() {
//         let TotalAmount = 0;
//         Cartproducts.map((item) => {
//             const productdata = getProductData(item.id)
//             TotalAmount += productdata.price * item.quantity
//         })
//     }

//     const ContextValue = {
//         Items: setCartproducts,
//         getProductQuantity,
//         additemtocart,
//         removefromcart,
//         deletefromcart,
//         getTotalcart
//     }
//     return (
//         <CartContext.Provider value={contextValue}>
//             {children}
//         </CartContext.Provider>
//     );
// }





// Cartcontext.js
import { createContext, useState } from "react";
import { getProductData } from '../data/items'

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addItemToCart: () => { },
    removeFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCart: () => { }
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        const quantity = cartProducts.find(item => item.id === id)?.quantity;
        return quantity ?? 0;
    }

    function addItemToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
        } else {
            setCartProducts(
                cartProducts.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        }
    }

    function deleteFromCart(id) {
        setCartProducts(cartProducts.filter(item => item.id !== id));
    }

    function removeFromCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        }
    }

    function getTotalCart() {
        let totalAmount = 0;
        cartProducts.forEach(item => {
            const productData = getProductData(item.id);
            totalAmount += (productData?.price || 0) * item.quantity;
        });
        return totalAmount;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCart
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}