//notifications
body.appendChild(ClubInviter.msg)
body.appendChild(InvalidDataLight.msg)
body.appendChild(FormSubmitLight.msg)
//header
const header = document.querySelector("header")


const More = document.querySelector("a[id='mobileIcon']")


//item elements

function CustomerForm() {
    this.form = document.createElement("form")
    this.form.classList.add("flex-center")
    this.form.id = "customer";
    const pls = document.createElement("h1")
    const pls2 = document.createElement("p")
    pls.innerText = "Заполните, пожалуйста, форму."
    pls2.innerText = "Позже мы свяжемся с вами для уточнения деталей заказа"

    this.nameLabel = document.createElement("label")
    this.name = document.createElement("input")
    this.name.type = "text"
    this.name.classList.add("search-field")
    this.name.name = "name"
    this.name.placeholder = "ФИО"
    this.nameLabel.appendChild(this.name)

    this.phoneLabel = document.createElement("label")
    this.phone = document.createElement("input")
    this.phone.type = "text"
    this.phone.classList.add("search-field")
    this.phone.name = "phone"
    this.phone.placeholder = "+375 33 111 11 11"
    this.phoneLabel.appendChild(this.phone)

    this.townLabel = document.createElement("label")
    this.town = document.createElement("input")
    this.town.type = "text"
    this.town.classList.add("search-field")
    this.town.name = "town"
    this.town.placeholder = "г. Минск"
    this.townLabel.appendChild(this.town)

    this.button = document.createElement("button")
    this.button.classList.add("fixed-sized")
    this.button.formMethod = ""
    this.button.innerText = "Связаться"
    this.button.type = "button"
    this.form.appendChild(pls)
    this.form.appendChild(pls2)
    this.form.appendChild(document.createElement("br"))
    this.form.appendChild(this.nameLabel)
    this.form.appendChild(document.createElement("br"))
    this.form.appendChild(this.phoneLabel)
    this.form.appendChild(document.createElement("br"))
    this.form.appendChild(this.townLabel)
    this.form.appendChild(document.createElement("br"))
    this.form.appendChild(this.button)

    this.realButton = this.form.querySelector("button")
    this.realButton.addEventListener("mousedown", () => {

        let c = 0;
        let complete = true;

        for(let i of this.name.value) {
            if(i === ' ') c++
        }
        if (c < 1) complete = false;
        for(let i in this.phone.value) {
            if(!(i === '+' || (i >= '0' && i <= '9') || i === '(' || i === ')' || i === ' ')) {
                complete = false;
            }
        }

        if(complete && this.town.value.length > 0) FormSubmitLight.Show()
        else InvalidDataLight.Show()
    })
}

const deviceParam = new URLSearchParams(window.location.search).get('item')
if(!deviceParam) {
    window.location.replace("notFound.html")
}
const devicePresent = document.querySelector("div[id='devicePresent']")
const deviceDescription = document.querySelector("div[id='deviceDescription']")
const deviceSets = document.querySelector("div[id='deviceSets']")
const deviceCost = document.querySelector("h1[id='deviceCost']")
const deviceForm = document.querySelector("button[id='deviceForm']")
const deviceCatalog = document.querySelector("button[id='deviceCatalog']")
function setDevice(xml) {

    let xmlDoc = xml.responseXML;
    const element = xmlDoc.querySelector(`item[name=${deviceParam}]`)
    if(element) {
        document.title = `${element.children[0].innerHTML} - Ellipse`
        devicePresent.querySelector("h1").innerText = element.children[0].innerHTML
        devicePresent.style.backgroundImage = `url(${element.children[1].innerHTML})`
        deviceDescription.querySelector("h1").innerText = element.children[3].innerHTML
        deviceDescription.style.backgroundImage = `url(${element.children[6].innerHTML})`
        deviceSets.querySelector("h1").innerText = "Характеристики"
        deviceSets.querySelector("p").innerText = element.children[5].innerHTML
        deviceCost.innerHTML = `${element.querySelector("cost").innerHTML} BYN`
        deviceSets.style.backgroundImage = `url(${element.querySelector("sidePhoto").innerHTML})`

        const formm = new CustomerForm()
        deviceForm.addEventListener("mousedown", () => {
            body.append(formm.form)
            window.scrollTo({top: 10000, behavior: "smooth"})
        })
        deviceCatalog.addEventListener("mousedown", () => {
            window.location.href = `catalogitem.html?item=${deviceParam}`
        })
    }
    else {
        window.location.replace("notFound.html")
    }
}
loadXMLDoc("items.xml", setDevice)

//dropdown burger
AddDefaultMobileDropdown(false, true)

//slider

body.prepend(header)
if(window.innerWidth < 500) {

}