import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchField: ''
		}
	}

	setOnChante = (event) => {
		this.setState({searchField: event.target.value})
	}

	render() {
		const filterRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
		return (
			<div className = "tc">
				<h1>Robo Friends</h1>
				<SearchBox setOnChante = {this.setOnChante} />
				<CardList robots = {filterRobots} />
			</div>
			)
	}
}

export default App;
