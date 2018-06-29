const {Pet} = require('../src/virtualpet.js');

describe('Pet', () => {
  it('Returns a pet with the correct properties', () => {
    const newPet = new Pet('Fido');
    expect(newPet.name).toEqual('Fido');
    expect(newPet.age).toEqual(0);
    expect(newPet.hunger).toEqual(0);
    expect(newPet.fitness).toEqual(10);
  });
});

describe('growUp', () => {
  it('Increments age by 1, increments hunger by 5, and decrements fitness by 3', () => {
    const newPet = new Pet("Fido");
    newPet.growUp();
    expect(newPet.age).toEqual(1);
    expect(newPet.hunger).toEqual(5);
    expect(newPet.fitness).toEqual(7);
  });
});

describe('walk', () => {
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

describe('feed', () => {
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

describe('checkUp', () => {
  it('Tells the owner what action they need to take according to the pets current status', () => {

    // Testing first if statement
  
    // Triggers "I need a walk"
    const jim = new Pet("Jim");
    jim.fitness = 2;
    jim.hunger = 4;
    jim.checkUp();  

    // Triggers "I am hungry" 
    const rob = new Pet("Rob");
    rob.fitness = 4;
    rob.hunger = 6;
    rob.checkUp();

    // Testing third and fourth if statements
    // Triggers "I am hungry AND I need a walk"
    const bob = new Pet("Bob");
    bob.fitness = 3;
    bob.hunger = 5;
    bob.checkUp();

    // Triggers "I am hungry AND I need a walk"
    const mavis = new Pet("Mavis");
    mavis.fitness = 2;
    mavis.hunger = 6;
    mavis.checkUp();

    // Triggers fourth resposne
    // Triggers "I feel great!"
    const ken = new Pet("Ken");
    ken.fitness = 4;
    ken.hunger = 4;
    ken.checkUp();

    expect(jim.fitness <= 3).toBe(true) && expect(jim.hunger >= 5).toBe(false);
    expect(rob.fitness <= 3).toBe(false) && expect(rob.hunger >= 5).toBe(true);
    expect(bob.fitness <= 3).toBe(true) && expect(bob.hunger >= 5).toBe(true);
    expect(mavis.fitness <= 3).toBe(true) && expect(mavis.hunger >= 5).toBe(true);
    expect(ken.fitness <= 3).toBe(false) && expect(ken.hunger >= 5).toBe(false);    
  }); 
});

describe('isAlive', () => {
  it('Checks if the pet is DOA', () => {

    // Pet dies of poor fitness
    const jim = new Pet("Jim");
    jim.fitness = 0;
    jim.hunger = 9;
    jim.age = 29;

    // Pet dies of hunger
    const rob = new Pet("Rob");
    rob.fitness = 4;
    rob.hunger = 11;
    rob.age = 29;

    // Pet dies from old age
    const bob = new Pet("Bob");
    bob.fitness = 1;
    bob.hunger = 9;
    bob.age = 30;

    // Pet dies from hunger and old age
    const mavis = new Pet("Mavis");
    mavis.fitness = 5;
    mavis.hunger = 11;
    mavis.age = 30;

    // Pet lives
    const ken = new Pet("Ken");
    ken.fitness = 7;
    ken.hunger = 4;
    ken.age = 12;

    expect(jim.isAlive).toBe(false);
    expect(rob.isAlive).toBe(false);
    expect(bob.isAlive).toBe(false);
    expect(mavis.isAlive).toBe(false);
    expect(ken.isAlive).toBe(true);    
  }); 
});

describe('adoptChild', () => {
  it('Checks if the pet is DOA', () => {
    const parent = new Pet("Jack");
    const child = new Pet("Joanie");
    parent.adoptChild(child);
  
    expect(parent.children).toEqual([{ name: 'Joanie', age: 0, hunger: 0, fitness: 10, children: [] }]); 
  }); 
});



