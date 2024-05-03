const btn1 = document.querySelector(".bt1")
const btn2 = document.querySelector(".bt2")
const btn3 = document.querySelector(".bt3")
const btn4 = document.querySelector(".bt4")
const btn5 = document.querySelector(".bt5")
const submit = document.getElementById("submit")
const ratingContainer = document.querySelector(".r-container")
const tkContainer = document.querySelector(".t-container")
const rate = document.querySelector(".rate")

let rating = 0;


btn1.addEventListener("click",()=>{
    console.log(btn1.value)
    rating = btn1.value
    btn1.classList.toggle("active")
})
btn2.addEventListener("click",()=>{
    
    rating = btn2.value
    btn2.classList.toggle("active")
})
btn3.addEventListener("click",()=>{
    
    rating = btn3.value
    btn1.classList.toggle("active")
})
btn4.addEventListener("click",()=>{
     
    rating = btn4.value
    btn4.classList.toggle("active")
})
btn5.addEventListener("click",()=>{
    console.log(btn1.value)
    rating = btn5.value
    btn5.classList.toggle("active")
})

submit.addEventListener("click" , ()=>{
    ratingContainer.style.display = "none"
    tkContainer.style.display = "flex"
    dis.innerHTML =You seleted ${rating} out 5
    console.log("20")
})