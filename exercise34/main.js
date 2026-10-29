

function addElement() {
    const list = document.querySelector("#list");
    const newItem = document.createElement("li");
        newItem.textContent="New Item";
        list.appendChild(newItem);
}

function removeElement() {
    const list = document.querySelector("#list");
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
}
