import React from 'react';
import './Tooltip.css';

function Tooltip(props) {
    return (
        <span className='Tooltip'>
            <span 
                className='Tooltip-content'
                style={{color: props.color}}
            >
                {props.children}
            </span>
            <div className='Tooltip-message'>
                {props.message}
            </div>
        </span>
    )
}

export default Tooltip;