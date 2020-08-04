import React,{Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
// import { robots } from './robots';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield:''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> {this.setState({ robots : users})});
	}


	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value});
	}


	render(){
		const { robots,searchfield } = this.state;
		const filteredRobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return(
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
}

export default App;

