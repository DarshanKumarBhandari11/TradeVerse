import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a TradeVerse account</h1>
                <p className='mt-2'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to="/signup" className='p-2 btn btn-primary fs-6 mb-5 mt-4' style={{ width: "20%", margin: "0 auto" }}>Sign up for free</Link>
            </div>
        </div>
    );
}

export default OpenAccount;