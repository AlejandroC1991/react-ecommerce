import styled from "styled-components";

const ContainerCart = styled.div`
    padding: 20px;
`;

const TituloCart = styled.div`
    font-weight: 300;
    text-align: center;
`;
const CartProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;
const Product = styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ProductQuantityContainer = styled.div`
display: flex;
align-items: center;
margin: 20px;
`;
const ProductQuantity = styled.div`
font-size: 24px;
margin: 5px;
`;
const PriceProduct = styled.div`
font-size: 30px;
font-weight: 200;
`;

const Top = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const TotalPrice = styled.div`
font-size: 30px;
font-weight: 200;
`;

const TituloCartTotal = styled.div`
font-size: 30px;
font-weight: bolder;
`;

const Subtotal = styled.div`
font-size: 30px;
width: 30%;
`;

const ContainerSubtotal = styled.div`
font-size: 20px;
width: 30%;
`;

const ValorSubtotales = styled.div`
font-size: 20px;
width: 30%;
`;

export {
    ContainerCart, TituloCart, CartProduct, Product, ProductDetail, PriceDetail, ProductQuantityContainer, ProductQuantity, PriceProduct, Top, Details, TotalPrice, TituloCartTotal, Subtotal, ContainerSubtotal,ValorSubtotales
}