import React, { Component } from 'react';
import CounterButton from './CounterButton'

class Header extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	updateCount = () => {
		this.setState({ count: this.state.count + 1})
	}

	render() {
		return(
			<div>
				<h1 className="f1">Robo Friends</h1>
				<CounterButton color={'red' }/>
			</div>
		)
	}
}

export default Header;