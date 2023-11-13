import React, { useState, useEffect } from 'react';

export default function NumberFormat({ amount, currency = 'USD', style = 'currency' }){
    const [formattedAmount, setFormattedAmount] = useState('');

    useEffect(() => {
        let format = (style == 'currency') ? { style: style, currency, } : {};
        const formatter = new Intl.NumberFormat('en-US', format);
        const formatted = formatter.format(amount);
        setFormattedAmount(formatted);
    }, [amount, currency]);
  
    return (
        <>{formattedAmount}</>
    );
};