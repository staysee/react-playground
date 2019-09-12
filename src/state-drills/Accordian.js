import React from 'react'

class Accordian extends React.Component {
    static defaultProps = {
        sections: []
    }

    render() {
        return (
            <div className="Accordian">
                <ul>
                {this.props.sections.map( section => (
                    <li>
                        <button>
                        {section.title}
                        </button>
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}

export default Accordian