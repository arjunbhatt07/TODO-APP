// let btn = document.querySelector("button");

// btn.addEventListener("click" , function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
     
//     console.log("color updated");
// });

// function getRandomColor () {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red} , ${green}, ${blue})`;
//     return color;
// }

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click" , function () {
    let item = document.createElement("li");
    item.innerText = inp.value

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
     inp.value = "";
});

ul.addEventListener("click" , function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});








// let delbtns = document.querySelectorAll(".delete");
// for(delBtn of delbtns) {
//     delBtn.addEventListener("click" , function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();

//     });
// }
