const inputs = document.querySelectorAll(".dado");
const btn = document.getElementById("btn");
const errorMessage = document.querySelectorAll(".erro");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    inputs.forEach((input, indice) => {
        if(input.value === ""){
            input.classList.add("invalido")
            input.classList.remove("valido")
            errorMessage[indice].classList.add("visivel")
        } else {
            input.classList.add("valido")
            input.classList.remove("invalido")
            errorMessage[indice].classList.remove("visivel")
        }
    })
})

inputs.forEach((input, indice) => {
    input.addEventListener("change", e => {
        if(e.target.value === "" ) {
            e.target.classList.add("invalido")
            errorMessage[indice].classList.add("visivel")
        } else {
            e.target.classList.remove("invalido")
        }
    }) 

    input.addEventListener("change", e => {
        if(e.target.value !== "" ) {
            e.target.classList.add("valido")
            errorMessage[indice].classList.remove("visivel")
        } else {
            e.target.classList.remove("valido")
        }
    }) 
})