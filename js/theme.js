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
})

//fonts

const changeFontButtons = document.querySelectorAll("#changeFont")
const actualFontButton = document.querySelector("#actual-font")

changeFontButtons.forEach(button => {
    let value
    button.addEventListener("click", (e) => {
        value = e.target.value

        switch (value) {
            case "sans-serif":
                body.style.fontFamily = "Iconsolata"
                actualFontButton.innerHTML = "Sans"
                break
            case "serif":
                body.style.fontFamily = "Iora"
                actualFontButton.innerHTML = "Serif"
                break
            case "mono":
                body.style.fontFamily = "Inter"
                actualFontButton.innerHTML = "Mono"
                break    
            default:
                break;
        }
    })
})