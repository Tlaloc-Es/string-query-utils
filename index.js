var searchFirstBackward = function (str, searchWord, firstBackWord){
        lastIndex = str.indexOf(searchWord);
        if(lastIndex != -1){
            str = reverseString(str.substring(0, lastIndex+1));
            firstIndex = str.indexOf(firstBackWord);

            if(firstIndex != -1){
                return reverseString(str.substring(0, firstIndex+1));
            }
        }
        return false;
    };

var reverseString = function (str){
        return str.split("").reverse().join("");
    };


module.exports = {
    searchFirstBackward: searchFirstBackward,
    reverseString: reverseString
};

