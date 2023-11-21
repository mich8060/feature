import React from 'react';
import { Link } from 'react-router-dom';

import "./home.scss";

export default function PageHome() {
    return(
        <div className="page--home">
            <svg width="200" height="28" viewBox="0 0 200 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M57.7778 27.7856L66.9231 0.214355H71.3675L80.7692 27.7856H75.7265L73.9316 22.1168H64.5299L62.735 27.7856H57.7778ZM69.0598 7.17159L65.812 17.8222H72.4786L69.0598 7.17159ZM0 27.7856H4.78632V16.6197H15.8974V12.2392H4.78632V4.85251H17.6923V0.472032H0V27.7856ZM35.2137 16.1043H46.4957V11.8097H35.2137V4.76662H48.2051V0.472032H30.4273V27.7856H48.4615V23.491H35.2137V16.1043ZM86.4103 4.93841H94.0171V27.7856H98.8034V4.93841H106.41V0.472032H86.4103V4.93841ZM127.179 23.4051C130.769 23.4051 132.735 21.8591 132.735 19.6259V0.472032H137.521V19.3682C137.521 23.9205 134.273 27.7856 127.094 27.7856C120 27.7856 116.838 24.0064 116.838 19.6259V0.472032H121.624V19.3682C121.624 22.1168 123.59 23.4051 127.179 23.4051ZM170.513 8.80354C170.513 3.47825 168.291 0.472032 163.419 0.472032H149.744V27.7856H154.53V16.7915H161.709L165.385 27.7856H170.427L166.41 16.1902C168.803 15.2454 170.513 12.8405 170.513 8.80354ZM154.615 5.0243H162.393C164.273 5.0243 165.556 5.88322 165.556 8.63175C165.556 11.3803 164.615 12.2392 162.222 12.2392H154.615V5.0243ZM186.581 16.1043V23.491H200V27.7856H181.795V0.472032H199.829V4.76662H186.581V11.8097H198.034V16.1043H186.581Z" fill="#010101"/>
            </svg>
            <div className="page--home_menu">
                <h4>Blocks</h4>
                <Link to="/header">Header</Link>
                <Link to="/raffleHero">Raffle Hero</Link>
                <h4>Components</h4>
                <Link to="/breadcrumb">Breadcrumb</Link>
                <h4>Elements</h4>
                <h4>Pages</h4>
                <Link to="/catalog">Catalog Page</Link>
                <Link to="/PDP">Product Detail Page</Link>
            </div>
        </div>
    );
}