import adjs from './adj';
import nouns from './noun';
import uid from './uid';

type NewUser = {
  uName: string,
  mini_uID: string,
  long_uID: string,
};

export function generateName(): NewUser {
    const first = adjs[getRandomIndex(adjs.length)];
    const last = convertToCapitalCase(nouns[getRandomIndex(nouns.length)]);
    const generatedUid = uid(140);

    return {
      'uName': `${first}${last}`,
      'mini_uID': `${generatedUid.slice(0, 6)}`,
      'long_uID': `${generatedUid}`,
    };
}

function getRandomIndex(sizeOfArray: number): number {
  return Math.floor(Math.random() * sizeOfArray);
}

function convertToCapitalCase(stringToConvert: string): string {
  const upper: string = stringToConvert.toLowerCase().charAt(0).toUpperCase();
  const remain: string = stringToConvert.slice(1);

  return upper + remain;
}

