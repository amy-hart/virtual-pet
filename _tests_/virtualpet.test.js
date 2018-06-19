const { 
    Pet
} = require('../src/virtualpet.js');

describe('Pet', () => {
  it('returns a pet with a name', () => {
    const newPet = new Pet('Fido');
    expect(newPet).toEqual({
      name: 'Fido',
    });
  });
});