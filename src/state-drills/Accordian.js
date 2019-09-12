import React from 'react'

class Accordian extends React.Component {
    static defaultProps = {
        sections: []
    }

    state = {
        activeSectionIndex: null
    }

    handleButtonClick(index){
        console.log('button clicked!', {index});
        this.setState({ activeSectionIndex: index })
    }
    render() {
        return (
            <div className="Accordian">
                <ul>
                {this.props.sections.map( (section, index) => (
                    <li key={index}>
                        <button onClick={() => this.handleButtonClick(index)}>
                        {section.title}
                        </button>
                        <p>{section.content}</p>
                    </li>
                    
                ))}
                </ul>
            </div>
        )
    }
}

export default Accordian