import { useState } from "react";
import './flyout.scss';

function Body({children}){
    return(
        <div className="flyout--body">
            {children}
        </div>
    )
}

function Panel({children, className}){
    return(
        <div className={`flyout--panel ${className ? className : ''}`}>
            {children}
        </div>
    )
}

function Foot({children}){
    return(
        <div className="flyout--foot">
            {children}
        </div>
    )
}

function Flyout({ open, onClick, children }){
    return(
        <div className={`flyout ${(open === "true") ? 'open' : ''}`}>
            <div className="flyout--container">
                <div className="flyout--nav" onClick={onClick}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2803 4.46967C16.5732 4.76256 16.5732 5.23744 16.2803 5.53033L10.0607 11.75L16.2803 17.9697C16.5732 18.2626 16.5732 18.7374 16.2803 19.0303C15.9874 19.3232 15.5126 19.3232 15.2197 19.0303L8.46967 12.2803C8.17678 11.9874 8.17678 11.5126 8.46967 11.2197L15.2197 4.46967C15.5126 4.17678 15.9874 4.17678 16.2803 4.46967Z" fill="#010101"/>
                    </svg>
                    Back
                </div>
                {children}
            </div>
        </div>
    )
}

function Content({children}){
    return(
        <div className="flyout--content">
            {children}
        </div>
    )
}

Flyout.Body = Body;
Flyout.Content = Content;
Flyout.Panel = Panel;
Flyout.Foot = Foot;

export default Flyout;
