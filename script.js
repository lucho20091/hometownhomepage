const guideBTN = document.querySelector("#show")
const picture = document.querySelector("#picture")
const name2 = document.querySelector("#name")
const backgroundcard = document.querySelector("#background-card")
const paragraph = document.querySelector("#paragraph")

guideBTN.addEventListener("click", () =>{
    picture.classList.toggle("guide-hide")
    name2.classList.toggle("guide-hide")
    if (picture.classList.contains("guide-hide")){
    guideBTN.textContent = "Show Guide"
    paragraph.textContent = "I have lived in Colombia for 5 years, and I will teach you all there is to know"
    } else {
        guideBTN.textContent = "Hide señor Pillo"
        paragraph.textContent = "Lets explore Colombia together, my name is Pillo"
    }
})