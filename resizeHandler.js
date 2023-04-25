
function SwitchToMobile() {
    for(let el of document.querySelectorAll(".banner-image")) {
        let text = el.style.backgroundImage
        let charText = []

            for(let i = 0; i < text.length; i++) {
                if (i === text.length-7) {
                    charText.push('2')
                } else if (i === text.length-8) {
                    charText.push('1')
                } else if (i === text.length-9) {
                    charText.push('_')
                } else if (i === text.length-10) {
                    charText.push('9')
                }
                else charText.push(text[i])
            }

        el.style.backgroundImage = charText.join('')
        el.classList.add("mobile-aspect-ratio")
    }
}

function SwitchToDesktop() {
    for(let el of document.querySelectorAll(".banner-image")) {
        let text = el.style.backgroundImage
        let charText = []
            for(let i = 0; i < text.length; i++) {
                if (i === text.length-7) {
                    charText.push('9')
                } else if (i === text.length-8) {
                    charText.push('_')
                } else if (i === text.length-9) {
                    charText.push('1')
                } else if (i === text.length-10) {
                    charText.push('2')
                }
                else charText.push(text[i])
            }


        text = charText.join('')
        el.style.backgroundImage = text
        el.classList.remove("mobile-aspect-ratio")
    }
}

window.addEventListener("load", () => {
    if( window.innerWidth < mobileWidth ) {
        SwitchToMobile()
    }
    if( window.innerWidth >= mobileWidth) {
        SwitchToDesktop()
    }
})

if( window.innerWidth < mobileWidth ) {
    SwitchToMobile()
} else {
    SwitchToDesktop()
}
