import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';


const ProductDetails = () => {
    let { productKey } = useParams();
    const product=fakeData.find((productItem)=>productItem.key===productKey)
    return (
        <div>
            <h1>This is Product Details {productKey} </h1>
            <Product showAddToCartButton={false} product={product} ></Product>
        </div>
    );
};

export default ProductDetails;