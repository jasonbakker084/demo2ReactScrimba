import React from 'react'
import vschoolProduct from "./vschoolProduct"

function Product(props) {
    // const productList = vschoolProduct.map(products => <)
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
        </div>
    )
}

export default Product;