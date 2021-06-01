const eventBus = require('js-event-bus')();

const Buffer = require('./Buffer')
const Player = require('./Player')
const Table = require('./Table')

const tictactoe = require('tictactoe-minimax-ai');

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
		const status = tictactoe.boardEvaluate(this._table.getRepresentation()).status
		if(status == "none"){
			return false
		}

		if(status == "win"){
			this.winner = this._playerO
		}

		if(status == "loss"){
			this.winner = this._playerX
		}

		if(status == "tie"){
			this.winner = null
		}
		return true;
	}

	movePiece(isPlayerX, x = 0, y = 0){
		if(this._ended || !this.isRightTurn(isPlayerX) || !this.isValidCoordinates(x,y)){
			return false
		}

		this._turn = !this._turn

		if(!isPlayerX){
			const bestMove = tictactoe.bestMove(this._table.getRepresentation(), options)
			x = Math.floor(bestMove/3)
			y = bestMove%3
		}

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