import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';
import './App.css';

const mapStateToProps = state => {
	return { 
		searchField: state.searchField 
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({robots:users})});
	}

	render() {
		const { searchField, onSearchChange } = this.props;
		const filterRobots = this.state.robots.filter(robot => { 
				return robot.name.toLowerCase().includes(searchField.toLowerCase()); 
		})
		if(this.state.robots.length === 0) {
			return (<h1>Loading...</h1>)
		} else {
			return (
				<div className = "tc">
					<h1 className="f1">Robo Friends</h1>
					<SearchBox searchChange = {onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
