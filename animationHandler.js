

const allSideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("scroll-shown")
        }
        else entry.target.classList.remove("scroll-shown")
    })
})




const oneSideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {

            entry.target.classList.add(".scroll-shown")
        }
        else entry.target.classList.remove(".scroll-shown")
    })
})

window.addEventListener("load", () => {
    const scrollHiddenElems = document.querySelectorAll(".scroll-hidden")
    scrollHiddenElems.forEach((el) => allSideObserver.observe(el))
})