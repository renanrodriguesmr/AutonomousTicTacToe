const Spot = require('./Spot')
const Buffer = require('./Buffer')
const Player = require('./Player')
const Table = require('./Table')

class Game {
	constructor(xStarting){
		this._playerX = new Player(false)
		this._playerY = new Player(true)
		this._turn = xStarting
		this._ended = false
		this.winner = null

		this._table = new Table()
		this._bufferX = new Buffer(true)
		this._bufferY = new Buffer(false)
	}

	isRightTurn(isPlayerX){
		return isPlayerX == this._turn
	}

	isValidCoordinates(x, y){
		return x >= 0 && x < 3 && y >= 0 && y < 3
	}

	didGameEnd(){
		// TODO: check
		return false;
	}

	movePiece(isPlayerX, x, y){
		if(this._ended || !this.isRightTurn(isPlayerX) || !this.isValidCoordinates(x,y)){
			return false
		}

		this._turn = !this._turn

		// TODO: checar o primeiro do buffer disponivel

		const spot = this._table.getSpot(x, y)
		spot.setPiece(isPlayerX)

		if(this.didGameEnd()){
			this.clearTable()
			this._ended = true
			// check winner
		}

		return true
	}

	printTable(){
		this._table.print()
	}
}

module.exports = Game