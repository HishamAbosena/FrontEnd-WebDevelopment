const nxtBtn = document.getElementById("nxt");
const prvBtn = document.getElementById("prv");
let circles = document.querySelectorAll(".circle");
circles = Array.from(circles);
// console.log(circles);
// console.log(nxtBtn);
// console.log(prvBtn);
// let btns = document.getElementsByClassName("btn");
const activeProgress = document.querySelector(".active-progress").style;
// console.log(activeProgress);
// console.log(btns);

// btns = Array.from(btns);
// console.log(btns);
let activeWidth = 0;
// console.log(activeWidth+=30)
// console.log(activeWidth)

const checkDisability = btn => {
    if (btn.innerText == "Prev" && activeWidth > 0)
        if (prvBtn.getAttribute("disabled") != null)
            prvBtn.attributes.removeNamedItem("disabled");
    if (btn.innerText == "Prev" && activeWidth == 0)
        prvBtn.setAttribute("disabled", "");
    if (btn.innerText == "Next" && activeWidth > 90) {
        nxtBtn.setAttribute("disabled", "");
        // console.log("setattribute:" + activeWidth);
    }
    if (btn.innerText == "Next" && activeWidth < 90) {
        if (nxtBtn.getAttribute("disabled") != null)
            nxtBtn.attributes.removeNamedItem("disabled");

    }

}
const switchActive = () => {
    switch (activeWidth) {
        case 0:
            circles.forEach((circle, i) => {
                if (i == 0)
                    return;
                else
                    circle.classList.remove("active")
            })
            break;
        case 33:
            circles.forEach((circle, i) => {
                if (i <= 1)
                    return;
                else
                    circle.classList.remove("active")
            })
            circles[1].classList.add("active");
            break;
        case 66:
            circles.forEach((circle, i) => {
                if (i <= 2)
                    return;
                else
                    circle.classList.remove("active")
            })
            circles[2].classList.add("active");
            break;
        case 99:
            circles.forEach((circle, i) => {
                if (i <= 3)
                    return;
                else
                    circle.classList.remove("active")
            })
            circles[3].classList.add("active");
            break;
    }
}
checkDisability(nxtBtn);
checkDisability(prvBtn);
const prevFn = () => {
    if (prvBtn.getAttribute("disabled") == null)
        activeProgress.width = `${activeWidth -= 33}%`;
    switchActive();

    // console.log(activeWidth);
    checkDisability(prvBtn);
    checkDisability(nxtBtn);

}
const nxtFn = () => {
    // console.log(nxtBtn.attributes)
    if (nxtBtn.getAttribute("disabled") == null) {
        activeProgress.width = `${activeWidth += 33}%`;
        switchActive();
        checkDisability(nxtBtn);
        checkDisability(prvBtn);
        // console.log(activeWidth)
    }

}
// btns.forEach(btn=>{
//     addEventListener("click",)
// })
nxtBtn.addEventListener("click", nxtFn);
prvBtn.addEventListener("click", prevFn);