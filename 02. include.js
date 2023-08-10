const lyrics = 'He rasul, bujhina ami rekhecho bedhe mure kon suthui';
let searchItem = 'Rasul';
let lyricsLowerCase = lyrics.toLowerCase();
let searchItemLower = searchItem.toLowerCase();

let doesExist = lyricsLowerCase.includes(searchItemLower)
console.log(doesExist)

let existOneLine = lyrics.toLowerCase().includes(searchItem.toLowerCase());
console.log(existOneLine);