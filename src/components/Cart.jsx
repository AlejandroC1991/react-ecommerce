import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import { ContainerCart, TituloCart, CartProduct, Product, ProductDetail, PriceDetail, ProductQuantityContainer, ProductQuantity, PriceProduct, Top, Details, TotalPrice, TituloCartTotal, Subtotal, ContainerSubtotal, ValorSubtotales } from './styleComponents';
import styled from "styled-components";
import { collection, increment, serverTimestamp } from "firebase/firestore";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./utils/firebaseConfig";
import Swal from 'sweetalert2/dist/sweetalert2.all.js'
import { async } from "@firebase/util";
import FormatNumber from "./utils/FormatNumber";

const Boton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
        props.type === "filled" ? "red" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Texto = styled.span`
  margin: 0px 10px;
`;



const Cart = () => {

    const orderCreate = () => {
        const order = {
            buyer: {
                name: "Juan Gomez",
                email: "juangomez@gmail.com",
                phone: "123456789",
            },
            date: serverTimestamp(),
            items: cartBuy.cartList.map(item => ({
                id: item.idItem,
                title: item.nameItem,
                price: item.costItem,
                qty: item.qtyItem
            })),
            total: cartBuy.calculoTotal(),
        }


        const createOrderInFirestone = async () => {
            const newOrder = doc(collection(db, "orders"))
            await setDoc(newOrder, order);
            return newOrder;
        }




        createOrderInFirestone()
            .then(result => {
                Swal.fire('Tu orden con id ' + result.id + " ha sido creada con éxito");
                cartBuy.cartList.forEach(async(item) => {
                    const itemRef = doc(db, "products", item.idItem );

                    
                    await updateDoc(itemRef, {
                        
                        stock: increment(-item.qtyItem)
                    });
                })
                cartBuy.removeList();


            })
            .catch(err => console.log(err))


    }

    const cartBuy = useContext(CartContext);


    return (
        <ContainerCart>
            <TituloCart>YOUR CART</TituloCart>
            <Top>
                <Link to='/'><button className='btn btn-success'>CONTINUE SHOPPING</button></Link>
                {
                    (cartBuy.cartList.length > 0)
                        ? <Boton type="filled" onClick={cartBuy.removeList}>DELETE ALL PRODUCTS</Boton>
                        : <Texto>Your cart is empty</Texto>
                }
            </Top>
            <CartProduct>
                {
                    cartBuy.cartList.length > 0 ?
                        cartBuy.cartList.map(item =>
                            <Product key={item.idItem}>
                                <ProductDetail>
                                    <img style={{ width: "200px" }} src={item.imgItem} />
                                    <Details>
                                        <span>
                                            <b>Product:</b> {item.nameItem}
                                        </span>
                                        <button className='btn btn-danger' style={{ width: "120px" }} type="filled" onClick={() => cartBuy.deleteItem(item.idItem)}>DELETE</button>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductQuantityContainer>
                                        <ProductQuantity>{item.qtyItem} item(s) / </ProductQuantity>
                                        <PriceProduct>$ {item.costItem} each</PriceProduct>
                                    </ProductQuantityContainer>
                                    <TotalPrice> $ {cartBuy.calculoItemsCarritoTotal(item.idItem)} </TotalPrice>
                                </PriceDetail>
                            </Product>
                        )
                        : <TituloCart></TituloCart>
                }
            </CartProduct>
            {
                cartBuy.cartList.length > 0 &&
                <div>
                    <TituloCartTotal>ORDER SUMMARY</TituloCartTotal>
                    <ContainerSubtotal>
                        <Subtotal>Subtotal</Subtotal>
                        <ValorSubtotales>
                            <FormatNumber number={cartBuy.calculoSubTotal()} /></ValorSubtotales>
                    </ContainerSubtotal>

                    <ContainerSubtotal>
                        <div>IVA</div>
                        <ValorSubtotales><FormatNumber style={{ textDecoration: "none", color: "black" }} number={cartBuy.calculoIva()} /></ValorSubtotales>
                    </ContainerSubtotal>

                    <ContainerSubtotal>
                        <div>Shipping</div>
                        <ValorSubtotales><FormatNumber number={-cartBuy.calculoIva()} /></ValorSubtotales>
                    </ContainerSubtotal>

                    <ContainerSubtotal type="total">
                        <div>Total</div>
                        <ValorSubtotales><FormatNumber number={cartBuy.calculoTotal()} /></ValorSubtotales>
                    </ContainerSubtotal>
                    <button onClick={orderCreate}className='btn btn-primary' >CHECKOUT NOW</button>
                </div>
            }
        </ContainerCart>
    );
}

export default Cart;