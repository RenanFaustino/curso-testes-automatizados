const AdressMatcher = require('./atividade1ClassConsumer');

describe("String Manipulations class", () => {
    beforeAll(() => {
        classString1 = ('Its another string for the first activity');
        classString2 = ('I');

        string1 = ('General Osório');
        string2 = ('Satélite Íris');

        address = ('Don Pedro Primeiro, Jd das Palmeiras');
        addressToHide = ('Av. Moacir Novaes');
        stringM = new AdressMatcher(classString1);
        stringM2 = new AdressMatcher(classString2);
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

    it('Should returns the street name with hidden chars for security', () => {
        // arrange
        const output = 'Av. Mocir Noves';

        //act
        const actual = stringM.hideStreetName(addressToHide);

        //assert
        expect(actual).toEqual(output);
    });

    describe("Testing findBothInitAndEnds function", () => {
        it('Should return a string made of the first 2 and the last 2 chars of the original string', () => {
            // arrange
            const output = 'Itty';
    
            //act
            const actual = stringM.findBothInitAndEnds();
    
            //assert
            expect(actual).toEqual(output);
        });
    
        it('Should return a empty string', () => {
            // arrange
            const output = '';
    
            //act
            const actual = stringM2.findBothInitAndEnds();
    
            //assert
            expect(actual).toEqual(output);
        });
    });
});