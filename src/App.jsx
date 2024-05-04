import React from "react";
import './App.css'


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
	}
}

increment = () => {
	if (this.state.counter < 50) {
		this.setState({
			counter: this.state.counter + 10
		})
	}
}

decrement = () => {
	if (this.state.counter > -50) {
		this.setState({
			counter: this.state.counter - 10
		})
	}
}

reset = () => {
	this.setState({
		counter: this.state.counter - this.state.counter
	})
}

random = () => {
	const randomNum = Math.floor(Math.random(1) * (50 - -50) + -50)
	this.setState({
		counter: this.counter = randomNum
	})
}
	
render() {
	
	return (
		<div className="app">
			<div className="counter">{this.state.counter}</div>
				<div className="controls">
					<button onClick={this.increment}>INC</button>
					<button onClick={this.decrement}>DEC</button>
					<button onClick={this.random}>RND</button>
					<button onClick={this.reset}>RESET</button>
				</div>
			</div>
	)
	}
  }


export default App