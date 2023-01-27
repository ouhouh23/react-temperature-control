import React, {useState} from 'react'
import {Button} from './button.js'

export const Counter = () => {
	const palette = [
		{color: '#003399', limit: -10}, {color: '#0066ff', limit: -5}, {color: '#99ccff', limit: 0}, 
		{color: '#ffe6cc', limit: 5}, {color: '#ffcc99', limit: 10}, {color: '#ff9966', limit: 15}, {color: '#ff6600', limit: 20}, 
	]
	const [temperature, setTemperature] = useState(9)
	let localTemperature = temperature
	const [background, setBackground] = useState('#ffcc99')

	const increase = () => {
		localTemperature +=1
		setTemperature(localTemperature)
		updateBackground()

	}

	const decrease = () => {
		localTemperature -=1
		setTemperature(localTemperature)
		updateBackground()
	}

	const updateBackground = () => {
		palette.find(element => {
			if (localTemperature <= element.limit) {
				setBackground(element.color)
				return true
			}
		})
	}

	return (
		<div className="counter">
			<div style={{backgroundColor: background}} className="counter__value">
				<span className="counter__text">{temperature}&#8451;</span>
			</div>

			<div className="counter__buttons">
				<Button onClick={increase}>+</Button> 
				<Button onClick={decrease}>-</Button>
			</div>
		</div>
		)
}
