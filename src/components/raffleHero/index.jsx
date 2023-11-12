import './raffleHero.scss';

import Button from '../../components/button/'
import Timer from '../../components/timer/';

const targetDate = new Date('November 18, 2023 07:00:00');

export default function RaffleHero(){
    return(
        <div className="raffleHero">
            <div className="raffleHero--container">
                <div className="raffleHero--image" style={{backgroundImage:'url(https://feature.com/cdn/shop/files/JORDAN_4_RELEASES_BANNER.jpg?v=1699491436&width=3072)'}}></div>
                <div className="raffleHero--text">
                    <div className="raffleHero--title">Air Jordan 4 Retro SE Craft - Medium Olive/Pale Vanilla/Cargo Khaki</div>
                    <Timer targetDate={targetDate} title="Releases: November 18, 2023 @ 7:00 AM PST" />
                    <Button label="Enter Draw" />
                </div>  
            </div>
        </div>
    )
}