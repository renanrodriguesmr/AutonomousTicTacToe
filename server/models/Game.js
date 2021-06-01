const eventBus = require('js-event-bus')();

const Buffer = require('./Buffer')
const Player = require('./Player')
const Table = require('./Table')

// const tictactoe = require('tictactoe-minimax-ai');

let options = {
	"computer": "o",
	"opponent": "x"
};

class Game {
	constructor(xStarting){
		this._playerX = new Player(false)
		this._playerO = new Player(true)
		this._turn = xStarting
		this._ended = false
		this.winner = null

		this._table = new Table()
		this._bufferX = new Buffer(true)
		this._bufferO = new Buffer(false)
	}

	isRightTurn(isPlayerX){
		return isPlayerX == this._turn
	}

	isValidCoordinates(x, y){
		return x >= 0 && x < 3 && y >= 0 && y < 3
	}

	didGameEnd(){
		// TODO: check
		// console.log(tictactoe.boardEvaluate(this._table.getRepresentation()));
		return false;
	}

	movePiece(isPlayerX, x, y){
		if(this._ended || !this.isRightTurn(isPlayerX) || !this.isValidCoordinates(x,y)){
			return false
		}

		this._turn = !this._turn

		const bufferSpot = isPlayerX ? this._bufferX.getFirstFilledSpot() : this._bufferO.getFirstFilledSpot()
		const spot = this._table.getSpot(x, y)

		eventBus.emit('new-move', null, bufferSpot.getName(), spot.getName());

		spot.setPiece(isPlayerX)
		bufferSpot.clearSpot()

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