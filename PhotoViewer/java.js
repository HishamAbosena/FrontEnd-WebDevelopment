// const container=document.getElementById("container");
let panels = document.getElementsByClassName("panel");
console.log(panels);
panels = Array.from(panels);
console.log(panels);

const switchClasses = elm => {
    console.log(elm);
    
    panels.forEach((element,i) => {
        // console.log(`element ${i}`,element)       
        element.classList.remove("active");
        elm==element?elm.classList.add("active"):"";
    });
}

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        switchClasses(panel);
    })
})
// container.addEventListener("click",switchClasses);