import React, { useEffect, useState } from 'react';
import './header.scss';

import Banner from '../banner/'
import Branding from '../branding/'
import Currency from '../currency';
import Nav from '../nav';
import Search from '../search';
import SeaerchOverlay from '../searchOverlay';

export default function Header(){

	const [hamburger, setHamburger] = useState(false);
    const [search, setSearch] = useState(false);
	const [searchOverlay, setSearchOverlay] = useState(false);

	const hamburgerMenu = () => {
		setHamburger(true);
	}

	const closeHamburgerMenu = () => {
		setHamburger(false);
	}

	const searchMobile = () => {
		setSearchOverlay(!searchOverlay);
	}

	const searchMode = (e) => {
		setSearch(e)
	}

    return( 
		<header className={`header ${hamburger ? 'open' : ''}`}>
			<SeaerchOverlay active={searchOverlay} searchMobile={searchMobile} />
			<div className="header--overlay" onClick={closeHamburgerMenu}></div>
			<div className="header--banner">
				<div className="header--bannerContainer">
					<Currency />
					<Banner />
					<div className="header--utilities">
						<div className="header--authentication">
							<a href="http://www.feature.com">Sign In</a>
							<span>/</span>
							<a href="http://www.feature.com">Register</a>
						</div>
						<div className="header--cart">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.50012 8.16016V6.66016C7.50012 5.46669 7.97423 4.3221 8.81814 3.47818C9.66206 2.63427 10.8066 2.16016 12.0001 2.16016V2.16016C13.1936 2.16016 14.3382 2.63427 15.1821 3.47818C16.026 4.3221 16.5001 5.46669 16.5001 6.66016V8.16016M3.75012 8.16016C3.55121 8.16016 3.36044 8.23918 3.21979 8.37983C3.07914 8.52049 3.00012 8.71125 3.00012 8.91016V19.0352C3.00012 20.4527 4.20762 21.6602 5.62512 21.6602H18.3751C19.7926 21.6602 21.0001 20.5113 21.0001 19.0938V8.91016C21.0001 8.71125 20.9211 8.52049 20.7805 8.37983C20.6398 8.23918 20.449 8.16016 20.2501 8.16016H3.75012Z" stroke="#010101" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							0
						</div>
					</div>
				</div>
			</div>
			<div className="header--container">
				<div className="header--branding">
					<div className="header--mobile">
						<button className="header--hamburger" onClick={hamburgerMenu}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4 18V17H20V18H4ZM4 12V11H20V12H4ZM4 5V6H20V5H4Z" fill="#010101"/>
							</svg>
						</button>
						<button className="header--account">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M16.77 8.2211C16.77 9.55302 16.2409 10.8304 15.2991 11.7722C14.3573 12.714 13.0799 13.2431 11.748 13.2431C10.4161 13.2431 9.13872 12.714 8.19691 11.7722C7.2551 10.8304 6.726 9.55302 6.726 8.2211C6.726 6.88918 7.2551 5.61182 8.19691 4.67001C9.13872 3.7282 10.4161 3.1991 11.748 3.1991C13.0799 3.1991 14.3573 3.7282 15.2991 4.67001C16.2409 5.61182 16.77 6.88918 16.77 8.2211ZM14.638 13.7321C15.8701 13.0859 16.8501 12.0453 17.4213 10.7768C17.9926 9.50816 18.1222 8.0847 17.7894 6.7338C17.4566 5.3829 16.6807 4.18251 15.5856 3.32441C14.4904 2.4663 13.1393 2 11.748 2C10.3567 2 9.00558 2.4663 7.91044 3.32441C6.8153 4.18251 6.03937 5.3829 5.7066 6.7338C5.37383 8.0847 5.50342 9.50816 6.07468 10.7768C6.64594 12.0453 7.6259 13.0859 8.858 13.7321C7.14591 14.332 5.66254 15.4491 4.61308 16.9288C3.56362 18.4086 2.99993 20.178 3 21.9921H4.2C4.2 19.9902 4.99523 18.0704 6.41076 16.6549C7.82628 15.2393 9.74615 14.4441 11.748 14.4441C13.7499 14.4441 15.6697 15.2393 17.0852 16.6549C18.5008 18.0704 19.296 19.9902 19.296 21.9921H20.496C20.4961 20.178 19.9324 18.4086 18.8829 16.9288C17.8335 15.4491 16.3501 14.332 14.638 13.7321Z" fill="#010101"/>
							</svg>
						</button>
					</div>
					<Branding />
					<div className="header--mobile">
						<button className="header--search" onClick={ searchMobile }>
							<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M5.42893 14.0792C2.93934 11.5896 2.93934 7.55314 5.42893 5.06354C7.91852 2.57395 11.955 2.57395 14.4445 5.06354C16.9341 7.55314 16.9341 11.5896 14.4445 14.0792C11.955 16.5687 7.91852 16.5687 5.42893 14.0792ZM4.36827 4.00288C1.29289 7.07826 1.29289 12.0644 4.36827 15.1398C7.25273 18.0243 11.8181 18.2033 14.9113 15.677L19.4243 20.19C19.7172 20.4829 20.1921 20.4829 20.485 20.19C20.7779 19.8972 20.7779 19.4223 20.485 19.1294L15.9786 14.623C18.5715 11.529 18.4137 6.91141 15.5052 4.00288C12.4298 0.927504 7.44365 0.927504 4.36827 4.00288Z" fill="#010101"/>
							</svg>
						</button>
						<button className="header--mobiilecart">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.50012 8.16016V6.66016C7.50012 5.46669 7.97423 4.3221 8.81814 3.47818C9.66206 2.63427 10.8066 2.16016 12.0001 2.16016V2.16016C13.1936 2.16016 14.3382 2.63427 15.1821 3.47818C16.026 4.3221 16.5001 5.46669 16.5001 6.66016V8.16016M3.75012 8.16016C3.55121 8.16016 3.36044 8.23918 3.21979 8.37983C3.07914 8.52049 3.00012 8.71125 3.00012 8.91016V19.0352C3.00012 20.4527 4.20762 21.6602 5.62512 21.6602H18.3751C19.7926 21.6602 21.0001 20.5113 21.0001 19.0938V8.91016C21.0001 8.71125 20.9211 8.52049 20.7805 8.37983C20.6398 8.23918 20.449 8.16016 20.2501 8.16016H3.75012Z" stroke="#010101" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							0
						</button>
					</div>
				</div>
				<div className={`header--navigation ${search ? 'search--mode' : ''}`}>
					<Branding />
					<Nav />
					<Search searchMode={searchMode} />
				</div>
			</div>
		</header>
    )
}