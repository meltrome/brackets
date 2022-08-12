module.exports = function check(str, bracketsConfig) {

  let open = [];
  let pair = {};
  let stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {

    let bracketKey = bracketsConfig[i][1];
    let bracketValue = bracketsConfig[i][0];

    open.push(bracketsConfig[i][0]);
    pair[bracketKey] = bracketValue;
  }

  for (let i = 0; i < str.length; i++) {

    let curSym = str[i];

    if (stack.length && stack[stack.length - 1] === pair[curSym]);

    if (open.includes(curSym)) {
       stack.push(curSym);
    } else {
      if (stack.length === 0){
        return false;
      }
    
      let topElement = stack[stack.length - 1];

      if (pair[curSym] === topElement) {
        stack.pop();
      } else {
        return false;
      }  
    }
  }
  
  return stack.length == 0;

  

};