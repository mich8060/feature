import React, { useState } from 'react';
import './buybox.scss';

import Button from '../button';
import Sizes from '../sizes';

function Buybox(props){
    const [label, setLabel] = useState('Add to Cart');

    const handleChange = (disabled) => {
        if(disabled){
            setLabel('Sold Out')
        }else{
            setLabel('Add to Cart');
        }
    }

    return(
        <div className="buybox">
            <div className="buybox--labels">
                Sizes
                Fit &amp; Sizing
            </div>
            <Sizes handleChange={handleChange} />
            <Button label={label} />
        </div>
    )
}

export default Buybox;