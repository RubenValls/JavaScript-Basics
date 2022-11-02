/*
Without jQuery
const btn = document.querySelector("#alertBtn")
btn.addEventListener("click", () => {
    alert("You clicked the button.")
})
*/

//With jQuery
$(document).ready(() => {
    $("#alertBtn").click(() =>{
        alert("You clicked the button.")
    })
})
