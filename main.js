const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');


const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

const imgAlt = ['pic of eyes', 'picture of a rock', 'picture of purple flowers', 'picture of egyptian art', 'picture of a moth ']

/* Declaring the alternative text for each image file */

/* Looping through images */
for(let i = 0; i < imgArr.length ; i++){ //fogot let here and it broke the eventlistener not work

    const newImage = document.createElement('img');
    
    newImage.setAttribute('src', 'images/'+imgArr[i]);
    
    newImage.setAttribute('alt', imgAlt[i]);

    newImage.addEventListener("click", ()=>{
        displayedImage.setAttribute('src','images/'+imgArr[i])
        displayedImage.setAttribute('alt', imgAlt[i])
    });
    thumbBar.appendChild(newImage);
    
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", darkmode);

function darkmode() {
    if(btn.getAttribute("class") == "dark"){
        btn.setAttribute("class", 'light');
        btn.textContent = "Light";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else if(btn.getAttribute("class") == "light"){
        btn.setAttribute("class","dark")
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(78,0,0,0)";
    }
}