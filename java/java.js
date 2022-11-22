
let stor = '';

const buttons = document.querySelectorAll('#button')
result = "";



buttons.forEach(button =>{
    button.addEventListener('click', function(){ 

      document.getElementById('screen').innerHTML += button.value;
    const currentHTML = document.getElementById('screen').innerHTML;
     stor = ' ' + currentHTML;
    document.getElementById('screen').innerHTML = stor;
     })
    })


   /* function ple(value) { 
      document.getElementById('screen').innerHTML += value;
    const currentHTML = document.getElementById('screen').innerHTML;
     stor = ' ' + currentHTML;
    document.getElementById('screen').innerHTML = stor;
    }
console.log(stor)*/

//two paths forward: I need to find a way to keep stored value being erased with new clear button press or I need to create a new function to host under onlick for each of the inputs

//why is using the button redefining the value of stor? Everything works when done solely through the console.

function equal(stor) {
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
        document.getElementById('screen').innerHTML = leftVal + rightVal;
        return leftVal + rightVal;
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
