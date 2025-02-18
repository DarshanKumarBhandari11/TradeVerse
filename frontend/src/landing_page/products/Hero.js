import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="container border-bottom">
            <div className="text-center mt-5 p-5 mb-5">
                <h1>TradeVerse Products</h1>
                <p className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <Link to="/login">investment offerings <i class='fa fa-long-arrow-right' aria-hidden="true"></i></Link></p>
            </div>
        </div>
    );
}

export default Hero;