import Flyout from "../../flyout";
import SectionTitle from "../../sectionTitle";

export default function BrandsMenu({open, onClick}){
    return(
        <Flyout open={open} onClick={onClick}>
            <Flyout.Content>
                <Flyout.Body>
                    <SectionTitle title="Featured Brands" more="true" />
                    <div className="flyout--menu">
                        <a href="https://www.feature.com">Advisory Board Crystals</a>
                        <a href="https://www.feature.com">Awake NY</a>
                        <a href="https://www.feature.com">Billionaire Boy Club</a>
                        <a href="https://www.feature.com">Carhartt WIP</a>
                        <a href="https://www.feature.com">Casablanca</a>
                        <a href="https://www.feature.com">Comme Des Garcons Play</a>
                        <a href="https://www.feature.com">Fear of God Essentials</a>
                        <a href="https://www.feature.com">Feature</a>
                    </div>
                    <div className="flyout--menu">
                        <a href="https://www.feature.com">Gallery Dept.</a>
                        <a href="https://www.feature.com">Gentle Monster</a>
                        <a href="https://www.feature.com">Givenchy</a>
                        <a href="https://www.feature.com">Golden Goose</a>
                        <a href="https://www.feature.com">Heron Preston</a>
                        <a href="https://www.feature.com">Human Made</a>
                        <a href="https://www.feature.com">Icecream</a>
                        <a href="https://www.feature.com">Jordan</a>
                    </div>
                    <div className="flyout--menu">
                        <a href="https://www.feature.com">Maison Mihara Yasuhiro</a>
                        <a href="https://www.feature.com">Needles</a>
                        <a href="https://www.feature.com">Marni</a>
                        <a href="https://www.feature.com">New Era</a>
                        <a href="https://www.feature.com">New Balance</a>
                        <a href="https://www.feature.com">Nike</a>
                        <a href="https://www.feature.com">Readymade</a>
                        <a href="https://www.feature.com">Thude</a>
                    </div>
                </Flyout.Body>
            </Flyout.Content>
            <Flyout.Foot>
                    <a href="https://www.feature.com">123</a>
                    <a href="https://www.feature.com">A</a>
                    <a href="https://www.feature.com">B</a>
                    <a href="https://www.feature.com">C</a>
                    <a href="https://www.feature.com">D</a>
                    <a href="https://www.feature.com">E</a>
                    <a href="https://www.feature.com">F</a>
                    <a href="https://www.feature.com">G</a>
                    <a href="https://www.feature.com">H</a>
                    <a href="https://www.feature.com">I</a>
                    <a href="https://www.feature.com">J</a>
                    <a href="https://www.feature.com">K</a>
                    <a href="https://www.feature.com">L</a>
                    <a href="https://www.feature.com">M</a>
                    <a href="https://www.feature.com">N</a>
                    <a href="https://www.feature.com">O</a>
                    <a href="https://www.feature.com">P</a>
                    <a href="https://www.feature.com">R</a>
                    <a href="https://www.feature.com">S</a>
                    <a href="https://www.feature.com">T</a>
                    <a href="https://www.feature.com">U</a>
                    <a href="https://www.feature.com">V</a>
                    <a href="https://www.feature.com">W</a>
                    <a href="https://www.feature.com">Y</a>
            </Flyout.Foot>
        </Flyout>
    )
}