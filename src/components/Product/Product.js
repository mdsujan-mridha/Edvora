import React from 'react';
import "./Product.css";
import{MdOutlinePriceChange } from "react-icons/md";
import { AiOutlineShoppingCart} from "react-icons/ai"

const Product = ({ product }) => {
    const { name, selling_price, stock } = product;

    return (
        <section>
            <div className="card-container">
                <div className="card-area">
                    <h1> {name} </h1>
                    <div className="card-content">
                        <p> selling price <MdOutlinePriceChange className='fs-5'/> : <span className='price'> {selling_price} </span> </p>
                        <p>Stock: <span className='stock'>{stock}</span> </p>
                    </div>
                    <button className='btn btn-primary d-flex align-items-center justify-content-center gap-2'>BUY NOW ! <AiOutlineShoppingCart className='fs-4'/> </button>
                </div>
            </div>
        </section>
    );
};

export default Product;