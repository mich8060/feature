import React, { useEffect, useRef, useState } from 'react';
import './listing.scss';

import Breadcrumb from '../breadcrumb';
import Facet from '../facet';
import NumberFormat from '../numberFormat';
import Product from '../product';
import Toolbar from '../toolbar';

import productAPI from './listing.json';

export default function Listing(){

    const scrollableElementRef = useRef(null);
    const [initialScrollPosition, setInitialScrollPosition] = useState(0);
    const total_results = <NumberFormat amount={productAPI.total_results} style="number" />;

    useEffect(() => {
        const calculateInitialScrollPosition = () => {
            if(scrollableElementRef.current){
                const parentRect = scrollableElementRef.current.getBoundingClientRect();
                setInitialScrollPosition(parentRect.top);
            }
        }

        calculateInitialScrollPosition();
    },[]);

    const handleScroll = (position) => {
        const topScrollPosition = position;
        scrollableElementRef.current.scrollTo(0, topScrollPosition);
    }

    return(
        <div className="listing">
            <div className="listing--intro">
                <div className="listing--container">
                    <div className="listing--headline">Clothing</div>
                    <Breadcrumb>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Clothing</a></li>
                        </ul>
                    </Breadcrumb>
                </div>
            </div>
            <div className="listing--body">
                <div className="listing--facets">
                    <div className="listing--overflow" ref={scrollableElementRef}>
                        {productAPI.facets.length > 0 ? (
                            <>
                                {productAPI.facets.map((result, index) => (
                                    <Facet 
                                        data={result[1]}
                                        handleScroll={handleScroll}
                                        key={index}
                                        label={result[2]}
                                        scrollablePosition={initialScrollPosition}
                                    />
                                ))}
                            </>
                        ):(
                            <div>Loading</div>
                        )}
                    </div>
                </div>
                <div className="listing--products">
                    <div className="listing--toolbar">
                        <Toolbar
                            title={total_results}
                        />
                    </div>
                    {productAPI.items.length > 0 ? (
                        <>
                            {productAPI.items.map((result, index) => (
                                <Product 
                                    href={result.u}
                                    brand={result.v}
                                    image={result.t}
                                    key={index}
                                    price={<NumberFormat amount={result.p} />}
                                    title={result.l} 
                                    sizes={result.vra}
                                />
                            ))}
                        </>
                    ):(
                        <div>Loading</div>
                    )}
                </div>
            </div>
        </div>
    )
}