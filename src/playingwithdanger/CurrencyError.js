import React from 'react'
import Currency from './Currency'

class CurrencyError extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return { hasError: true };
    } 

    render() {
        if (this.state.hasError){
            return (
                <h2>Could not display this currency</h2>
            )
        }
        return this.props.children;
    }
}

export default CurrencyError