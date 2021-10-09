import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar.jsx';
import Slider from './components/slider';
import Rank from './components/Rank';
import About from "./components/About";
import Donation from './components/Donation';


function App() {
	return (
		<>
			<Router>
			<Navbar/>
				<Switch>
					<Route path="/" exact component={Slider} />
					<Route exact path="/rank" component={Rank} />
					<Route exact path="/donate" component={Donation} />
					<Route exact path="/about" component={About} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
