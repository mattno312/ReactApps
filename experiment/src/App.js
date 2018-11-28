import React, { Component } from 'react'
import logo from './media/don.jpg'
import fire from './media/bacteria.png'
import cook from './media/therm.png'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<a>
						<img src={logo} className="App-logo" alt="logo" />
					</a>
					<img src={cook} className="morph" alt="fire" />
				</header>
			</div>
		)
	}
}

export default App
