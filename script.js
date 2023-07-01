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

})