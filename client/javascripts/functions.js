// jshint esversion: 6
//containsDuplicates
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

//revWords1

let revWords1 = str => {
  let words = [];
  words = str.match(/\S+/g);
  let result = "";
  for (var i = 0; i < words.length; i++) {
    result +=
      words[i]
        .split("")
        .reverse()
        .join("") + " ";
  }
  return result;
};
console.log(revWords1("Web App Dev"));

//revWords2
let revWords2 = str => {
  let result = "";
  str.split("").forEach(function(elem) {
    result = elem + result;
  });
  return result;
  console.log(revWords2("Delta Echo"));
};

//revWords3
let revWords3 = string => {
  let reverseString = "";
  for (var ch of string) {
    reverseString = ch + reverseString;
  }
  return reverseString;
  console.log(revWords3);
};
