import React from 'react';
import UseProducts from '../customHooks/UserProducts';
import Product from '../Product/Product';

const Products = () => {
    const[products,setProducts] = UseProducts();
      
    return (
        <section>
            <div className="container mt-5">
                
                 <div className='d-flex flex-wrap gap-4'>
                    {
                        products?.map(product=> <Product
                        key={product.product_id}
                        product={product}
                        ></Product>)
                    }
                 </div>
            </div>
        </section>
    );
};

export default Products;