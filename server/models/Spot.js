class Spot {
	/*
		piece = 0 => without piece
		piece = 1 => X
		piece =-1 => O
	*/

	constructor(piece = 0, name){
		this._piece = piece
		this._name = name
	}

	clearSpot(){
		this._piece = 0
	}

	setPiece(isX){
		this._piece = isX ? 1 : -1
	}

	isFilled(){
		return this._piece != 0
	}

	getRepresentation(){
		if(this._piece == 0){
			return '_'
		}

		return this._piece == 1 ? 'x' : 'o'
	}

	getName(){
		return this._name
	}
}

module.exports = Spot