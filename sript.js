
function btn(val) {
    console.log(val.innerText);
    const text = val.innerText
    const inpu = document.getElementById('input').value;
    document.getElementById('input').value=inpu + text;
}


function solution() {
    const inpu = document.getElementById('input').value;
    document.getElementById('input').value=eval(inpu);
}


