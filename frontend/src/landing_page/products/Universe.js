import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1 className='mt-5'>The TradeVerse Universe</h1>
                <p className='mt-2'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-5">
                    <Link to="https://www.smallcase.com/"><img src="media/images/smallcaselogo.png" /></Link>
                    <p className='text-muted'>Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <Link to="https://www.streak.tech/home"><img src="media/images/streakLogo.png" style={{ width: "37%" }} /></Link>
                    <p className='text-muted'>Systematic trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <Link to="https://sensibull.com/"><img src="media/images/sensibullLogo.svg" style={{ width: "45%" }} /></Link>
                    <p className='text-muted mt-3'>Options trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <Link to="https://www.zerodhafundhouse.com/"><img src="media/images/zerodhaFundhouse.png" style={{ width: "42%" }} /></Link>
                    <p className='text-muted mt-1'>Asset management venture</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <Link to="https://goldenpi.com/"><img src="media/images/goldenpiLogo.png" style={{ width: "42%" }} /></Link>
                    <p className='text-muted mt-1'>Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <Link to="https://joinditto.in/"><img src="media/images/dittoLogo.png" style={{ width: "28%" }} /></Link>
                    <p className='text-muted mt-2'>Life and health insurance</p>
                </div>
                <Link to="/signup" className='p-2 btn btn-primary fs-6 mb-5 mt-4' style={{ width: "20%", margin: "0 auto" }}>Sign up for free</Link>
            </div>
        </div>
    );
}

export default Universe;