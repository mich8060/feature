import Flyout from "../../flyout";
import BrandTiles from '../../brandTiles';
import SectionTitle from "../../sectionTitle";

export default function LatestMenu({open, onClick}){
    return(
        <Flyout open={open} onClick={onClick}>
            <Flyout.Content>
                <Flyout.Body>
                    <>
                        <SectionTitle title="New Arrivals" more="true" />
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">Advisory Board Crystals</a>
                            <a href="https://www.feature.com">Awake NY</a>
                            <a href="https://www.feature.com">Carhartt WIP</a>
                            <a href="https://www.feature.com">Fear of God Essentials</a>
                            <a href="https://www.feature.com">Golden Goose</a>
                            <a href="https://www.feature.com">Neighborhood</a>
                            <a href="https://www.feature.com">Saint Michael</a>
                        </div>
                        <div className="flyout--brands">
                            <BrandTiles title="Stussy" image="https://feature.com/cdn/shop/files/Stussy.jpg?v=1698247316&width=640" />
                            <BrandTiles title="Billionaire Boys Club" image="https://feature.com/cdn/shop/collections/billionaire-boys-club.jpg?v=1698518885&width=640" />
                            <BrandTiles title="Fear Of God Essentials" image="https://feature.com/cdn/shop/collections/fear-of-god-essentials.jpg?v=1698968584&width=640" />
                            <BrandTiles title="Honor the Gift" image="https://feature.com/cdn/shop/collections/honor-the-gift.jpg?v=1698968646&width=640" />
                        </div>
                    </>
                </Flyout.Body>
                <Flyout.Panel>
                    <>
                        <SectionTitle title="Featured Brands" more="false" />
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">Adidas x Wales Booner Samba</a>
                            <a href="https://www.feature.com">Air Jordan 3 “Hide and Sneak”</a>
                            <a href="https://www.feature.com">Feature Hockney Cargo Shorts</a>
                            <a href="https://www.feature.com">Feature x Jungles</a>
                            <a href="https://www.feature.com">Nike Air Max 1 ‘Michigan’</a>
                            <a href="https://www.feature.com">Nike Dunk High ‘Panda’</a>
                            <a href="https://www.feature.com">Nike Air Force 1 ‘West Coast’</a>
                        </div>
                    </>
                </Flyout.Panel>
            </Flyout.Content>
        </Flyout>
    )
}