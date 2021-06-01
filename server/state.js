class AppState {
	constructor(){
		this.status = 0
		this.source = "X1"
		this.target = "G1"
	}

	setNewMov(source, target){
		this.status = 1
		this.source = source
		this.target = target
	}

	clear(){
		this.status = 0
	}

	getFormattedString(){
		return this.status+","+this.source+","+this.target
	}
}

module.exports = AppState