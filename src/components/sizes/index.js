import React, { useState } from 'react';
import './sizes.scss';

import Selectors from '../selectors';
import data from '../../assets/data/shoe-sizes.json';

function Sizes(props){

    const [limit, setLimit] = useState(11);
    const num = `+${data.length - limit}`;
    
    const handleClick = () => {
        setLimit(99);
    }
    
    const items = data.map((size, idx) => {
        if(idx < limit){
            return(
                <Selectors 
                    data={size.id} 
                    label={size.label} 
                    disabled={size.disabled} 
                    handleChange={props.handleChange}
                />
            )
        }
    })

    return(
        <div className="sizes">
            {items}
            {data.length > limit &&
                <div class="selector" onClick={handleClick}>
                    <label class="selector--button">{num}</label>
                </div>
            }
        </div>
    )
}

export default Sizes;