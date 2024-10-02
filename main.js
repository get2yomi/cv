const container = document.getElementById("container");
const changeBackground = document.getElementById("change-background");

changeBackground.addEventListener("click", () => {
container.style.backgroundColor = getrandomColor();


}
)

function getrandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
}

// getrandomColor = () => { 
//     const letters= "0123456789ABCDEF";
//     let color="#";
//     for(let i=1; i<6; i++){
//         color += letters[Math.floor(Math.random()*16)];
//     }
//     return color;
// }