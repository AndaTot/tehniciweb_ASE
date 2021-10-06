// let sayHello = (name) => {
//   return `Hello, ${name}!`;
// };

// console.log(sayHello(process.argv[2]));

let concatenateStrings = (str) => {
  let str1 = JSON.parse(str);
  let str2 = "";
  for (let i = 0; i < str1.length; i++) {
    str2 = str2.concat(str1[i]);
  }
  return str2;
};
console.log(concatenateStrings(process.argv[2]));
