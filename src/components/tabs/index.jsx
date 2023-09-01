import React, { useState } from 'react';
import './tabs.scss';



function Body(props){

    const [activeIndex, setActiveIndex] = useState(0);

    let tabList = [];
    let tabContent = [];
    props.children.map((item, idx) => {
        if(item.type.name === "Tab"){ tabList.push(item.props.label); }
        if(item.type.name === "Panel"){ tabContent.push(item.props.children); }
    });

    const handleChange = (index) => {
        console.log(index);
        setActiveIndex(index);
    }

    return(
        <section className="tabs">
            <div className="tabs--list">
                {tabList.map((item, idx) => 
                    <button className={((activeIndex === idx) ? 'active' : '')} key={idx} onClick={ () => { handleChange(idx) }}>{item}</button>
                )}
            </div>
            <div className="tabs--content">
                {tabContent[activeIndex]}
            </div>
        </section>
    )
}

function Panel(){}

function Tab(){}

export default {
    Tab,
    Body,
    Panel
};
