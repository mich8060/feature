import './app.scss';

import Buybox from './components/buybox';
import Gallery from './components/gallery';
import Stock from './components/stock';
import Tabs from './components/tabs';
import Vendors from './components/vendors';

function App() {
	return (
		<div className="app">
			<header className='header'>
				<div className="header--banner">
					<div className="header--bannerContainer">
						Feature X New Era 'Bamboo' - Available Now
					</div>
				</div>
				<div className="header--container">
					<div className="header--branding">
						<svg width="200" height="28" viewBox="0 0 200 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M57.7778 27.7856L66.9231 0.214355H71.3675L80.7692 27.7856H75.7265L73.9316 22.1168H64.5299L62.735 27.7856H57.7778ZM69.0598 7.17159L65.812 17.8222H72.4786L69.0598 7.17159ZM0 27.7856H4.78632V16.6197H15.8974V12.2392H4.78632V4.85251H17.6923V0.472032H0V27.7856ZM35.2137 16.1043H46.4957V11.8097H35.2137V4.76662H48.2051V0.472032H30.4273V27.7856H48.4615V23.491H35.2137V16.1043ZM86.4103 4.93841H94.0171V27.7856H98.8034V4.93841H106.41V0.472032H86.4103V4.93841ZM127.179 23.4051C130.769 23.4051 132.735 21.8591 132.735 19.6259V0.472032H137.521V19.3682C137.521 23.9205 134.273 27.7856 127.094 27.7856C120 27.7856 116.838 24.0064 116.838 19.6259V0.472032H121.624V19.3682C121.624 22.1168 123.59 23.4051 127.179 23.4051ZM170.513 8.80354C170.513 3.47825 168.291 0.472032 163.419 0.472032H149.744V27.7856H154.53V16.7915H161.709L165.385 27.7856H170.427L166.41 16.1902C168.803 15.2454 170.513 12.8405 170.513 8.80354ZM154.615 5.0243H162.393C164.273 5.0243 165.556 5.88322 165.556 8.63175C165.556 11.3803 164.615 12.2392 162.222 12.2392H154.615V5.0243ZM186.581 16.1043V23.491H200V27.7856H181.795V0.472032H199.829V4.76662H186.581V11.8097H198.034V16.1043H186.581Z" fill="#010101"/>
						</svg>
					</div>
					<nav className="nav">
						<a href="https://www.feature.com">Latest</a>
						<a href="https://www.feature.com">Releases</a>
						<a href="https://www.feature.com">Brands</a>
						<a href="https://www.feature.com">Clothing</a>
						<a href="https://www.feature.com">Footwear</a>
						<a href="https://www.feature.com">Accessories</a>
						<a href="https://www.feature.com">Lifestyle</a>
						<a href="https://www.feature.com">News</a>
						<a href="https://www.feature.com">Sale</a>
					</nav>
				</div>
			</header>
			<main className="main">
				<div className="main--container">
					<Gallery />
					<div className="panel">
						<div className="info">
							<div className="info--brand">JORDAN</div>
							<div className="info--title">Air Jordan 1 Retro High OG Skyline - Vivid Orange/Black/Iced Lilac</div>
							<div className="info--price">$180.00</div>
						</div>
						<Vendors />
						<Buybox />
						<Stock />
						<Tabs.Body>
							<Tabs.Panel>
								<div style={{color:'#4C5564',fontSize:16,lineHeight:'24px'}}>
									<p>
										Inspired by the ‘skyline’ shown in the iconic ‘Jumpman’ imagery of a young Michael Jordan, Air Jordan introduces the Air Jordan 1 Retro High OG ‘Skyline.’ The Chicago skyline and sky at dusk are recreated through gradient hues in pink and lavender at the upper, constructed within textile overlays. The leather upper makes a contrasting statement, while accents can be found at the high-cut collar, interior lining, and Swoosh. Perforated detailing can be found at the toe box. A nylon tongue is placed, while a woven label is placed upon it. The signature encapsulated Air-sole cushioning supported by a rubber outsole finishes the rest of the look.
									</p>
									<strong style={{color:'black',fontWeight:500}}>Due to the limited nature of this product, all sales are final. This item is not eligible for discounts or special promotions</strong>
									<ul className="tabs--checklist">
										<li>Leather upper</li>
										<li>Textile overlays</li>
										<li>Gradient detailing</li>
										<li>Jordan branding</li>
										<li>Nylon tongue</li>
										<li>Woven tongue label</li>
										<li>Rubber outsole</li>
										<li>Style No: DX0054-805</li>
										<li>Encapsulated Air-sole cushioning</li>
										<li>All sizes are listed in U.S. Men’s sizing unless stated otherwise</li>
									</ul>
								</div>
							</Tabs.Panel>
							<Tabs.Panel>
								<div style={{color:'#4C5564',fontSize:16,lineHeight:'24px'}}>
									<p>Your order will be processed within 24-48 hours and can NOT be canceled once processing is complete. A tracking ID will be sent to the email address provided at checkout as soon as your order has shipped. Shipping times vary based on location and may be changed with the third-party delivery’s discretion.</p>
									<p>
										Ground Shipping: 5-7 Business Days<br />
										Two-Day Shipping: 2 Business Days<br />
										Next Day Shipping 1 Business Day
									</p>
									<p>
										International Standard Shipping: 2-6 Business Days<br />
										International Expedited Shipping: 1-4 Business Days
									</p>
									<p>International Buyers: Taxes and duty fees are calculated based on the shipping address you provided at checkout. Please provide your location to review the additional costs and ensure the correct amount is being generated. Based on the Delivery Duty Paid process for shipping, all relevant taxes and duties are automatically included in the final sales price.</p>
									<p>Click here to understand better the rules and regulations for ensuring overnight/next-day delivery.</p>
									<p>Please note that we reserve the right to combine orders being delivered to the same delivery address when applicable. If you prefer your orders not to be shipped together, please reach out to our customer service team after checkout. - The ‘Order within’ statement is only valid when next-day shipping is selected as the shipping method.</p>
								</div>
							</Tabs.Panel>
							<Tabs.Panel>
								<div style={{color:'#4C5564',fontSize:16,lineHeight:'24px'}}>
									<p>Please visit our Returns page at the bottom of our website to process a return. You will enter the email address associated with your order and begin receiving instructions on starting your return.</p>
									<p>We will only accept items within 14 days from the delivery of the product. Final sale items such as sale/clearance items and limited releases are not eligible for returns. If you are unsure whether an item(s) you purchased is eligible, please refer to that specific item’s product description.</p>
									<p>The returned product must be unused, and packaging must remain intact and undisturbed by external forces. Do not directly apply shipping labels to shoe boxes, as it ruins the product’s integrity. If a shipping label is attached to a shoebox, the item will be obstructed and returned to the sender.</p>
									<p>After the return process is completed, the customer will be given a store credit that equals the cost of the item(s) returned. This store credit is valid in-store & online. Shipping labels are generated upon request.</p>
								</div>
							</Tabs.Panel>
						</Tabs.Body>
					</div>
				</div>
			</main>

		</div>
	);
}

export default App;
