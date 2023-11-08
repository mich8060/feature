import Flyout from "../../flyout";
import SectionTitle from "../../sectionTitle";

export default function ClothingMenu({open, onClick}){
    return(
        <Flyout open={open} onClick={onClick}>
            <Flyout.Content>
                <Flyout.Body>
                    <>
                    <SectionTitle title="Categories" more="true" />
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">Button Ups</a>
                            <a href="https://www.feature.com">Cardigans</a>
                            <a href="https://www.feature.com">Denim</a>
                            <a href="https://www.feature.com">Hoodies</a>
                            <a href="https://www.feature.com">Jackets</a>
                            <a href="https://www.feature.com">Jerseys</a>
                            <a href="https://www.feature.com">Knitwear</a>
                            <a href="https://www.feature.com">Kids</a>
                        </div>
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">Matching Sets</a>
                            <a href="https://www.feature.com">Pants</a>
                            <a href="https://www.feature.com">Polos</a>
                            <a href="https://www.feature.com">Shorts</a>
                            <a href="https://www.feature.com">Sweatshirts</a>
                            <a href="https://www.feature.com">Sweatpants</a>
                            <a href="https://www.feature.com">T-Shirts</a>
                            <a href="https://www.feature.com">Women</a>
                        </div>
                    </>
                </Flyout.Body>
                <Flyout.Panel>
                    <>
                        <SectionTitle title="Featured Brands" more="false" />
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">Acne Studios</a>
                            <a href="https://www.feature.com">Feature</a>
                            <a href="https://www.feature.com">Honor the Gift</a>
                            <a href="https://www.feature.com">Icecream</a>
                            <a href="https://www.feature.com">New Era</a>
                            <a href="https://www.feature.com">Palm Angels</a>
                            <a href="https://www.feature.com">Rhude</a>
                            <a href="https://www.feature.com">Stussy</a>
                        </div>
                    </>
                </Flyout.Panel>
            </Flyout.Content>
        </Flyout>
    )
}