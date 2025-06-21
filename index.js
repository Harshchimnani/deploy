// JavaScript for Slider
let sevetheme = localStorage.getItem('theme') || 'light';
document.body.className = sevetheme;

const togglelight = document.getElementById("togglelight");
const toggledark = document.getElementById("toggledark");

togglelight.addEventListener("click", function() {
    document.body.className = 'light';
    localStorage.setItem('theme', 'light');
    togglelight.classList.add('active');
    toggledark.classList.remove('active');
});

toggledark.addEventListener("click", function() {
    document.body.className = 'dark';  // Corrected from 'light' to 'dark'
    localStorage.setItem('theme', 'dark');
    toggledark.classList.add('active');
    togglelight.classList.remove('active');  // Removed active class from togglelight
});

if (sevetheme === 'light') {  // Fixed typo from 'seveteme' to 'sevetheme'
    togglelight.classList.add('active');
} else {
    toggledark.classList.add('active');
}

let baricon = document.getElementById("bar");
let ul = document.querySelector("ul");
baricon.addEventListener("click" , function(){
    ul.classList.toggle("showitem");
    if(ul.className=="showitem"){
        baricon.className="fa-solid fa-xmark";
    }
    else{
        baricon.className="fa-solid fa-bars"
    }
})
let slides = document.querySelectorAll(".slide");
let count = 0;

// Set initial position for each slide
slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

function slider() {
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
}

// Auto-slide every 2 seconds
setInterval(function () {
    count++;
    if(count == slides.length) {
        count = 0;
    }
    slider();
}, 2000);

// Optional: Add manual controls (Next/Previous)
document.querySelector(".next").addEventListener("click", function() {
    count++;
    if(count == slides.length) {
        count = 0;
    }
    slider();
});

document.querySelector(".prev").addEventListener("click", function() {
    count--;
    if(count < 0) {
        count = slides.length - 1;
    }
    slider();
});
// let sevetheme = localStorage.getItem('theme') || 'light' ;
// document.body.className = sevetheme;
// const togglelight = document.getElementById("togglelight");
// const toggledark = document.getElementById("toggledark");

// togglelight.addEventListener("click", function(){
//     document.body.className = 'light';
//     localStorage.setItem('theme','light');
//     togglelight.classList.add('active');
//     toggledark.classList.remove('active');

// })
// toggledark.addEventListener("click", function(){
//     document.body.className = 'light';
//     localStorage.setItem('theme','dark');
//     toggledark.classList.add('active');
//     toggledark.classList.remove('active');
    
// })
// if (seveteme === 'light') {
//     togglelight.classList.add('active');

// } else {
//     toggledark.classList.add('active');
// }
