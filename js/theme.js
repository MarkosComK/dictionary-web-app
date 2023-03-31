const themeButton = document.querySelector("#change-theme")
const themeCircle = document.querySelector(".theme-button")
const body = document.querySelector("body")
let dark = false
themeButton.addEventListener("click" , (e) => {
    dark = !dark
    if(themeCircle.classList.contains("theme-button-switch")){
        themeCircle.classList.remove("theme-button-switch")
        themeButton.style = "background-color:"
        body.classList.remove("dark")
    } else {
        themeCircle.classList.add("theme-button-switch")
        themeButton.style = "background-color: var(--purple);"
        body.classList.add("dark")
    }
    console.log(dark)
})