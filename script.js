const button = document.querySelector(".start");
const plane = document.querySelector(".plane");

button.addEventListener("click", function(){
    plane.classList.remove("fly");
    void plane.offsetWidth;
    plane.classList.add("fly");
});