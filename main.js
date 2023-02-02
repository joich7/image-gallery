const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');


const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

const imgAlt = ['pic of eyes', 'picture of a rock', 'picture of purple flowers', 'picture of egyptian art', 'picture of a moth ']

/* Declaring the alternative text for each image file */

/* Looping through images */
for(i = 0; i < imgArr.length ; i++){

    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/'+imgArr[i]);
    newImage.setAttribute('alt', imgAlt[i]);
    thumbBar.appendChild(newImage);

}

/* Wiring up the Darken/Lighten button */

function darkmode() {
    const dark


}
