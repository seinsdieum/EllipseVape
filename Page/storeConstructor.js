//notifications
body.appendChild(NotFoundLight.msg)

//header
const header = document.querySelector("header")

const More = document.querySelector("a[id='mobileIcon']")




//dropdown

//dropdown burger
AddDefaultMobileDropdown(false, true)

//slider

//Grid operations

const gridItems = document.querySelectorAll("a .grid-item");
const textSearch = document.querySelector("input[id='Search']")

for(let i of gridItems) {
    i.classList.add("search-hidden")
    i.classList.add("search-shown")
}
function hideGridElements() {
    for(let i of gridItems) {
        i.classList.remove("search-shown")
    }
}

function showNecessaryGridElements(search) {
    if(!search) {
        for(let i of gridItems) i.classList.add("search-shown")

    }
    else {
        let f = false;
        for(let i of gridItems) {
            if(i.querySelector("h1").innerText.includes(search)) {
                i.classList.add("search-shown")
                f = true
            }
        }
        if(!f) NotFoundDark.Show()
    }
}

textSearch.addEventListener("input", () => {
    hideGridElements()
    showNecessaryGridElements(textSearch.value)
})




body.prepend(header)
