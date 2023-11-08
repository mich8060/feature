import Flyout from "../../flyout";
import SectionTitle from "../../sectionTitle";

export default function LifestyleMenu({open, onClick}){
    return(
        <Flyout open={open} onClick={onClick}>
            <Flyout.Content>
                <Flyout.Body>
                    <>
                        <SectionTitle title="Categories" more="true" />
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">Books</a>
                            <a href="https://www.feature.com">Candles</a>
                            <a href="https://www.feature.com">Collectibles</a>
                            <a href="https://www.feature.com">Home Goods</a>
                            <a href="https://www.feature.com">Incense</a>
                            <a href="https://www.feature.com">Lighters</a>
                            <a href="https://www.feature.com">Mugs/Bottles</a>
                            <a href="https://www.feature.com">Shoe Cleaners</a>
                        </div>
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">Skateboard Decks</a>
                            <a href="https://www.feature.com">Tech</a>
                        </div>
                    </>
                </Flyout.Body>
                <Flyout.Panel>
                    <>
                        <SectionTitle title="Featured Brands" more="false" />
                        <div className="flyout--menu">
                            <a href="https://www.feature.com">1017 ALyx 95M</a>
                            <a href="https://www.feature.com">19-69</a>
                            <a href="https://www.feature.com">Ambush</a>
                            <a href="https://www.feature.com">Billionaire Boys Clud</a>
                            <a href="https://www.feature.com">Byredo</a>
                            <a href="https://www.feature.com">Comme des Garcons Parfum</a>
                            <a href="https://www.feature.com">Feature</a>
                        </div>
                    </>
                </Flyout.Panel>
            </Flyout.Content>
        </Flyout>
    )
}