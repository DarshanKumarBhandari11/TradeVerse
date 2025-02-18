import React from 'react';
import { Link } from 'react-router-dom';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imageURL} />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p className='mt-3 pe-5' style={{ lineHeight: "2em" }}>{productDescription}</p>
                    <div className='mt-5'>
                        <Link to={tryDemo}>Try demo <i class='fa fa-long-arrow-right' aria-hidden="true"></i></Link>
                        <Link to={learnMore} style={{ marginLeft: "50px" }}>Learn more <i class='fa fa-long-arrow-right' aria-hidden="true"></i></Link>
                    </div>
                    <div className='mt-4'>
                        <Link to={googlePlay}><img src="media/images/googlePlayBadge.svg" /></Link>
                        <Link to={appStore} style={{ marginLeft: "20px" }}><img src="media/images/appstoreBadge.svg" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;