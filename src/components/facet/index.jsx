import React, { useEffect, useRef, useState } from 'react';
import './facet.scss';

import Checkbox from '../checkbox';

export default function Facet({ label = "Label", data, handleScroll, scrollablePosition }){

    const scrollElementRef = useRef(null);
    const limit = 5;

    const [activeAccordion, setActiveAccordion] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const calculateInitialScrollPosition = () => {
            if(scrollElementRef.current){
                const childRect = scrollElementRef.current.getBoundingClientRect();
                setScrollPosition(childRect.top - scrollablePosition);
                console.log("Parent: ", scrollablePosition);
                console.log("Child: ", label + " " + scrollPosition);
            }
        }

        calculateInitialScrollPosition();
    },[]);

    const handleAccordion = () => {
        setActiveAccordion(!activeAccordion);
    }

    const handleChange = () => {
        if(expanded){
            handleScroll(scrollPosition);
        }
        setExpanded(!expanded);
    }

    return(
        <div 
            className={`facet ${activeAccordion ? '' : 'collapsed' }`} 
            ref={scrollElementRef}
        >
            <div className="facet--label" onClick={handleAccordion}>
                <span>{label}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.71991 7.99457C5.01281 7.70168 5.48768 7.70168 5.78057 7.99457L12.0002 14.2142L18.2199 7.99457C18.5128 7.70168 18.9877 7.70168 19.2806 7.99457C19.5735 8.28747 19.5735 8.76234 19.2806 9.05523L12.5306 15.8052C12.2377 16.0981 11.7628 16.0981 11.4699 15.8052L4.71991 9.05523C4.42702 8.76234 4.42702 8.28747 4.71991 7.99457Z" fill="#010101"/>
                </svg>
            </div>
            <div className="facet--options">
                {data.length > 0 ? (
                    <>
                        {data.map((item, index) => {
                            let element =(label === "Color") ? <Checkbox label={item[0]} swatch={item[2]} key={index} /> : <Checkbox label={item[0]} key={index} /> ;
                            if(!expanded){
                                if(index < limit){
                                    return(element)
                                }
                            }else{
                                return(element)
                            }
                        })}
                        {data.length > 5 ? (
                            <>
                                {expanded ? (
                                    <div className="facet--more" onClick={handleChange}>Show less</div>
                                ):(
                                    <div className="facet--more" onClick={handleChange}>Show {data.length - limit} more</div>
                                )}
                                
                            </>
                        ):(
                            <div className="facet--more"></div>
                        )}
                    </>
                ):(
                    <div>Loading...</div>
                )}
            </div>
            
        </div>
    )
}