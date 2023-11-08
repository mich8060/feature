import Flyout from "../../flyout";
import SectionTitle from "../../sectionTitle";

export default function AccessoriesMenu({open, onClick}){
    return(
        <Flyout open={open} onClick={onClick}>
            <Flyout.Content>
                <Flyout.Body>
                    <>
                        <SectionTitle title="Categories" more="true" />
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">Backpacks</a>
                            <a href="https://www.feature.com">Bags</a>
                            <a href="https://www.feature.com">Belts</a>
                            <a href="https://www.feature.com">Eyewear</a>
                            <a href="https://www.feature.com">Fragrances</a>
                            <a href="https://www.feature.com">Headwear</a>
                            <a href="https://www.feature.com">Jewelry</a>
                            <a href="https://www.feature.com">Skin Care</a>
                        </div>
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">Socks</a>
                            <a href="https://www.feature.com">Wallets</a>
                            <a href="https://www.feature.com">Watches</a>
                        </div>
                    </>
                </Flyout.Body>
                <Flyout.Panel>
                    <>
                        <SectionTitle title="Featured Brands" more="false" />
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">1017 ALyx 95M</a>
                            <a href="https://www.feature.com">Akila</a>
                            <a href="https://www.feature.com">Ambush</a>
                            <a href="https://www.feature.com">Brain Dead</a>
                            <a href="https://www.feature.com">Comme des Garcons</a>
                            <a href="https://www.feature.com">Feature</a>
                            <a href="https://www.feature.com">Gallery Dept.</a>
                            <a href="https://www.feature.com">G-Shock</a>
                        </div>
                    </>
                </Flyout.Panel>
            </Flyout.Content>
        </Flyout>
    )
}