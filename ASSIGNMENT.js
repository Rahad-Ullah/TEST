
function cubeNumber(number) {
    if(typeof number != 'number'){
        return 'Please input a number';
    }
    else{
        const result = Math.pow(number, 3);
        return result;
    }
}



function matchFinder(string1, string2) {
    if(typeof string1 != 'string' || typeof string2 != 'string'){
        return 'Please input a string';
    }
    else{
        let str1Lower = string1.toLowerCase();
        let str2Lower = string2.toLowerCase();
        if(str1Lower.includes(str2Lower)){
            return true;
        }
        else{
            return false;
        }
    }
}




