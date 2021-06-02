const express = require('express')
const cors = require('cors')

const { Game } = require('./models')
const Queue = require('./state')

// API
const app = express()
const eventBus = require('js-event-bus')();
const port = process.env.PORT || 8080;

// https://hidden-spire-43960.herokuapp.com/

/*
app.use(cors({
	origin: 'https://renanrodriguesmr.github.io/AutonomousTicTacToe/',
	optionsSuccessStatus: 200
}))
*/

app.use(cors({
	credentials: 'true',  
    origin: '*', 
    methods: 'GET, POST, PUT, DELETE, OPTIONS', 
    allowedHeaders: '*'
}))

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

app.use(express.json())

app.use(
	express.urlencoded({
	  extended: true
	})
)

app.get('/pieces_news', (req, res) => {
 	res.send(queue.getFrontEncoded())
})

app.post('/piece_changed', (req, res) => {
	queue.dequeue()
  	res.sendStatus(200)
})

app.get('/table', (req, res) => {
	res.send(game.tableStatus())
})

app.post('/make_mov', (req, res) => {
	const postion = req.body.position - 1
	x = Math.floor(postion/3)
	y = postion%3

	game.movePiece(true, x, y)
	game.movePiece(false)

  	res.send(game.tableStatus())
})

app.post('/new_game', (req, res) => {
	game.restore()
	game = new Game(true)
 	res.send(game.tableStatus())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// QUEUE AND GAME

queue = new Queue()

eventBus.on('new-move', function (source, target) {
	queue.addNewMov(source, target)
});

game = new Game(true)
