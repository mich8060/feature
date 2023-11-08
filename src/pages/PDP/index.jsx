import React from 'react';

import Buybox from '../../components/buybox';
import Gallery from '../../components/gallery';
import Header from '../../components/header';
import Stock from '../../components/stock';
import Tabs from '../../components/tabs';
import Vendors from '../../components/vendors';

export default function PDP() {
    return(
        <>
			<Header />
			<div className="app--header">
			</div>
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
		</>
    );
}

