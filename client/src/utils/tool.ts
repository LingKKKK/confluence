
/**
 * @createHash
 * @params {length: Number}
 * @return {hash: String}
 * @description 生成n位hash串
 */
 export const createHash = (hashLength: Number): String => {
  if (!hashLength || typeof Number(hashLength) != "number") {
    return '';
  }
  let ar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let hs = Array<String>();
  let hl = Number(hashLength);
  let al = ar.length;
  for (let i = 0; i < hl; i++) {
    hs.push(ar[Math.floor(Math.random() * al)]);
  }
  return hs.join("");
};

/**
 * @contrastArray
 * @params {arr1, arr2}
 * @return boolean
 * @description 对比两个数组是否全等
 */
export const contrastArray = (arr1, arr2) => {
  return arr1.toString() === arr2.toString();
};
