import React, { useEffect, useRef, useState } from 'react';
import './listing.scss';
import axios from 'axios';

import Facet from '../facet';
import NumberFormat from '../numberFormat';
import Product from '../product';
import Toolbar from '../toolbar';

const productAPI = 'https://api.fastsimon.com/categories_navigation?request_source=v-next&src=v-next&UUID=64e915b4-459d-4dbd-97e9-dc5225e455de&uuid=64e915b4-459d-4dbd-97e9-dc5225e455de&store_id=4089909&api_type=json&category_id=26051221&facets_required=1&products_per_page=60&page_num=2&with_product_attributes=true&sort_by=popular';

export default function Listing(){

    const scrollableElementRef = useRef(null);
    
    const [facets, setFacets] = useState([]);
    const [result, setResult] = useState([]);
    const [product, setProduct] = useState([]);
    const [initialScrollPosition, setInitialScrollPosition] = useState(0);
    const total_results = <NumberFormat amount={result} style="number" />;

    axios.get(productAPI)
    .then((response) => {
        setResult(response.data.total_results);
        setProduct(response.data.items);
        setFacets(response.data.facets);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

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
            <div className="listing--toolbar">
                <Toolbar
                    title={total_results}
                />
            
            </div>
            <div className="listing--body">
                <div className="listing--facets">
                    <div className="listing--overflow" ref={scrollableElementRef}>
                        {facets.length > 0 ? (
                            <>
                                {facets.map((result, index) => (
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
                    {product.length > 0 ? (
                        <>
                            {product.map((result, index) => (
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