import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" style={{ width: "70%" }} alt="VarsityImage" />
                </div>
                <div className="col-6 mt-5">
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>

                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <Link to="/products">Varsity <i class='fa fa-long-arrow-right' aria-hidden="true"></i></Link>

                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <Link to="/support">TradingQ&A <i class='fa fa-long-arrow-right' aria-hidden="true"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default Education;