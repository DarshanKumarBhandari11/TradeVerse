import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='border-top mt-5 pb-3' style={{ backgroundColor: "rgb(250, 250, 250)" }}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <Link to="/"><img className='mb-3' src="media/images/tradeVerseLogo.png" style={{ width: "25%" }} alt="Logo" /></Link>
                        <p className='text-muted' style={{ fontSize: "14px" }}>&copy; 2010 - 2025, TradeVerse Broking Ltd.<br />All rights reserved.</p>
                    </div>
                    <div className="col">
                        <h5>Company</h5>
                        <Link to="/about" className='text-muted fw-medium'>About</Link><br />
                        <Link to="/products" className='text-muted fw-medium'>Products</Link><br />
                        <Link to="/pricing" className='text-muted fw-medium'>Pricing</Link><br />
                        <Link to="/careers" className='text-muted fw-medium'>Careers</Link><br />
                        <Link to="/blog" className='text-muted fw-medium'>TradeVerse.tech</Link><br />
                    </div>
                    <div className="col">
                        <h5>Support</h5>
                        <Link to="/support" className='text-muted fw-medium'>Contact us</Link><br />
                        <Link to="/support" className='text-muted fw-medium'>Support portal</Link><br />
                        <Link to="/blog" className='text-muted fw-medium'>TV-Connect blog</Link><br />
                        <Link to="/pricing" className='text-muted fw-medium'>List of charges</Link><br />
                        <Link to="/products" className='text-muted fw-medium'>Downloads & resources</Link><br />
                    </div>
                    <div className="col">
                        <h5>Account</h5>
                        <Link to="/signup" className='text-muted fw-medium'>Open an account</Link><br />
                        <Link to="/login" className='text-muted fw-medium'>Fund transfer</Link><br />
                        <Link to="/challenge" className='text-muted fw-medium'>60 day challenge</Link><br />
                    </div>
                </div>
                <div className="row mt-5 text-muted" style={{ fontSize: "12px" }}>
                    <p>TradeVerse Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through TradeVerse Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through TradeVerse Commodities Pvt. Ltd. MCX: 46025; NSE-50001 - SEBI Registration no.: INZ000038238 Registered Address: TradeVerse Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@tradeverse.com, for DP related to dp@tradeverse.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of TradeVerse and offering such services, please <Link to="/support"><b>create a ticket here</b></Link>.</p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;