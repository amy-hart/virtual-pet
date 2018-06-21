const { 
    Pet
} = require('../src/virtualpet.js');

describe('Pet', () => {
  it('Returns a pet with the correct given name', () => {
    const newPet = new Pet('Fido');
    expect(newPet.name).toEqual('Fido');
  });
  it('Returns a pet with the starting age of 0', () => {
    const newPet = new Pet("Fido");
    expect(newPet.age).toEqual(0);
  });
  it('Returns a pet with the hunger level of 0', () => {
    const newPet = new Pet("Fido");
    expect(newPet.hunger).toEqual(0);
  });
  it('Returns a pet with the fitness level of 10', () => {
    const newPet = new Pet("Fido");
    expect(newPet.fitness).toEqual(10);
  });
  it('Increments age by 1', () => {
    const newPet = new Pet("Fido");
    newPet.growUp();
    expect(newPet.age).toEqual(1);
  });
  it('Increments hunger by 1', () => {
    const newPet = new Pet("Fido");
    newPet.growUp();
    expect(newPet.hunger).toEqual(5);
  });
  it('Decrement fitness by 3', () => {
    const newPet = new Pet("Fido");
    newPet.growUp();
    expect(newPet.fitness).toEqual(7);
  });
});

describe('Walk', () => {
	it('Increments fitness by 4, and caps fitness at 10', () => {
	    const jim = new Pet("Fido");
	    jim.fitness = 10;
	    jim.walk();

	    const bob = new Pet("Fido");
	    bob.fitness = 7;
	    bob.walk();

	    const billy = new Pet("Fido");
	    billy.fitness = 4;
	    billy.walk();

	    const ben = new Pet("Fido");
	    ben.fitness = 6;
	    ben.walk();

    expect(jim.fitness).toEqual(10);
    expect(bob.fitness).toEqual(10);
    expect(billy.fitness).toEqual(8);
    expect(ben.fitness).toEqual(10);
  });
});

describe('Feed', () => {
	it('Decrements hunger by 3, and caps hunger at 0', () => {
	    const jim = new Pet("Fido");
	    jim.hunger = 0;
	    jim.feed();

	    const bob = new Pet("Fido");
	    bob.hunger = 5;
	    bob.feed();

    expect(jim.hunger).toEqual(0);
    expect(bob.hunger).toEqual(2);
  });
});