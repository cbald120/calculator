
let stor = '';

const buttons = document.querySelectorAll('#button')

 let toggle = false;
 let stop = false; //this will dictate whether the screen will allow more characters

buttons.forEach(button =>{
    button.addEventListener('click', function(){ 
      if (stor.length >= 40) {
        return
      }
      if (toggle == true) { 
        clearI() 
    toggle = !toggle;}
      if (stop == true) {
        return
      }
    document.getElementById('screen').innerHTML += button.value;
    const currentHTML = document.getElementById('screen').innerHTML;
     stor = ' ' + currentHTML;
    document.getElementById('screen').innerHTML = stor;
      }

     )})
    
function equal(stor) {
  toggle = !toggle;
  var expressionIndex = Math.max(stor.lastIndexOf("-"), stor.lastIndexOf("+"));
  if (expressionIndex === -1) {
    expressionIndex = Math.max(stor.lastIndexOf("*"), stor.lastIndexOf("/"));
  }
  if (expressionIndex === -1) {
    var num = Number.parseInt(stor.trim());
    if (isNaN(num)) {
      throw Exception("not a valid number");
    } else {
      return num;
    }
  } else {
    var leftVal = equal(stor.substring(0, expressionIndex).trim());
    let leftVal1 = Number(leftVal);
    var rightVal = equal(stor.substring(expressionIndex + 1).trim());
    let rightVal2 = Number(rightVal);
    switch (stor[expressionIndex]) {
      case "+":
        document.getElementById('screen').innerHTML = leftVal1 + rightVal2;//this creates the decimal positions but only adds zeroes. Completely ignores values in tenths place
        return leftVal1 + rightVal2;
      case "-":
        document.getElementById('screen').innerHTML = leftVal - rightVal;
        return leftVal - rightVal;
      case "*":
        document.getElementById('screen').innerHTML = leftVal * rightVal;
        return leftVal * rightVal;
      case "/":
        document.getElementById('screen').innerHTML = leftVal / rightVal;
        return leftVal / rightVal;
  
    }
  }
}


function parse(stor) {
  var expressionIndex = Math.max(stor.lastIndexOf("-"), stor.lastIndexOf("+"));
  if (expressionIndex === -1) {
    expressionIndex = Math.max(stor.lastIndexOf("*"), stor.lastIndexOf("/"));
  }
  if (expressionIndex === -1) {
    var num = Number.parseInt(stor.trim());
    if (isNaN(num)) {
      throw Exception("not a valid number");
    } else {
      return { type: "number", value: num };
    }
  } else {
    var leftNode = parse(stor.substring(0, expressionIndex).trim());
    var rightNode = parse(stor.substring(expressionIndex + 1).trim());
    return {
      type: "expression",
      value: stor[expressionIndex],
      left: leftNode,
      right: rightNode
    };
  }
}

    


//clears current inner.HTML
var og = document.getElementById("screen"); 
var old = og.innerHTML; 

function clearI() {
   og.innerHTML = old;
   stor = old;
}
