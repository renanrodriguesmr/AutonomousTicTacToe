const Spot = require('./Spot')

class Buffer {
	constructor(isX){
		this._isX = isX
		this._spots = []

		for(let i = 0; i < 5; i++){
			const spotX = new Spot(1)
			this._spots.push(spotX)
		}
	}
}

module.exports = Buffer