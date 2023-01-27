import React, {useState} from 'react'
import {Button} from './button.js'

export class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.palette = [
			{color: '#003399', limit: -10}, {color: '#0066ff', limit: -5}, {color: '#99ccff', limit: 0}, 
			{color: '#ffe6cc', limit: 5}, {color: '#ffcc99', limit: 10}, {color: '#ff9966', limit: 15}, 
			{color: '#ff6600', limit: 20}, 
		]
		this.state = {temperature: 9, background: 'ffcc99' }
		this.localTemperature = this.state.temperature

		this.increase = this.increase.bind(this)
		this.decrease = this.decrease.bind(this)
	}

	increase() {
		this.localTemperature += 1
		this.setState({temperature: this.localTemperature})
		this.updateBackground()
	}

	decrease() {
		this.localTemperature -= 1
		this.setState({temperature: this.localTemperature})
		this.updateBackground()
	}

	updateBackground() {
		this.palette.find(element => {
			if (this.localTemperature <= element.limit) {
				this.setState({background: element.color})
				return true
			}
		})		
	}

	render() {
		return (
			<div className="counter">
				<div style={{backgroundColor: this.state.background}} className="counter__value">
					<span className="counter__text">{this.state.temperature}&#8451;</span>
				</div>

				<div className="counter__buttons">
					<Button onClick={this.increase}>+</Button> 
					<Button onClick={this.decrease}>-</Button>
				</div>
			</div>
			)		
	}
}
