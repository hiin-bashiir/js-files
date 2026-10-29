const header=document.querySelector("#head");
console.log(header);

const text=document.querySelector('.pra');
console.log(text);

const button=document.querySelector('button');
console.log(button);

function changetext() {
    header.textContent=('Welcome your first change by using Dom')
}

function second() {
    text.innerHTML=("Changing another function congrats!...")
}