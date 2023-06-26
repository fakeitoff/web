

// 导航栏切换，冒泡
const bar = document.querySelector(".menu-bar");
bar.addEventListener("click", function (ev) {
    if (ev.target.tagName === 'A') {
        const id = ev.target.dataset.id;
        // 将之前选中的撤销
        const element = document.querySelector(".menu-bar .nav-checked");
        element.classList.remove("nav-checked");

        // 选中当前
        const now = document.querySelector(`.menu-bar li:nth-child(${id})`);
        now.classList.add("nav-checked");

        // 更换内容区
        const oldDiv = document.querySelector(".main.main-checked");
        oldDiv.classList.remove("main-checked");
        const div = document.querySelector(`body>.main:nth-of-type(${id})`);
        div.classList.add("main-checked");
    }
});

// 轮换图
const imgFather = document.querySelector('.sideshow-img');
let imgArr = imgFather.children

const paginationFather = document.querySelector('.pagination');
let paginationArr = paginationFather.children;


let i = 0;
// 切换函数
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
// 鼠标进入停止播放
imgFather.addEventListener('mouseenter',function () {
   clearInterval(timeId);
});
// 鼠标离开继续播放
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

