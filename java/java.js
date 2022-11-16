function add(storage) {
   let result = a + b;
   return result
}

function subtract() {
    let result = a - b;
    return result
}

function mult(a, b){

}

function di(a, b){

}

let storage = [];

const buttons = document.querySelectorAll('#button')
result = "";

buttons.forEach(button =>{
    button.addEventListener('click', function(){ //you might need to make this a so that it ends at an equals sign
    const currentHTML = document.getElementById('screen').innerHTML;
    const nextHTML = ' ' + currentHTML;
    document.getElementById('screen').innerHTML = nextHTML;
    document.getElementById('screen').innerHTML += button.value;
   storage.push(button.value) 
        console.log(storage)
    })
})

/*function showOld() {
    alert('test');
    }*/
//alternatively, i might need to assign the value on click of operators to a function that gets exectuted when equal function is carried out

//storage is an array. Need to loop through and find solutiosn accordingly
let eq = document.querySelectorAll('#button2');
function equal(storage) {
    for (var i = 0; i < storage.length; i++) {
       let total = storage.reduce(0);
    }
    
    let solution = document.getElementById('screen').innerHTML;
}

let but = document.querySelectorAll('#button1');
var og = document.getElementById("screen"); 
var old = og.innerHTML;

function clearI() {
   og.innerHTML = old;
}
