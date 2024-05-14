const repeatString = function(word, times) {
    if (word === '')
        return '';

    if(times === 0)
        return '';

    if(times > 0){
        var newString = ""
        for (let index = 0; index < times; index++) {
            newString = newString +  word;                      
        }

        return newString;
    }
    else{
        return 'ERROR'
    }

};

// Do not edit below this line
module.exports = repeatString;
