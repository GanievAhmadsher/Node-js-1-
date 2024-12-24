// * Homework ------------------------------------ start --

// ? Masala1 ------------------------------------ start --
function reverseArray(arr) {
  return arr.reverse();
}
// console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
// ? Masala1 ------------------------------------  end  --

// ? Masala2 ------------------------------------ start --
function findMax(a, b) {
  if (a > b) {
    return `${a}`;
  } else if (a == b) {
    return `Sonlar teng:`;
  } else if (a < b) {
    return `${b}`;
  }
}
// console.log(findMax(5, 10)); // 10
// console.log(findMax(10, 10)); // "Sonlar teng"
// ? Masala2 ------------------------------------  end  --

// ? Masala3 ------------------------------------ start --
function countVowels(str) {
  let unli = ["a", "e", "i", "o", "u"];
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let uI = str[i].toLowerCase();
    unli.forEach((item) => {
      if (item === uI) {
        sum++;
      }
    });
  }
  return sum;
}
// console.log(countVowels("Hello World")); // 3
// ? Masala3 ------------------------------------  end  --

// ? Masala4 ------------------------------------ start --
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
// console.log(factorial(5)); // 120
// ? Masala4 ------------------------------------  end  --

// ? Masala5 ------------------------------------ start --
function isPalindrome(str) {
  let str2 = str.split("").reverse().join("");
  return str2 === str;
}
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false
// ? Masala5 ------------------------------------  end  --

// ? Masala6 ------------------------------------ start --
function myToUpperCase(str) {
  return str.toUpperCase();
}
// console.log(myToUpperCase("hello world")); // "HELLO WORLD"
// ? Masala6 ------------------------------------  end  --

// ? Masala7 ------------------------------------ start --
function getPositiveNumbers(arr) {
  return arr.filter((value) => value >= 0);
}
// console.log(getPositiveNumbers([-1, 2, -3, 4])); // [2, 4]
// ? Masala7 ------------------------------------  end  --

// ? Masala8 ------------------------------------ start --
function findLongestWord(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0];
}
// console.log(findLongestWord("I love programming")); // "programming"
// ? Masala8 ------------------------------------  end  --

// ? Masala9 ------------------------------------ start --
function sumArray(arr) {
  return arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}
// console.log(sumArray([1, 2, 3, 4, 5])); // 10
// ? Masala9 ------------------------------------  end  --

// ? Masala10 ------------------------------------ start --
function findMin(arr) {
  return arr.sort((a, b) => a - b)[0];
}
// console.log(findMin([3, 5, 1, 8])); // 1
// ? Masala10 ------------------------------------  end  --

// * Homework ------------------------------------  end  --
