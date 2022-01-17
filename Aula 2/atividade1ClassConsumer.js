const StringManipulations = require('./atividade1');

class AdressMatcher {
    /**
     * Class for creating adress and manipulating objects
     * @param  {string} adressText  string containing the address
     */
     constructor(adressText) {
        this.adressText = adressText;

        this.stringM = new StringManipulations(adressText);
     }

     /**
     * Searches for the first street name in the given address
     * @param  {string} streetName to be found in the address
     * @return street first name if found in address string
     */
     findStreetFirstName(streetName){
         return this.stringM.findFirstMatch(streetName);
     }

    /**
     * Searches for the street last name in the given address
     * @param  {string} streetName to be found in the address
     * @return street last name if found in address string
     */
    findStreetLastName(streetName){
        return this.stringM.findLastMatch(streetName);
    }

    /**
     * Searches for the the first words of 2 strings
     * @param  {String} subStr1  first name of street
     * @param  {String} subStr2  first name of neighborhood
     * @return the 2 found words
     */
    findStreetFNameAndNeighborhoodFName(streetFName, neighborhoodFName){
        return this.stringM.substringBetweenMatches(streetFName, neighborhoodFName);
    }

    /**
     * Searches for the first 2 and the last 2 chars of the original string
     * @return the found chars
     */
     findBothInitAndEnds(){
        return this.stringM.both_ends();
    }

     /**
     * Hides the street name for security
     * @param  {string} streetName to be hidden in the address
     * @return the modified address
     */
      hideStreetName(streetName){
        return this.stringM.fix_start(streetName);
    }
}

module.exports = AdressMatcher;
