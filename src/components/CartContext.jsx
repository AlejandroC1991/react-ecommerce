import { createContext, useState } from "react";


export const CartContext = createContext();


const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image,
                    nameItem: item.title,
                    costItem: item.precio,
                    qtyItem: qty
                }
            ]);
        } else {
            
            found.qtyItem += qty;
        }
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }




    const calculoItemsCarritoTotal = (idItem) => {
        if (cartList.length === 0 ) {
            return 
        }
       
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calculoSubTotal = () => {
        let totalPerItem = cartList.map(item => calculoItemsCarritoTotal(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calculoIva = () => {
        return calculoSubTotal() * 0.21;
    }

    const calculoTotal = () => {
        return calculoSubTotal();
    }

    const calculoItemsQuantity = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }





    return (
        <CartContext.Provider value={{ cartList, addToCart, removeList, deleteItem,calculoItemsCarritoTotal,calculoSubTotal,calculoIva,calculoItemsQuantity,calculoTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;