var i = 0;
const button = document.getElementById('btn');
const yes_button = document.getElementById('yes');
const txt = document.getElementById('txt');
const main = document.getElementById('main');
const afterYes = document.getElementById('afterYes');
button.addEventListener('mouseover', function () {
    i+=1
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    if (i>10){
        txt.style.visibility = "visible";
    }
});
button.addEventListener('click', function () {
    alert('Merci d\'avoir dit oui ! ')
})

yes_button.addEventListener('click',function (){
    main.style.visibility = "hidden";
    afterYes.style.visibility = "visible";

})