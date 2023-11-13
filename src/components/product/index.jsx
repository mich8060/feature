import React, { useState } from 'react';
import './product.scss';

export default function Product({href, image, brand, title, price, sizes}){

    const [variantLimit, setVariantLimit] = useState(false);

    let limitedSize = sizes.slice(0, 7);

    return(
        <a href={`https://www.feature.com${href}`} className="product">
            <div className="product--image"><img src={image} title={title} alt={title} /></div>
            <div className="product--overlay">
                <div className="product--sizes">
                    {limitedSize.length > 0 ? (
                        <>
                            {limitedSize.map((item, index) => (
                                <div className="product--size" key={index}>{item[1][7][1]}</div>
                            ))}
                            {sizes.length > 7 ? (
                                <div className="product--label">More sizes available.</div>
                            ):(
                                <div></div>
                            )}
                        </>
                    ):(
                        <div>No More Sizes</div>
                    )}
                </div>
                <div className="product--text">
                    <div className="product--brand">{brand}</div>
                    <div className="product--title">{title}</div>
                </div>
                <div className="product--price">{price}</div>
            </div>

        </a>
    )
}