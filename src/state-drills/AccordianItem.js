import React from 'react'

function AccordianItem(props) {
    return (
        <li key={props.index}>
            <button onClick={() => this.handleActiveClick(props.index)}>
            {props.section.title}
            </button>
            {(props.activeSectionIndex === props.index) && <p>{props.section.content}</p>}
        </li>
    )
}

export default AccordianItem