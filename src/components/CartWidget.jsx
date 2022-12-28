import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const CartWidget = () => {
    const cartBuy = useContext(CartContext);

    return (
        <Badge badgeContent={cartBuy.calculoItemsQuantity()} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;