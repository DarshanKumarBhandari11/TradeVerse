import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 border-top">
                <h1 className='text-center mt-4'>People</h1>
            </div>
            <div className="row p-5 text-muted" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
                <div className="col-6 p-5 text-center">
                    <img src="media/images/DarshanBhandari.jpg" style={{ borderRadius: "100%", width: "55%" }} alt="FounderImage" />
                    <h4 className='mt-4'>Darshan Kumar Bhandari</h4>
                    <p className='fs-6'>Founder & CTO</p>
                </div>
                <div className="col-6 p-5">
                    <p>Darshan bootstrapped and founded TradeVerse in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, TradeVerse has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Hitting gym is his zen.</p>
                    <p>Connect on <Link to="/support"><b>TradingQnA</b></Link> / <a href="https://www.linkedin.com/in/darshankumarbhandari11"><b>LinkedIn</b></a></p>
                </div>
            </div>
        </div >
    );
}

export default Team;