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
        return 'Please input string only';
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



function sortMaker(arr) {
    const element1 = arr[0];
    const element2 = arr[1];

    if(element1 < 0 || element2 < 0){
        return 'Invalid Input';
    }
    else if(element1 == element2){
        return 'equal';
    }
    else{
        return [Math.max(element1, element2), Math.min(element1, element2)];
    }
}



function findAddress(obj) {
    let prop1 = obj.street;
    let prop2 = obj.house;
    let prop3 = obj.society;

    if(prop1 == undefined){
        prop1 = '__';
    }
    if(prop2 == undefined){
        prop2 = '__';
    }
    if(prop3 == undefined){
        prop3 = '__';
    }
    const output = prop1 + ',' + prop2 + ',' + prop3;
    return output;
}



function canPay(changeArray, totalDue) {
    let myMoney = 0;
    for(let i = 0; i < changeArray.length; i++){
        let coin = changeArray[i];
        myMoney += coin;
    }
    if(myMoney >= totalDue){
        return true;
    }
    else{
        return false;
    }
}