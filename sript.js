
function btn(val) {
    console.log(val.innerText);
    const text = val.innerText
    const inpu = document.getElementById('input').value;
    document.getElementById('input').value=inpu + text;
}

function less(val) {
    const input = document.getElementById('input').value;
    document.getElementById('input').value=input.slice(0, input.length-1);
    console.log(val.value)
}

function solution() {
    const input = document.getElementById('input').value;
    document.getElementById('input').value=eval(input);
}
function remove() {
    const input = document.getElementById('input').value;
    document.getElementById('input').value="";
}
// function operation(type) {



//     const input = document.getElementById('input').value;
//     document.getElementById('input').value="";
// }

