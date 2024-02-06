import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const [totalCart, setTotalCart] = useState(0);


    const AddItemCart = (item) => {

        let cartItemsNovo = [];
        let findItem = false;

        for (var prod of cartItems) {
            if (prod.id === item.id) {
                item.quantidade = prod.quantidade + 1;
                findItem = true;
                cartItemsNovo.push(item)
            }
            else {
                cartItemsNovo.push(prod);
            }
        };
        if ((findItem === false) || (cartItems.length === 0)) {
            cartItemsNovo.push(item)
        }

        setCartItems(cartItemsNovo)
        CalcTotal(cartItemsNovo)
    }

    const RemoveItemCart = (id) => {

        let cartItemsNovo = [];

        for (var prod of cartItems) {

            if (prod.id == id) {
                prod.quantidade = prod.quantidade - 1;

            }
            cartItemsNovo.push(prod)
        };
        cartItemsNovo = cartItemsNovo.filter((item) => {
            return item.quantidade > 0;
        });
        setCartItems(cartItemsNovo)
        CalcTotal(cartItemsNovo)

    };

    const CalcTotal = (items) => {
        let tot = 0;
        for (var items of items) {
            tot = tot + (items.preco * items.quantidade);
            setTotalCart(tot)
        }

    }

    return <CartContext.Provider
        value={
            {
                cartItems,
                setCartItems,
                AddItemCart,
                RemoveItemCart,
                totalCart

            }}
    >
        {props.children}
    </CartContext.Provider>

}
export { CartContext, CartProvider };