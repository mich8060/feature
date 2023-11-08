import Flyout from "../../flyout";
import SectionTitle from "../../sectionTitle";

export default function FootwearMenu({open, onClick}){
    return(
        <Flyout open={open} onClick={onClick}>
            <Flyout.Content>
                <Flyout.Body>
                    <SectionTitle title="Categories" more="true" />
                    <div className="flyout--menu">
                        <a href="https://www.feature.com">Boots</a>
                        <a href="https://www.feature.com">Designer</a>
                        <a href="https://www.feature.com">Sneakers</a>
                        <a href="https://www.feature.com">Slippers</a>
                        <a href="https://www.feature.com">Sandals</a>
                        <a href="https://www.feature.com">Women</a>
                    </div>
                </Flyout.Body>
                <Flyout.Panel className="extended">
                    <>
                        <SectionTitle title="Featured Brands" more="false" />
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">Adidas Originals</a>
                            <a href="https://www.feature.com">Asics</a>
                            <a href="https://www.feature.com">Birkenstock</a>
                            <a href="https://www.feature.com">Clarks</a>
                            <a href="https://www.feature.com">Common Projects</a>
                            <a href="https://www.feature.com">Converse</a>
                            <a href="https://www.feature.com">Crocs</a>
                            <a href="https://www.feature.com">Dr. Martens</a>
                        </div>
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">Givenchy</a>
                            <a href="https://www.feature.com">Golden Goose</a>
                            <a href="https://www.feature.com">Hoka One One</a>
                            <a href="https://www.feature.com">Jordan</a>
                            <a href="https://www.feature.com">Lanvin</a>
                            <a href="https://www.feature.com">Maison Margieia</a>
                            <a href="https://www.feature.com">Maison Mihara Yasuhiro</a>
                            <a href="https://www.feature.com">Moncler</a>
                        </div>
                    </>
                </Flyout.Panel>
            </Flyout.Content>
        </Flyout>
    )
}