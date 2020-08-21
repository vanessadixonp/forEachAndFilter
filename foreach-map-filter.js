/*
function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

*/
function doubleValues(arr){
    let doubledValues = [];
     arr.map(number => {
        doubledValues.push(number * 2)
    })
    return doubledValues;
}

console.log(doubleValues([1,2,3]))


/*
 function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

*/
function onlyEvenValues(arr){
    let evenValues = [];
    arr.map(number => {
        if(number % 2 === 0) {
            evenValues.push(number)
        }
    })
    return evenValues;
}

console.log(onlyEvenValues([1, 2, 3, 4, 5, 6]))

/*
 function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.



*/
function showFirstAndLast(arr){
    let firstLast = [];
    arr.filter(name => {
        firstLast.push(`${name[0]}${name[name.length-1]}`)
    })

    return firstLast;
}

console.log(showFirstAndLast(['vanessa','javascript', 'believe', 'python']))


/*
function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

*/
function addKeyAndValue(arr,key,value){
    arr.forEach(kv => {
        kv[key] = value;
    })
    return arr;
    
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor', 'showe', 'mia'))
/*
function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

*/
function vowelCount(str){
   let word = str.split('');
   let vowArr = {};
   let vows = 'aeiou';
   word.forEach(letter => {
       const lowerLetter = letter.toLowerCase();
       if(vows.indexOf(lowerLetter) !== -1) {
           if(vowArr[lowerLetter]) {
            vowArr[lowerLetter]++;
           } else {
               vowArr[lowerLetter] = 1;
           }
       }
   })
   return vowArr;
}
console.log(vowelCount('CHOSEN'));


/*
function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

*/

function doubleValuesWithMap(arr) {
    let newArr = [];
    arr.map(number => {
        newArr.push(number * 2)
    })
    return newArr;
}

/*
function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

*/

function valTimesIndex(arr){
    let newArr = [];
    arr.map((value, index, arr) => {
        newArr.push(value * index);
    })
    return newArr;
}

console.log(valTimesIndex([1,2,3]))
/*
 function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

*/

function extractKey(arr, key){
    let newArr = [];
    arr.map(obj => {
        newArr.push(obj[key]);
    })
    console.log(newArr)
    return newArr;
}


/*
function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

*/

function extractFullName(arr){
    let fullName = [];
    arr.map(name => {
        console.log(name.last)
        fullName.push(`${name.first} ${name.last}`)

    })
    return fullName;
}

console.log(extractFullName([{first: "vanessa", last: "jones"}]))

/*
 function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

*/

function filterByValue(arr, key) {
   return arr.filter(name => {
       return name[key] !== undefined  
    })
}

/*
 function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.


*/

function find(arr, searchValue) {
    return arr.filter(number => {
       return number === searchValue
    })[0];
}

/*
 function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

*/

function findInObj(arr, key, searchValue) {
    return arr.filter(first => {
        return first[key] === searchValue
    })[0]
}

/*
function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string is lowercased.


*/

function removeVowels(str) {
    const vows = 'aeiou';
    return str.toLowerCase().split('')
      .filter(letter => {
        return vows.indexOf(letter) === -1;
      })
      .join("");
}

/*
function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled 
*/

function doubleOddNumbers(arr) {
   let oddArr = [];
    arr.map(number => {
        if(number % 2 != 0) {
            oddArr.push(number * 2)
        }
    })
    console.log(oddArr)
    return oddArr;
}
