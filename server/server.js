const express = require('express')
const app = express()
const eventBus = require('js-event-bus')();
const port = process.env.PORT || 8080;

// https://hidden-spire-43960.herokuapp.com/

const { Game } = require('./models')

const Queue = require('./state')

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

app.get('/pieces_news', (req, res) => {
 	res.send(queue.getFrontEncoded())
})

app.post('/piece_changed', (req, res) => {
	queue.dequeue()
  	res.sendStatus(200)
})

app.get('/teste_clear', (req, res) => {
	queue.dequeue()
 	res.send(queue.getFrontEncoded())
})

app.get('/teste1', (req, res) => {
	game.movePiece(true, 0, 0)
	game.printTable()
	game.movePiece(false)
	game.printTable()
 	res.send(queue.getFrontEncoded())
})

app.get('/teste2', (req, res) => {
	game.movePiece(true, 0, 1)
	game.printTable()
	game.movePiece(false)
	game.printTable()
 	res.send(queue.getFrontEncoded())
})

app.get('/teste3', (req, res) => {
	game.movePiece(true, 0, 2)
	game.printTable()
	game.movePiece(false)
	game.printTable()
 	res.send(queue.getFrontEncoded())
})

app.get('/teste4', (req, res) => {
	game.movePiece(true, 1, 0)
	game.printTable()
	game.movePiece(false)
	game.printTable()
 	res.send(queue.getFrontEncoded())
})

app.get('/teste5', (req, res) => {
	game.movePiece(true, 1, 1)
	game.printTable()
	game.movePiece(false)
	game.printTable()
 	res.send(queue.getFrontEncoded())
})

app.get('/teste6', (req, res) => {
	game.movePiece(true, 1, 2)
	game.printTable()
	game.movePiece(false)
	game.printTable()
 	res.send(queue.getFrontEncoded())
})

app.get('/teste7', (req, res) => {
	game.movePiece(true, 2, 0)
	game.printTable()
	game.movePiece(false)
	game.printTable()
 	res.send(queue.getFrontEncoded())
})

app.get('/teste8', (req, res) => {
	game.movePiece(true, 2, 1)
	game.printTable()
	game.movePiece(false)
	game.printTable()
 	res.send(queue.getFrontEncoded())
})

app.get('/teste9', (req, res) => {
	game.movePiece(true, 2, 2)
	game.printTable()
	game.movePiece(false)
	game.printTable()
 	res.send(queue.getFrontEncoded())
})

app.get('/new_game', (req, res) => {
	game = new Game(true)
	game.printTable()
 	res.send(queue.getFrontEncoded())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

queue = new Queue()

eventBus.on('new-move', function (source, target) {
	queue.addNewMov(source, target)
});

game = new Game(true)
game.printTable()
