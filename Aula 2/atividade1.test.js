const AdressMatcher = require('./atividade1ClassConsumer');

describe("String Manipulations class", () => {
    beforeAll(() => {
        string1 = ('General Osório');
        string2 = ('Satélite Íris');

        address = ('Don Pedro Primeiro, Jd das Palmeiras');
        stringM = new AdressMatcher();
    });
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should return the first name of street', () => {
        // arrange
        const output = 'Don';

        //act
        const actual = stringM.findStreetFirstName(address);

        //assert
        expect(actual).toEqual(output);
    });

    it('Should return the last name of street', () => {
        // arrange
        const output = 'Primeiro';

        //act
        const actual = stringM.findStreetLastName(address);

        //assert
        expect(actual).toEqual(output);
    });

    it('Should returns the first word of 2 strings', () => {
        // arrange
        const output = 'General Satélite';

        //act
        const actual = stringM.findStreetFNameAndNeighborhoodFName(string1, string2);

        //assert
        expect(actual).toEqual(output);
    });
});