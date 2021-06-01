const Spot = require('./Spot')

names = ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9"]

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
				const spot = new Spot(0, names[3*i+j])
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

	getRepresentation(){
		let representation = []
		for(let i = 0; i < 3; i++){
			let temp = []

			for(let j = 0; j < 3; j++){
				temp.push(this._spots[i][j].getRepresentation())
			}

			representation.push(temp)
		}

		return representation
	}

}

module.exports = Table