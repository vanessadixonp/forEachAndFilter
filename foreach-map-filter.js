/*
function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

*/
function doubleValues(arr){
    return arr.map(function(number) {
        return number * 2;
    })
}


/*
 function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

*/
function onlyEvenValues(arr){
    return arr.filter(function(number) {
        return number % 2 === 0; 
    })

}


/*
 function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.



*/
function showFirstAndLast(arr){
  return arr.map(function(char) {
      return `${char[0]}${char[char.length-1]}`
  })

}


/*
function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

*/
function addKeyAndValue(arr,key,value){
     arr.forEach(function(obj){
         obj[key] = value;
    })
    console.log(arr)
    return arr;
}


/*
function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function is case insensitive so a lowercase letter and uppercase letter should count

*/
function vowelCount(str){
    let splitStr = str.split('');
    let obj = {};
    let vows = 'aeiou';
    splitStr.filter(function(char){
        let lowCases = char.toLowerCase();
        if(vows.indexOf(lowCases) !== -1) {
            if(obj[lowCases]) {
                obj[lowCases]+=1
            }else {
                obj[lowCases] = 1;
            }
        }
    })
    return obj;
}


/*
function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

*/

function doubleValuesWithMap(arr) {
    return arr.map(function(number) {
        return number * 2;
    })
}

/*
function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

*/

function valTimesIndex(arr){
    return arr.map(function(number,i) {
        return number * i;
    })
}


/*
 function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

*/

function extractKey(arr, key){
    return arr.map(function(obj) {
        return obj[key]
    })
}


/*
function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

*/

function extractFullName(arr){
    let fullName = [];
     arr.forEach(function(name) {
         fullName.push(`${name.first} ${name.last}`)
    })
    return fullName;
}


/*
 function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

*/

function filterByValue(arr, key) {
    return arr.filter(function(obj){
        return obj[key] !== undefined;
    })
    
}

/*
 function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
*/

function find(arr, searchValue) {
    return arr.filter(function(item){
        return item === searchValue
    })[0]
}

/*
 function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

*/

function findInObj(arr, key, searchValue) {
        return arr.filter(function(value){
            return value[key] === searchValue
        })[0]
}

/*
function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string is lowercased.


*/

function removeVowels(str) {
    let vow = 'aeiou';
    return str.toLowerCase().split('')
    .filter(function(letter) {
        return vow.indexOf(letter) === -1
    })
    .join('')
}

/*
function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled 
*/

function doubleOddNumbers(arr) {
    let newDouble = [];
     arr.map(function(num) {
      if(num % 2 !== 0) 
        newDouble.push(num * 2);
    })
    return newDouble;
}
