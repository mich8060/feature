import React, { useState } from 'react';
import './checkbox.scss';

export default function Checkbox({ label, onChange, checked, swatch }){
    const [isChecked, setChecked] = useState(checked || false);

    const handleCheckboxChange = () => {
        const newCheckedValue = !isChecked;
        setChecked(newCheckedValue);
        if(onChange){
            onChange(newCheckedValue);
        }
    };

    return(
        <div className="checkbox">
            <label className={`checkbox--container ${isChecked ? 'checked' : ''}`}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                {swatch &&
                    <div className="checkbox--swatch" style={{ backgroundColor: swatch}}></div>
                }
                <div className="checkbox--label">{label}</div>
            </label>
        </div>
    );
};
