import React, { useState } from 'react';
import './sizes.scss';

import Selectors from '../selectors';
import data from '../../assets/data/shoe-sizes.json';

function Sizes(props){

    const [limit, setLimit] = useState(11);
    const num = `${data.length - limit} more`;
    
    const handleClick = () => {
        setLimit(99);
    }
    
    const items = data.map((size, idx) => {
        if(idx <= limit){
            return(
                <Selectors 
                    data={size.id} 
                    label={size.label} 
                    disabled={size.disabled} 
                    key={idx}
                    handleChange={props.handleChange}
                />
            )
        }
        return null;
    })

    return(
        <div className="sizes">
            {items}
            {data.length > limit &&
                <div className="selector" onClick={handleClick}>
                    <label className="selector--button" style={{fontWeight:700}}>{num}</label>
                </div>
            }
        </div>
    )
}

export default Sizes;