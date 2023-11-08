import Flyout from "../../flyout";
import SectionTitle from "../../sectionTitle";

export default function SaleMenu({open, onClick}){
    return(
        <Flyout open={open} onClick={onClick}>
            <Flyout.Content>
                <Flyout.Body>
                    <div className="flyout--menu">
                        <div className="flyout--subtitle"><a href="https://feature.com/collections/sale-items?filters=CATEGORY,Clothing">Clothing</a></div>
                        <a href="https://www.feature.com">Advisory Board Crystals</a>
                        <a href="https://www.feature.com">Brain Dead</a>
                        <a href="https://www.feature.com">Comme Des Garcons Play</a>
                        <a href="https://www.feature.com">Icecream</a>
                        <a href="https://www.feature.com">Jordan</a>
                        <a href="https://www.feature.com">Pleasures</a>
                        <a href="https://www.feature.com">Saint Michael</a>
                        <a href="https://www.feature.com">Stone Island</a>
                    </div>
                    <div className="flyout--menu">
                        <div className="flyout--subtitle"><a href="https://feature.com/collections/sale-items?filters=CATEGORY,Footwear">Footwear</a></div>
                        <a href="https://www.feature.com">Adidas Originals</a>
                        <a href="https://www.feature.com">Birkenstock</a>
                        <a href="https://www.feature.com">Converse</a>
                        <a href="https://www.feature.com">Lanvin</a>
                        <a href="https://www.feature.com">New Balance</a>
                        <a href="https://www.feature.com">Nike</a>
                        <a href="https://www.feature.com">Puma</a>
                        <a href="https://www.feature.com">Vans Vault</a>
                    </div>
                    <div className="flyout--menu">
                        <div className="flyout--subtitle"><a href="https://feature.com/collections/sale-items?filters=CATEGORY,Accessories">Accessories</a></div>
                        <a href="https://www.feature.com">1017 Alyx 95M</a>
                        <a href="https://www.feature.com">Ambush</a>
                        <a href="https://www.feature.com">Herschel Supply</a>
                        <a href="https://www.feature.com">New Era</a>
                        <a href="https://www.feature.com">Off-White c/o Virgil Abloh</a>
                        <a href="https://www.feature.com">Paper Planes</a>
                        <a href="https://www.feature.com">Retrosuperfuture</a>
                        <a href="https://www.feature.com">Rhude</a>
                    </div>
                    <div className="flyout--menu">
                        <div className="flyout--subtitle"><a href="https://feature.com/collections/sale-items?filters=CATEGORY,Lifestyle">Lifestyle</a></div>
                        <a href="https://www.feature.com">Billionaire Boys Club</a>
                        <a href="https://www.feature.com">Medicom Toy</a>
                    </div>
                </Flyout.Body>
            </Flyout.Content>
                <Flyout.Foot>
                        <span>SHOP BY DISCOUNT</span>
                        <a href="https://www.feature.com">30%</a>
                        <a href="https://www.feature.com">50%</a>
                        <a href="https://www.feature.com">60%</a>
                        <a href="https://www.feature.com">70%</a>
                        <span className="flyout--divider"></span>
                        <a href="https://www.feature.com" className="flyout--all">
                            <span>See all</span>
                            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.82845 5L0.675207 9.15323L1.5 9.97803L6.47803 5L1.5 0.0219641L0.675206 0.846757L4.82845 5Z" fill="#010101"/>
                            </svg>
                        </a>
                </Flyout.Foot>
        </Flyout>
    )
}