class StringManipulations {

    /**
     * Class for string manipulations
     * @param  {String} string  
     */
    constructor(string) {
        this.string = string;
    }

    /**
     * Returns the first substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findFirstMatch(subStr) {
        const first = subStr.split(' ')[0]
        return first
    };


    /**
     * Returns the last substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findLastMatch(subStr) {
        let last = subStr.split(',')[0]
        last = last.split(' ')
        return last[last.length - 1];
    };

    /**
     * Returns the fsubstring between two given other strings
     * @param  {String} subStr1  begining of the match
     * @param  {String} subStr2  ending of the match
     * @return {String}
     */
    substringBetweenMatches(subStr1, subStr2) {
        let combined = subStr1.split(' ')[0]
        combined = combined + ' ' + subStr2.split(' ')[0]
        return combined;

    }

    /**
    Given the string attribute of the class, 
    return a string made of the first 2
    and the last 2 chars of the original string.
    If the string length is less than 2, 
    return instead the empty string.
    * @return {String}
    */
    both_ends() {
        let result = '';

        if (this.string.length < 2) {
            return result
        } else{
            let position1 = this.string.length - 2;
            let position2 = this.string.length;
            let init = this.string.substring(0, 2);
            let final = this.string.substring(position1, position2);
            result = init + final;
            return result;
        }
    }

    /**
     Given a string, return a string
    where all occurences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1  
    * @return {String}
    */
    fix_start(str1) {
        const firstChar = str1.substring(0, 1);
        var char = new RegExp(firstChar, 'gi');
        let aux = '';
        let hidden = '';        
        
        aux = str1.replace(char, '');
        hidden = firstChar + aux

        return hidden
    }

}

module.exports = StringManipulations;
