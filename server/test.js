const { Game } = require('./models')

game = new Game(true)
game.printTable()
game.movePiece(true, 0, 0)
game.printTable()
game.movePiece(false, 1, 0)
game.printTable()
game.movePiece(true, 0, 1)
game.printTable()
game.movePiece(false, 2, 0)
game.printTable()
game.movePiece(true, 0, 1)