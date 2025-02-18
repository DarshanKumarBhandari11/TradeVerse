import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="container-fluid pb-5" id='supportHero'>
            <div className="p-5" id='supportWrapper'>
                <h4>Support Portal</h4>
                <Link to="/login">Track tickets</Link>
            </div>
            <div className="row" style={{ margin: "0 85px" }}>
                <div className="col-6 p-5">
                    <p className='fs-4'>Search for an answer or browse help topics to create a ticket</p>
                    <input placeholder="Eg: how do i activate F&O, why is my order getting rejected..." /><br />
                    <Link to="/login" style={{ marginRight: "20px" }} href="">Track account opening</Link>
                    <Link to="/login" style={{ marginRight: "20px" }} href="">Track segment activation</Link>
                    <Link to="/margins" style={{ marginRight: "20px" }} href="">Intraday margins</Link><br />
                    <Link to="/user-manual" style={{ marginRight: "20px" }} href="">Kite user manual</Link>
                </div>
                <div className="col-6 p-5">
                    <p className='fs-4 fw-medium'>Featured</p>
                    <ol style={{ lineHeight: "2.5" }}>
                        <li><Link to="https://zerodha.com/marketintel/bulletin/404944/revision-in-expiry-dates-of-copper-and-zinc-march-2025-options-contracts" href="">Revision in expiry dates of Copper and Zinc March 2025 options contracts</Link></li>
                        <li><Link to="https://zerodha.com/marketintel/bulletin/371412/adjustment-of-fo-contracts-of-heromotoco-due-to-dividend" href="">Adjustment of F&O contracts of HEROMOTOCO due to dividend</Link></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;