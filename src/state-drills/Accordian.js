import React from 'react'
import AccordianItem from './AccordianItem'

class Accordian extends React.Component {
    static defaultProps = {
        sections: []
    }

    state = {
        activeSectionIndex: null
    }

    handleActiveClick(sectionIndex){
        console.log('button clicked!', {sectionIndex});
        this.setState({ activeSectionIndex: sectionIndex })
    }

    renderItem(index, section, activeSectionIndex) {
        return (
            <li key={index}>
                <button onClick={() => this.handleActiveClick(index)}>
                {section.title}
                </button>
                {(activeSectionIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const { activeSectionIndex } = this.state;

        return (
            <ul className="Accordian">
                {this.props.sections.map( (section, index) => (
                    <AccordianItem 
                        key={index}
                        index={index}
                        section={section}
                        activeSectionIndex={activeSectionIndex}
                    />
                ))}
                {}
            </ul>
        )
    }
}

export default Accordian