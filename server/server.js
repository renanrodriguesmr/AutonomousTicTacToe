const express = require('express')
const app = express()
const eventBus = require('js-event-bus')();
const port = 3000

const { Game } = require('./models')

const AppState = require('./state')

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

app.get('/pieces_news', (req, res) => {
 	res.send(appState.getFormattedString())
})

app.post('/piece_changed', (req, res) => {
	appState.clear()
  	res.sendStatus(200)
})

app.get('/teste_clear', (req, res) => {
	appState.clear()
 	res.send(appState.getFormattedString())
})

app.get('/teste1', (req, res) => {
	game.movePiece(true, 0, 0)
	game.printTable()
	// remove answer to test
	game.movePiece(false)
	game.printTable()
 	res.send(appState.getFormattedString())
})

app.get('/teste2', (req, res) => {
	game.movePiece(true, 0, 1)
	game.printTable()
	// remove answer to test
	game.movePiece(false)
	game.printTable()
 	res.send(appState.getFormattedString())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

appState = new AppState()

eventBus.on('new-move', function (source, target) {
	appState.setNewMov(source, target)
});

game = new Game(true)
game.printTable()
