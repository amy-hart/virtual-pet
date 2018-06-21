const maximumFitness = 10;

function Pet(name){
	this.name = name,
	this.age = 0,
	this.hunger = 0,
	this.fitness = 10
}

Pet.prototype = {
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
	},
	walk: function(){
		if((this.fitness + 4) >= maximumFitness){
			this.fitness = 10;
		}else{
			this.fitness += 4;
		}
	},
	feed: function(){
		if((this.hunger - 3) <= 0){
			this.hunger = 0;
		}else{
			this.hunger -= 3;
		}
	},
	checkUp: function(){
		if(this.fitness <= 3){
			console.log("I need a walk");	
		}
		if(this.hunger >= 5){
			console.log("I am hungry");	
		}
		if((this.fitness <= 3) && (this.hunger >= 5)){
			console.log("I am hungry AND I need a walk");	
		}
		if(!(this.fitness <= 3) && !(this.hunger >= 5)){
			console.log("I feel great!");	
		}
	}
}

// myPet = new Pet("Bobby");

module.exports = {
	Pet
}


if the pet's fitness is 3 or less, it should return 'I need a walk'.
if the pet's hunger is 5 or more, it should return 'I am hungry'.
if both of the above are true, it should return 'I am hungry AND I need a walk'

if neither of the above are true, it should return 'I feel great!'