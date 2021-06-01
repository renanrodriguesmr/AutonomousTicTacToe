class Spot {
	/*
		piece = 0 => without piece
		piece = 1 => X
		piece =-1 => O
	*/

	constructor(piece = 0){
		this._piece = piece;
	}

	clearSpot(){
		this._piece = 0;
	}

	setPiece(isX){
		this._piece = isX ? 1 : -1;
	}

	getRepresentation(){
		if(this._piece == 0){
			return '_'
		}

		return this._piece == 1 ? 'x' : 'o'
	}
}

module.exports = Spot