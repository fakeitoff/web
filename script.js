


const bar = document.querySelector(".menu-bar");
bar.addEventListener("click", function (ev) {
    if (ev.target.tagName === 'A') {
        const id = ev.target.dataset.id;
        const element = document.querySelector(".menu-bar .nav-checked");
        element.classList.remove("nav-checked");
        const now = document.querySelector(`.menu-bar li:nth-child(${id})`);
        now.classList.add("nav-checked");
        const oldDiv = document.querySelector(".main.main-checked");
        oldDiv.classList.remove("main-checked");
        const div = document.querySelector(`body>.main:nth-of-type(${id})`);
        div.classList.add("main-checked");
    }
});

const imgFather = document.querySelector('.sideshow-img');
let imgArr = imgFather.children
const paginationFather = document.querySelector('.pagination');
let paginationArr = paginationFather.children;

let i = 0;
function change () {
    i++;
    i = i >= imgArr.length ? 0 : i;
    for (const k of paginationArr) {
        k.style.background = '#fff';
    }
    for (const k of imgArr) {
        k.style.opacity = '0';
    }
    imgArr[i].style.opacity = '1';
    paginationArr[i].style.background = '#99cbff';
}

let timeId = setInterval(change, 3000);
imgFather.addEventListener('mouseenter',function () {
   clearInterval(timeId);
});
imgFather.addEventListener('mouseleave',function () {
    timeId = setInterval(change,3000);
})
const btnRight = document.querySelector('.sideshow .btn-right');
btnRight.addEventListener('click',change);
const btnLeft = document.querySelector('.sideshow .btn-left');
btnLeft.addEventListener('click',function () {
    i--;
    i = i < 0 ? imgArr.length-1 : i;

    for (const k of paginationArr) {
        k.style.background = '#fff';
    }
    for (const k of imgArr) {
        k.style.opacity = '0';
    }
    imgArr[i].style.opacity = '1';
    paginationArr[i].style.background = '#99cbff';
})

