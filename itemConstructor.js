//notifications
body.appendChild(ClubInviter.msg)

//header
const header = document.querySelector("header")

const Club = document.querySelector("a[id='clubIcon']")
const More = document.querySelector("a[id='mobileIcon']")

Club.addEventListener("mouseenter", () => {
    ClubInviter.Show()
})

//item elements

const deviceParam = new URLSearchParams(window.location.search).get('item')
if(!deviceParam) {
    window.location.replace("notFound.html")
}
const devicePresent = document.querySelector("div[id='devicePresent']")
const deviceDescription = document.querySelector("div[id='deviceDescription']")
const deviceSets = document.querySelector("div[id='deviceSets']")
const deviceStore = document.querySelector("a[id='deviceStore']")
function setDevice(xml) {

    let xmlDoc = xml.responseXML;
    const element = xmlDoc.querySelector(`item[name=${deviceParam}]`)
    if(element) {
        const capsContainer = document.querySelector(".caps")
        document.title = `${element.children[0].innerHTML} - Ellipse`
        devicePresent.querySelector("h1").innerText = element.children[0].innerHTML
        devicePresent.style.backgroundImage = `url(${element.children[1].innerHTML})`
        deviceDescription.querySelector("h1").innerText = element.children[3].innerHTML
        deviceDescription.querySelector("p").innerText = element.children[4].innerHTML
        deviceDescription.style.backgroundImage = `url(${element.children[6].innerHTML})`
        console.log(element.children[6].innerHTML)

        deviceSets.querySelector("h1").innerText = "Характеристики"
        deviceSets.querySelector("p").innerText = element.children[5].innerHTML
        deviceStore.href = `store.html?item=${deviceParam}`
        const caps = element.querySelectorAll("capability")
        for(let i of caps) {
            let b = Banner(false, i.querySelector("capoimage").innerHTML, i.querySelector("capocaption").innerHTML, true, true)
            b.classList.add("back-transp")
            b.classList.add("scroll-hidden")
            capsContainer.appendChild(b)
        }
    }
    else {
        window.location.replace("notFound.html")
    }
}
loadXMLDoc("items.xml", setDevice)





//dropdown burger
AddDefaultMobileDropdown(true)

//slider



body.prepend(header)
if(window.innerWidth < 500) {

}