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
     * @return street name if found in address string
     */
     findStreetFirstName(streetName){
         return this.stringM.findFirstMatch(streetName);
     }

    /**
     * Searches for the street last name in the given address
     * @param  {string} streetName to be found in the address
     * @return street name if found in address string
     */
    findStreetLastName(streetName){
        return this.stringM.findLastMatch(streetName);
    }

    /**
     * Searches for the the first word of 2 strings
     * @param  {String} subStr1  first name of street
     * @param  {String} subStr2  first name of neighborhood
     * @return the 2 found words
     */
    findStreetFNameAndNeighborhoodFName(streetFName, neighborhoodFName){
        return this.stringM.substringBetweenMatches(streetFName, neighborhoodFName);
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
