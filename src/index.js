module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  console.log(arr)
  for (let i = 0; i < bracketsConfig.length; i++) {
    let x = i;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === bracketsConfig[x][0] && arr[j+1] === bracketsConfig[x][1]) {
        arr.splice(j,2);
        j = j - 2;
        i = - 1;
      }
    }           
  }
  if(arr.length === 0) {
      return true;
    } else {
      return false;
    }
}
