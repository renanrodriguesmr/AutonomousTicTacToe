class Player {
	constructor(isMachine){
		this._isMachine = isMachine;
	}

	isMachine(){
		return this._isMachine
	}
}

module.exports = Player