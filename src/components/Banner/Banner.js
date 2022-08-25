import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <section className='banner'>
            <div className="content">
                <h1> Select Your New <br/> perfect style </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Aut corporis accusamus nulla libero similique doloremque pariatur laborum reprehenderit fugit corrupti!</p>
                <button className='btn btn-secondary'>BUY NOW !</button>
            </div>
        </section>
    );
};

export default Banner;