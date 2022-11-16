function add(a ,b) {
   let result = a + b;
   return result
}

function subtract(a, b) {
    let result = a - b;
    return result
}

function mult(a, b){

}

function di(a, b){

}

const buttons = document.querySelectorAll('#button')
result = "";

buttons.forEach(button =>{
    button.addEventListener('click', function(){ //you might need to make this a so that it ends at an equals sign
      const currentHTML = document.getElementById('screen').innerHTML;
    const nextHTML = ' ' + currentHTML;
    document.getElementById('screen').innerHTML = nextHTML;
    document.getElementById('screen').innerHTML += button.value;
       
        console.log(button.value)
    })
})


//probably wont be able to display equals as it would require some rewrites
function equal() {

}

function clear() {

}









