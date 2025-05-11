/* Selecting objects in HTML and defining variables*/

const circle = document.getElementById("animatedCircle");
const select = document.getElementById("selectItem");
const button = document.getElementById("animateBtn");


/* If there's a saved preference, set the dropdown to that value*/

const savedAnimation = localStorage.getItem("selectedAnimation");
if (savedAnimation){
    select.value = savedAnimation
};

button.addEventListener("click", () => {
    const selected = select.value;

 /*Saving the selected animation in localStorage*/

localStorage.setItem("selectedAnimation", selected)

/*Remove pre existing classess if already existed*/

circle.classList.remove("spin", "bounce", "shake");

/* Tricking the browser tor estart the animation -reflow*/

void circle.offsetWidth;

/* Adding the selected animation classes to the DOM*/
 circle.classList.add(selected);

 /* removing the class fro classlist after animations ended*/

 setTimeout(() => {
    circle.classList.remove(selected);
 },3000);


});