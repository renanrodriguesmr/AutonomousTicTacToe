class Mov {
	constructor(source, target){
		this.source = source
		this.target = target
	}
}

class Queue {
	constructor(){
		this.queue = []
	}

	addNewMov(source, target){
		const mov = new Mov(source, target)
		this.queue.push(mov)
	}

	dequeue(){
		if(this.queue.length == 0){
			return
		}

		this.queue.shift()
	}

	getFrontEncoded(){
		if(this.queue.length == 0){
			return "0,0,0"
		}

		const mov = this.queue[0]

		return "1"+","+mov.source+","+mov.target
	}
}

module.exports = Queue