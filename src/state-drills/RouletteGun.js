import React from 'react'

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinningTheChamber: false
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber: true
        })

        //timeout should register 2 seconds
        this.timeout = setTimeout( () => {
            //within timeout: generate random number between 1-8
            const randomNumber = Math.ceil(Math.random() * 8)

            //within timeout: update state so the random number is the new value for chamber
            //and spinningTheChamber should be false
            this.setState({
                chamber: randomNumber,
                spinningTheChamber: false
            })
        }, 2000 )  
    }

    playRoulette() {
        const { spinningTheChamber, chamber } = this.state;

        if (spinningTheChamber){
            return 'spinning the chamber and pulling the trigger! ...'
        }
        else if (chamber === this.props.bulletInChamber){
            return 'BANG!!!!'
        }
        else {
            return 'you are safe!'
        }
    }

    render(){
        return(
            <div className="RouletteGun">
                <p>{this.playRoulette()}</p>
                <button onClick={this.handleClick}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun