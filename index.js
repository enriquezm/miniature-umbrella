const uid = require("./uid");
const adjs = require("./adjs");
const nouns = require("./nouns");

function getRandomIndex(sizeOfArray) {
  return Math.floor(Math.random() * sizeOfArray);
}

function convertToCapitalCase(stringToConvert) {
  const upper = stringToConvert.toLowerCase().charAt(0).toUpperCase();
  const remain = stringToConvert.slice(1);

  return upper + remain;
}

const first = adjs[getRandomIndex(adjs.length)];
const last = convertToCapitalCase(nouns[getRandomIndex(nouns.length)]);
const generatedUid = uid(140);

console.log(`New user generated: ${first}${last}`);
console.log(`With mini_uID: ${generatedUid.slice(0, 6)}`);
console.log(`long_uID: ${generatedUid}`);
