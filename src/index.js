module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  for (let i = 0; i < bracketsConfig.length; i++) {
    let x = bracketsConfig[i];   
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == x[0] && arr[j+1] == x[1]) {
        arr.splice(j,2);
        j -= 2;
        i = -1;
        if(!arr.length) {
          return true;
        };
      };
    };
  };
  return false;
}
