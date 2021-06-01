const Spot = require('./Spot')

class Table {
	constructor(){
		this._spots = []
		this.reset()
	}

	reset(){
		this._spots = []
		for(let i = 0; i < 3; i++){
			let temp = []

			for(let j = 0; j < 3; j++){
				const spot = new Spot()
				temp.push(spot)
			}

			this._spots.push(temp)
		}
	}

	getSpot(x, y){
		return this._spots[x][y]
	}

	print(){
		for(let i = 0; i < 3; i++){
			console.log(this._spots[i][0].getRepresentation() + this._spots[i][1].getRepresentation() + this._spots[i][2].getRepresentation())
		}
	}

}

module.exports = Table