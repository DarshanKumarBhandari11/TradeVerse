import React from 'react';
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAcccount from "../OpenAccount";

function PricingPage() {
    return (
        <>
            <Hero />
            <OpenAcccount />
            <Brokerage />
        </>
    );
}

export default PricingPage;