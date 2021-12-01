let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let linksbtn = document.querySelector('.linksbtn');
let linksbtn2 = document.querySelector('.linksbtn2');
let linksbtn3 = document.querySelector('.linksbtn3');
let linksbtn4 = document.querySelector('.linksbtn4');




hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open');

});

times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});

linksbtn.addEventListener('click', function () {
    mobileNav.classList.remove('open');

});

linksbtn2.addEventListener('click', function () {
    mobileNav.classList.remove('open');

});

linksbtn3.addEventListener('click', function () {
    mobileNav.classList.remove('open');

});

linksbtn4.addEventListener('click', function () {
    mobileNav.classList.remove('open');

});




//     var project = setInterval(projectDone, 10)
//     var clients = setInterval(happyClients, 10)
//     var coffee = setInterval(cupsCoffee, 10)
//     let count1 = 1;
//     let count2 = 1;
//     let count3 = 1;


//     function projectDone() {
//         count1++
//     document.querySelector(" #number1").innerHTML = count1 if (count1 == 300) {clearInterval(project)}
// }
//     function happyClients() {
//         count2++ document.querySelector("#number2").innerHTML = count2 if
//     (count2 == 7) {clearInterval(clients)}
// } function cupsCoffee() {
//         count3++
//     document.querySelector("#number3").innerHTML = count3 if (count3 == 10) {
//         clearInterval(coffee)
//     }
// }