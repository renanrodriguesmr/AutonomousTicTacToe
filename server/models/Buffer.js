const Spot = require('./Spot')

namesX = ["X1", "X2", "X3", "X4", "X5"]
namesO = ["O1", "O2", "O3", "O4", "O5"]

class Buffer {
	constructor(isX){
		this._isX = isX
		this._spots = []

		for(let i = 0; i < 5; i++){
			const name = isX ? namesX[i] : namesO[i]
			const spotX = new Spot(1, name)
			this._spots.push(spotX)
		}
	}

	getFirstFilledSpot(){
		for(let i = 0; i < 5; i++){
			const spot = this._spots[i]
			if(spot.isFilled()){
				return spot
			}
		}

		return null
	}
}

module.exports = Buffer