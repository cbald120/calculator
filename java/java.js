
let stor = '';

const buttons = document.querySelectorAll('#button')
result = "";

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
    


  //to do: need to ensure decimals are caculated. Also need to ensure that when user places new calculation after result it doesnt add to the result but starts new equation

  //decimals: https://stackoverflow.com/questions/2876536/precise-financial-calculation-in-javascript-what-are-the-gotchas ----3

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
    var rightVal = equal(stor.substring(expressionIndex + 1).trim());
    switch (stor[expressionIndex]) {
      case "+":
        document.getElementById('screen').innerHTML = (leftVal + rightVal).toFixed(2);
        return (leftVal + rightVal).toFixed(2);
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
