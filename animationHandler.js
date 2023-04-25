

const allSideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("scroll-shown")
        }
        else entry.target.classList.remove("scroll-shown")
    })
})

let observed = false


const oneSideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {

            entry.target.classList.add(".scroll-shown")
        }
        else entry.target.classList.remove(".scroll-shown")
    })
})
const scrollHiddenElems = document.querySelectorAll(".scroll-hidden")
if(window.innerWidth >= mobileWidth) {
    window.addEventListener("load", () => {

        scrollHiddenElems.forEach((el) => allSideObserver.observe(el))
    })
} else {
    scrollHiddenElems.forEach((el) => el.classList.remove("scroll-hidden"))
}