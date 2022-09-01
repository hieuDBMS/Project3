const openModal=document.getElementById("open-model")
const closeModal=document.getElementById("close-model")
const model=document.querySelector(".model")

openModal.addEventListener("click",() =>{
    model.classList.add("model-open")
})
closeModal.addEventListener("click",() => {
    model.classList.remove("model-open")
})