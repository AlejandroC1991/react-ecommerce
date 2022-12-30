import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const CartWidget = () => {
    const {calculoItemsQuantity} = useContext(CartContext);

    return (
        <Badge badgeContent={calculoItemsQuantity()} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;