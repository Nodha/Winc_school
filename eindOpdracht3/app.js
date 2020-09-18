const menuIcon = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("change");
})

//red
document.getElementById("red").addEventListener("click", ()=>{
    setBackgroundColor('red');
  console.log("this has been clicked")
});

function setBackgroundColor(color){
  document.body.style.backgroundColor = color;
}

//white
document.getElementById("white").addEventListener("click", ()=>{
    setBackgroundColor('white');
  console.log("this has been clicked")
});

function setBackgroundColor(color){
  document.body.style.backgroundColor = color;
}

//pink
document.getElementById("pink").addEventListener("click", ()=>{
    setBackgroundColor('pink');
  console.log("this has been clicked")
});

function setBackgroundColor(color){
  document.body.style.backgroundColor = color;
}

//grey
document.getElementById("grey").addEventListener("click", ()=>{
    setBackgroundColor('grey');
  console.log("this has been clicked")
});

function setBackgroundColor(color){
  document.body.style.backgroundColor = color;
}

//green
document.getElementById("green").addEventListener("click", ()=>{
    setBackgroundColor('green');
  console.log("this has been clicked")
});

function setBackgroundColor(color){
  document.body.style.backgroundColor = color;
}

//purple
document.getElementById("purple").addEventListener("click", ()=>{
    setBackgroundColor('purple');
  console.log("this has been clicked")
});

function setBackgroundColor(color){
  document.body.style.backgroundColor = color;
}