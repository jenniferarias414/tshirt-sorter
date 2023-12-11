// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// // sml

// >>> tshirtSorter('smllms')
// // ssmmll

// Write your solution below:

// let string = ""
// let newString = ""

// function tshirtSorter (string) {
//     for (let i=0; i<string.length; i++){
//         if(string[i] === 's'){
//             newString.unshift('s')
//         } else if (string[i] === 'l') {
//             newString.push('l')
//         } else {
//             newString = string
//         }
//     }
//     return newString
// }


// console.log(tshirtSorter('smsmsmsls'))

// solution
// function tshirtSorter(str) {
//     let small = ""
//     let medium = ""
//     let large = ""
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === "s") {
//         small += "s"
//       } else if (str[i] === "m") {
//         medium += "m"
//       } else {
//         large += "l"
//       }
//     }
//     return small + medium + large
//   }

//   function tshirtSorter(tshirtPile) {
//     let sortedTshirts = [];
    
//     // Count the occurrences of each size
//     const countS = (tshirtPile.match(/s/g) || []).length;
//     const countM = (tshirtPile.match(/m/g) || []).length;
//     const countL = (tshirtPile.match(/l/g) || []).length;
  
//     // Use push and unshift to construct the sorted array
//     for (let i = 0; i < countS; i++) {
//       sortedTshirts.push('s');
//     }
  
//     for (let i = 0; i < countM; i++) {
//       sortedTshirts.push('m');
//     }
  
//     for (let i = 0; i < countL; i++) {
//       sortedTshirts.push('l');
//     }
  
//     return sortedTshirts.join('');
//   }

//s m and l are in reverse alphabetical order, can do this implicit return
//sort automatically puts in alpha order, reverse will invert that
  const tshirtSorter = str => str.split('').sort().reverse().join('')
  console.log(tshirtSorter('smsmsmsls'))
