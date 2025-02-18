import React from 'react';
import { Link } from 'react-router-dom';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p className='pe-5 mt-3 mb-5' style={{ lineHeight: "2em" }}>{productDescription}</p>
                    <Link to={learnMore}>Learn more <i class='fa fa-long-arrow-right' aria-hidden="true"></i></Link>
                </div>
                <div className="col-6 p-5">
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;