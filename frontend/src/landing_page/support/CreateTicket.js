import React from 'react';
import { Link } from 'react-router-dom';

function CreateTicket() {
    return (
        <div className="container mt-5 p-5">
            <p className='fs-4 text-muted'>To create a ticket, select a relevant topic</p>
            <div className="row">
                <div className="col-4 mt-4 mb-3">
                    <p className='fs-5'><i class="fa fa-plus-circle" aria-hidden="true" ></i> Account Opening</p>
                    <Link to="/signup" style={{ lineHeight: "2.2" }}>Getting started</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Online</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Offline</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Charges</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Company, Partnership and HUF</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Non Resident Indian (NRI)</Link><br />
                </div>
                <div className="col-4 mt-4 mb-3">
                    <p className='fs-5'><i class="fa fa-user-o" aria-hidden="true" ></i> Your TradeVerse Account</p>
                    <Link to="" style={{ lineHeight: "2.2" }}>Login credentials</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Your Profile</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Account modification and segment addition</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>CMR & DP ID</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Nomination</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Transfer and conversion of shares</Link><br />
                </div>
                <div className="col-4 mt-4 mb-3">
                    <p className='fs-5'><i class="fa fa-bar-chart" aria-hidden="true" ></i> Trading and Markets</p>
                    <Link to="" style={{ lineHeight: "2.2" }}>Trading FAQs</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Kite</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Margins</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Product and order types</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Corporate actions</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Kite features</Link><br />
                </div>
                <div className="col-4 mt-4 mb-3">
                    <p className='fs-5'><i class="fa fa-university" aria-hidden="true" ></i> Funds</p>
                    <Link to="" style={{ lineHeight: "2.2" }}>Fund withdrawal</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Adding funds</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Adding bank accounts</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>eMandates</Link><br />
                </div>
                <div className="col-4 mt-4 mb-3">
                    <p className='fs-5'><i class="fa fa-cog" aria-hidden="true" ></i> Console</p>
                    <Link to="" style={{ lineHeight: "2.2" }}>IPO</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Portfolio</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Funds statement</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Profile</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Reports</Link><br />
                    <Link to="" style={{ lineHeight: "2.2" }}>Referral program</Link><br />
                </div>
                <div className="col-4 mt-4 mb-3">
                    <p className='fs-5'><i class="fa fa-dot-circle-o" aria-hidden="true" ></i> Coin</p>
                    <Link href="" style={{ lineHeight: "2.2" }}>Understanding mutual funds and Coin</Link><br />
                    <Link href="" style={{ lineHeight: "2.2" }}>Coin app</Link><br />
                    <Link href="" style={{ lineHeight: "2.2" }}>Coin web</Link><br />
                    <Link href="" style={{ lineHeight: "2.2" }}>Transactions and reports</Link><br />
                    <Link href="" style={{ lineHeight: "2.2" }}>National Pension Scheme (NPS)</Link><br />
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;