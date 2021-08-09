let IDX: number = 256;
let HEX: number[] = [];
let SIZE: number = 256;
let BUFFER: string;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

function uid(len: number) {
  var i = 0,
    tmp = len || 11;
  if (!BUFFER || IDX + tmp > SIZE * 2) {
    for (BUFFER = "", IDX = 0; i < SIZE; i++) {
      BUFFER += HEX[(Math.random() * 256) | 0];
    }
  }

  return BUFFER.substring(IDX, IDX++ + tmp);
}

export default uid;