import Flyout from "../../flyout";

import Releases from "../../releases";
import SectionTitle from "../../sectionTitle";

export default function ReleasesMenu({open, onClick}){
    return(
        <Flyout open={open} onClick={onClick}>
            <Flyout.Content>
            <Flyout.Body>
                <SectionTitle title="Releases" more="true" />
                <div className="flyout--cards">
                    <Releases 
                        className="sm"
                        brand="Jordan"
                        image="https://feature.com/cdn/shop/files/Air-Jordan-5-Retro-SE-Midnight-Navy-Black-Football-Grey-FD6812-400--10-30-23--feature012.jpg?v=1698694067&width=600"
                        title="Air Jordan 5 Retro SE - Midnite Navy/Black/Football Grey" 
                        meta="Nov. 10, 2023 @ 7AM PST"
                    />
                    <Releases 
                        className="sm"
                        brand="Jordan"
                        image="https://feature.com/cdn/shop/files/Air-Jordan-5-Retro-SE-_PS_-Midnight-Navy-Black-Football-Grey-FN5453-400--10-30-23--feature012.jpg?v=1698694045&width=600"
                        title="Air Jordan 5 Retro SE (PS) - Midnite Navy/Black/Football Grey" 
                        meta="Nov. 10, 2023 @ 7AM PST"
                    />
                    <Releases 
                        className="sm"
                        brand="Jordan"
                        image="https://feature.com/cdn/shop/files/Air-Jordan-5-Retro-SE-_GS_-Midnight-Navy-Black-Football-Grey-FN5452-400--10-30-23--feature01.jpg?v=1698694029&width=600"
                        title="Air Jordan 5 Retro SE (GE) - Midnite Navy/Black/Football Grey" 
                        meta="Nov. 10, 2023 @ 7AM PST"
                    />
                    <Releases 
                        className="sm"
                        brand="Jordan"
                        image="https://feature.com/cdn/shop/files/Jordan-5-Retro-SE-_TD_---Midnight-Navy-Black-Football-Grey-FN5454-400-10-30-23-Feature-JP_79431940-7a79-456c-bbd8-147f20935cfd.jpg?v=1698694166&width=600"
                        title="Air Jordan 5 Retro SE (TD) - Midnite Navy/Black/Football Grey" 
                        meta="Nov. 10, 2023 @ 7AM PST"
                    />
                    <Releases 
                        className="sm"
                        brand="Jordan"
                        image="https://feature.com/cdn/shop/files/RELEASES-AirJordan3RetroWomen_s-OffNoir_Black_Sail.png?v=1699318219&width=600"
                        title="Air Jordan 3 Retro Women's - Off Noir/Black/Sail" 
                        meta="Tuesday, Oct. 31, 2023"
                    />
                    <Releases 
                        className="sm"
                        brand="Jordan"
                        image="https://feature.com/cdn/shop/files/RELEASES-AirJordan4RetroSECraft-MediumOlive_PaleVanilla_CargoKhaki.png?v=1699318653&width=600"
                        title="Air Jordan 4 Retro SE Craft - Medium Olive/Pale Vanilla/Cargo Khaki" 
                        meta="Nov. 18, 2023 @ 7AM PST"
                    />
                    <Releases 
                        className="sm"
                        brand="Jordan"
                        image="https://feature.com/cdn/shop/files/RELEASES-AirJordan4RetroSECraft-MediumOlive_PaleVanilla_CargoKhaki.png?v=1699318653&width=600"
                        title="Air Jordan 4 Retro SE Craft - Medium Olive/Pale Vanilla/Cargo Khaki" 
                        meta="Nov. 18, 2023 @ 7AM PST"
                    />
                    <Releases 
                        className="sm"
                        brand="Jordan"
                        image="https://feature.com/cdn/shop/files/RELEASES-AirJordan4RetroSECraft-MediumOlive_PaleVanilla_CargoKhaki.png?v=1699318653&width=600"
                        title="Air Jordan 4 Retro SE Craft - Medium Olive/Pale Vanilla/Cargo Khaki" 
                        meta="Nov. 18, 2023 @ 7AM PST"
                    />
                </div>
            </Flyout.Body>
            </Flyout.Content>
        </Flyout>
    )
}