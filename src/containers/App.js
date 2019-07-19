import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots:users}));
	}

	setOnChante = (event) => {
		this.setState({searchField: event.target.value})
	}

	render() {
		const filterRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
		if(this.state.robots.length === 0) {
			return (<h1>Loading...</h1>)
		} else {
			return (
				<div className = "tc">
					<h1 className="f1">Robo Friends</h1>
					<SearchBox setOnChante = {this.setOnChante} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots = {filterRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
				)
		}
	}
}

export default App;
