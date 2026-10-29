function changeImage() {
    const image3 = document.querySelector('#image3');

    const url = prompt("Please enter your image url")
    const borderColor = prompt("Please enter image porder color")
    const width = prompt("Enter image width in px")
    const height = prompt("Enter image hight in px")
    const borderRadius = prompt("Enter image borderRadius in px")

    image3.setAttribute('src', url);
    image3.style.border = `2px solid ${borderColor}`;
    image3.style.width = `${width}px`;
    image3.style.height = `${height}px`;
    image3.style.borderRadius = `${borderRadius}px`;
    image3.style.padding = "10px";
    image3.style.backgroundColor = '#cfc2dc';

    // Image.setAttribute('src', 'https://plus.unsplash.com/premium_photo-1661963063875-7f131e02bf75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')

    // image.style.border = '2px solid red';
    // image.style.padding = "10px";
    // image.style.backgroundColor = '#cfc2dc';
}