const lyrics = 'He rasul, bujhina ami rekhecho bedhe mure kon suthui';
let searchItem = 'rasul';
let searchIndex = lyrics.indexOf(searchItem);

if(searchIndex !== -1){
    console.log('Exist at position', searchIndex);
}
else{
    console.log('Doesn\'t exist');
}