import React from 'react';
import { Link } from 'react-router-dom';
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
    return (
        <>
            <Hero />
            <LeftSection imageURL="media/images/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="/signup" learnMore="/signup" googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN" appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802" />

            <RightSection imageURL="media/images/console.png" productName="Console" productDescription="The central dashboard for your TradeVerse account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="/signup" />

            <LeftSection imageURL="media/images/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="/signup" learnMore="/signup" googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin&hl=en_IN" appStore="https://apps.apple.com/in/app/zerodha-coin-mutual-funds/id1392892554" />

            <RightSection imageURL="media/images/kiteconnect.png" productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="/signup" />

            <LeftSection imageURL="media/images/varsity.png" productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="/signup" learnMore="/signup" googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity&hl=en_IN" appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753" />
            <p className='text-center mt-5 fs-5'>Want to know more about our technology stack? Check out the <Link to="/blog">TradeVerse.tech</Link> blog.</p>
            <Universe />
        </>
    );
}

export default ProductsPage;