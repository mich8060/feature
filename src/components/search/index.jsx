import React, { useState } from 'react';
import './search.scss';
import axios from 'axios';

import NumberFormat from '../numberFormat';
import Product from '../product';
import SectionTitle from '../sectionTitle';

export default function Search({searchMode}){

    const [active, setActive] = useState(false);
    const [data, setData] = useState([]);
    const [product, setProduct] = useState([]);

    const handleInputChange = (e) => {

        let query = e.target.value;

        if(query.length) {
            searchMode(true);
        }

        let apiURL = `https://suggest.instantsearchplus.com/?l=feature.com&q=${query}&cdn_cache_key=1699496565&store_id=4089909&uuid=64e915b4-459d-4dbd-97e9-dc5225e455de&src=ac-v-next`;
        let productURL = `https://api.fastsimon.com/?store_id=4089909&UUID=64e915b4-459d-4dbd-97e9-dc5225e455de&cdn_cache_key=1699496565&q=${query}&src=ac-v-next&aq=true`;

        axios.get(apiURL)
            .then((response) => {
                setData(response.data.items);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        axios.get(productURL)
            .then((response) => {
                setProduct(response.data.items);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    const engageSearch = (e) => {
        setActive(true);
        let query = e.target.value;

        if(query.length) {
            searchMode(true);
        }
    }

    const cancelSearch = () => {
        setActive(false);
        searchMode(false);
    }

    return(
        <div className="search">
            <div className="search--input">
                <button className="search--button">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.65379 11.7326C2.57913 9.65798 2.57913 6.29429 4.65379 4.21963C6.72845 2.14497 10.0921 2.14497 12.1668 4.21963C14.2415 6.29429 14.2415 9.65798 12.1668 11.7326C10.0921 13.8073 6.72845 13.8073 4.65379 11.7326ZM3.76991 3.33575C1.20709 5.89856 1.20709 10.0537 3.76991 12.6165C6.17363 15.0202 9.97811 15.1695 12.5557 13.0642L16.3166 16.825C16.5607 17.0691 16.9564 17.0691 17.2005 16.825C17.4446 16.581 17.4446 16.1852 17.2005 15.9412L13.4452 12.1858C15.606 9.60753 15.4745 5.75952 13.0507 3.33575C10.4879 0.77293 6.33272 0.77293 3.76991 3.33575Z" fill="#0056FF"/>
                    </svg>
                </button>
                <input 
                    type="text"
                    onFocus={engageSearch}
                    onBlur={cancelSearch}
                    onChange={handleInputChange}
                    placeholder="Search"
                />
                <button className="search--cancel">Cancel</button>
            </div>
            <div className={`search--overlay ${active ? 'active' : ''}`}>
                {product.length > 0 ? (
                    <>
                        <div className="search--column">
                            {data.length > 0 ? (
                                <>
                                    <SectionTitle title="Popular Searches" />
                                    <div className="search--menu">
                                        {data.map((result, index) => (
                                            <a href="https://www.feature.com" key={index}>{result.label}</a>
                                        ))}
                                    </div>
                                    <SectionTitle title="Collections" />
                                    <div className="search--menu">
                                        <a href="https://www.feature.com">Collection 1</a>
                                        <a href="https://www.feature.com">Collection 2</a>
                                        <a href="https://www.feature.com">Collection 3</a>
                                        <a href="https://www.feature.com">Collection 4</a>
                                    </div>
                                </>
                            ):(
                                <p>Loading...</p>
                            )}
                        </div>
                        <div className="search--products">
                            {product.length > 0 ? (
                                <>
                                    {product.map((result, index) => {
                                        if(index < 3){
                                            return(
                                                <Product 
                                                    key={index} 
                                                    brand={result.v}
                                                    image={result.t}
                                                    title={result.l}
                                                    price={<NumberFormat amount={result.p} />}
                                                />
                                            )
                                        }
                                    })}
                                </>
                            ):(
                                <p>Loading...</p>
                            )}
                        </div>
                    </>
                ):(
                    <div className="search--default">
                        <SectionTitle title="Popular Search Terms" />
                        <div className="search--menu">
                            <a href="https://www.feature.com">Term 1</a>
                            <a href="https://www.feature.com">Term 2</a>
                            <a href="https://www.feature.com">Term 3</a>
                            <a href="https://www.feature.com">Term 4</a>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}