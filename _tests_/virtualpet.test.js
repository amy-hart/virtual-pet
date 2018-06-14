const { 
    petExists
} = require('../src/virtualpet');

describe('petExists', () => {
    it('returns true if pet exists', () => {
        expect(petExists).toEqual(true);


    })  
})