import React, { Component } from 'react';
import CardList from './CardList.js';
import { robots } from './robots';
import SearchBox from './SearchBox.js';
import './App.css';


class App extends Component {
	constructor(){
		super()
		this.state={
			robots: [],
			searchfields: ''		
		}
	}

	componentDidMount(){
		return this.setState({robots:robots})
	}

	onSearchChanges = (event) => {
		this.setState({searchfields: event.target.value})

		
	}
	render(){

		const filterrobots = this.state.robots.filter(robots => {
			return (robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase()));
		})

		return (
		<div className='tc'>
			<h1 >RoboFriends</h1>
			<SearchBox searchchange={this.onSearchChanges}/>
			<CardList robots={filterrobots} />
		</div>
		);	
	}
	
}

export default App;