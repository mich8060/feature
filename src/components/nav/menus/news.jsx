import Flyout from "../../flyout";
import SectionTitle from "../../sectionTitle";

import Editorial from "../../editorial";

export default function NewsMenu({open, onClick}){
    return(
        <Flyout open={open} onClick={onClick}>
            <Flyout.Content>
                <Flyout.Body>
                    <SectionTitle title="Editorials" more="true" />
                    <div className="flyout--cards">
                        <Editorial 
                            className="sm"
                            image="https://feature.com/cdn/shop/articles/NO-COPY-Feature-Pre-Black-Friday-Sale-Phase-1-Oct.-30th-2023-8.jpg?v=1699290026&width=600"
                            title="End of Season Sale: 30-50% Off Sale Items" 
                            meta="Monday, Nov. 6, 2023"
                        />
                        <Editorial 
                            className="sm"
                            image="https://feature.com/cdn/shop/articles/untitled-1125096.jpg?v=1698788625&width=600"
                            title="G-Shock's 40th Anniversary Watches" 
                            meta="Thursday, Nov. 2, 2023"
                        />
                        <Editorial 
                            className="sm"
                            image="https://feature.com/cdn/shop/articles/2_8b419f6e-ea45-46ab-89de-7ca5966b5914.jpg?v=1699024779&width=600"
                            title="Air Jordan 1 'Royal Reimagined Available 11.4.23" 
                            meta="Friday, Nov. 3, 2023"
                        />
                        <Editorial 
                            className="sm"
                            image="https://feature.com/cdn/shop/articles/Puma---Palermo-Black-And-White---Feature---1.jpg?v=1694272342&width=600"
                            title="Puma Palermo 'Black & White' Available Now" 
                            meta="Wednesday, Nov 1. 2023"
                        />
                        <Editorial 
                            className="sm"
                            image="https://feature.com/cdn/shop/articles/Feature---Honor-The-Gift---1.jpg?v=1699036913&width=600"
                            title="Honor the Gift Fall 2023: Tones of the inner City" 
                            meta="Friday, Nov. 3, 2023"
                        />
                        <Editorial 
                            className="sm"
                            image="https://feature.com/cdn/shop/articles/1-Banner_ffc12f58-fe66-4e93-9572-04126e4974d2.jpg?v=1698765222&width=600"
                            title="Just Arrived: Icecream" 
                            meta="Tuesday, Oct. 31, 2023"
                        />
                    </div>
                </Flyout.Body>
            </Flyout.Content>
        </Flyout>
    )
}