import React from 'react';
import UseProducts from '../customHooks/UserProducts';
import Product from '../Product/Product';
import { Link } from "react-router-dom";
import Banner from '../Banner/Banner';

const Home = () => {
    const [products, setProducts] = UseProducts();

    const splice = products.slice(products, 8);
    return (
        <>
             <Banner />
            <div className='container mt-5'>
           
                <h1 className='text-center fs-2 p-2'> Our Products </h1>
                <div className='d-flex flex-wrap gap-4'>
                    {
                        splice.map(product => <Product
                            key={product.product_id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <Link className='btn btn-secondary' to="/products">   Load All Products </Link>

                </div>
            </div>
        </>
    );
};

export default Home;