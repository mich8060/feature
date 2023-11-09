import React, { useState, useEffect } from 'react';
import './nav.scss';

import AccessoriesMenu from './menus/accessories';
import BrandsMenu from './menus/brands';
import ClothingMenu from './menus/clothing';
import FootwearMenu from './menus/footwear';
import LatestMenu from './menus/latest';
import LifestyleMenu from './menus/lifestyle';
import NewsMenu from './menus/news';
import ReleasesMenu from './menus/releases';
import SaleMenu from './menus/sale';

import data from './menus.json';

export default function Nav(){

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [menu, setMenu] = useState('');

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setMenu('');
        }

        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize', handleResize);
        }
    },[]);

    const primaryLink = (e, label) => {

        if(menu === label){
            setMenu('');
        }else{
            setMenu(label);
        }
        if(screenWidth < 1025){
            e.preventDefault();
        }
    }

    const componentMap = {
        AccessoriesMenu,
        BrandsMenu,
        ClothingMenu,
        FootwearMenu,
        LatestMenu,
        LifestyleMenu,
        NewsMenu,
        ReleasesMenu,
        SaleMenu
    };

    const resetMenu = () => {
        setMenu('');
    }

    return(
        <nav className="nav">
            <ul>
                
                {
                    // eslint-disable-next-line
                    data.map((item, index) => {
                        const ComponentType = componentMap[item.menu];
                        if(ComponentType){
                            return(
                                <li key={index}>
                                    <a href={item.href} className={`nav--primary ${(menu === item.title) ? 'open' : ''}`} onClick={ (e) => primaryLink(e, item.title) }>{item.title}</a>
                                    {(item.title == menu) ? (
                                        <ComponentType open="true" onClick={resetMenu} />
                                    ):(
                                        <ComponentType open="false" onClick={resetMenu} />
                                    )}
                                </li>
                            )
                        } 
                    })
                }
            </ul>
        </nav>
    )
}









