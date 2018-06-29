const maximumFitness = 10;

function Pet(name){
	this.name = name,
	this.age = 0,
	this.hunger = 0,
<<<<<<< HEAD
	this.fitness = 10,
	this.isAlive = true
}

Pet.prototype = {
	get isAlive() {
    	if (this.age < 30 && this.hunger < 10 && this.fitness > 0){
    		return true;
    	}else{
    		return false;
    	}
  	},
	status: function(){
		console.log("Your pet's name is " + this.name + ".");
		console.log(this.name + " is " + this.age + " years old.");
		console.log(this.name + " has a hunger level of " + this.hunger + ".");
		console.log(this.name + " has a fitness level of " + this.fitness + ".");
	},
	growUp: function(){
		this.age += 1;
		this.hunger += 5;
		this.fitness -= 3;
		if (!this.isAlive) {
  			throw new Error('Sorry, your pet has died. <(X_X)>');
=======
	this.fitness = 10
	this.children = [];
}

Pet.prototype = {
	get isAlive(){
    if(this.fitness <= 0 || this.hunger >= 10 || this.age >= 30){
    	return false;
    }else{
    	return true;
    }
  },  
	growUp: function(){
		if(this.isAlive === false){
			console.log("Your pet is no longer alive! <(X_X)>");
		}else{
			this.age += 1;
			this.hunger += 5;
			this.fitness -= 3;
>>>>>>> 6350221a277c9ddbb80c7374cd31004be3874620
		}
	},
	walk: function(){
		if(this.isAlive === false){
			console.log("Your pet is no longer alive! <(X_X)>");	
		}
		else if((this.fitness + 4) >= maximumFitness){
			this.fitness = 10;
		}else{
			this.fitness += 4;
		}
		if (!this.isAlive) {
  			throw new Error('Sorry, your pet has died. <(X_X)>');
		}
	},
	feed: function(){
		if(this.isAlive === false){
			console.log("Your pet is no longer alive! <(X_X)>");	
		}
		else if((this.hunger - 3) <= 0){
			this.hunger = 0;
		}else{
			this.hunger -= 3;
		}
		if (!this.isAlive) {
  			console.log("Sorry, your pet has died. <(X_X)>");
		}
	},
	checkUp: function(){
		if(this.isAlive === false){
			console.log("Your pet is no longer alive! <(X_X)>");	
		}
		else if((this.fitness <= 3) && (this.hunger >= 5)){
			console.log("I am hungry AND I need a walk! <(0_0)>");	
		}
		else if(!(this.fitness <= 3) && !(this.hunger >= 5)){
			console.log("I feel great! <(^_^)>");	
		}
		else if(this.fitness <= 3){
			console.log("I need a walk! <(0_0)>");	
		}
		else if(this.hunger >= 5){
			console.log("I am hungry! <(0_0)>");	
		}else{
			console.log("Error: Unable to checkup on pet");
		}
	},
	adoptChild: function(childName){
		console.log(childName);
	} 		
}

module.exports = {
	Pet
}

