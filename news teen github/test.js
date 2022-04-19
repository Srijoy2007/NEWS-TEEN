const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile-menue')

hamburger.addEventListener('click'  , function () {
    this.classList.toggle('is-active');
    mobile.classList.toggle('is-active');
});
function alert(){
    
    alert("I am an alert box!");
}