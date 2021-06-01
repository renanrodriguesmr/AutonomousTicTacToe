const express = require('express')
const app = express()
const port = 3000

class MeuEstado {
	constructor(){
		this.status = 0
		this.source = "X1"
		this.target = "G1"
	}

	setMessage(){
		this.status = 1
	}

	clearMessage(){
		this.status = 0
	}

	getFormattedString(){
		return this.status+","+this.source+","+this.target
	}
}

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

app.get('/pieces_news', (req, res) => {
 	res.send(meuEstado.getFormattedString())
})

app.get('/teste_update', (req, res) => {
	meuEstado.setMessage()
 	res.send(meuEstado.getFormattedString())
})

app.get('/teste_clear', (req, res) => {
	meuEstado.clearMessage()
 	res.send(meuEstado.getFormattedString())
})

app.post('/piece_changed', (req, res) => {
	meuEstado.clearMessage()
  	res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

meuEstado = new MeuEstado()
