// ---------------  Toggle button Event  ------------------

let body = document.querySelector("body");
let toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (!body.classList.contains("dark")) {
        return localStorage.setItem("mode", light);
    } localStorage.setItem("mode", "dark");
});
toggle.addEventListener("click", () => toggle.classList.toggle("active"));


// --------- Nav bar changes background color when scrolling ---------

let header = document.querySelector('header');
document.addEventListener('scroll', () =>{
        if (window.scrollY > 0){
            header.classList.add('scrolled');
        } else{
            header.classList.remove('scrolled');
        }
});

// --------------------- hidden show effect ----------------------------

            // ------------- towards right ---------------
const observer = new IntersectionObserver ((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

             // ------------- towards left ---------------
const observer2 = new IntersectionObserver ((entries2) =>{
    entries2.forEach((entry2)=>{
        if(entry2.isIntersecting){
            entry2.target.classList.add('show2');
        } else{
            entry2.target.classList.remove('show2');
        }
    });
});

const hidden2Elements = document.querySelectorAll('.hidden2');
hidden2Elements.forEach((el) => observer2.observe(el));





// ------------------------------    ----------------------------------

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}