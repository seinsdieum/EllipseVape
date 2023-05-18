//notifications
body.appendChild(FormSubmitDark.msg)
body.appendChild(InvalidDataDark.msg)

//header
const header = document.querySelector("header")

const More = document.querySelector("a[id='mobileIcon']")

//dropdown

function CustomerForm() {
    this.form = document.createElement("form")
    this.form.classList.add("flex-center")
    this.form.id = "customer";
    const pls = document.createElement("h1")
    const pls2 = document.createElement("p")
    pls.style.color = "#d9d9d9"
    pls2.style.color = "#d9d9d9"
    pls.innerText = "Заполните, пожалуйста, форму."
    pls2.innerText = "На ваш email придёт инвайт-код, после чего вы сможете войти в систему"

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

    this.emailLabel = document.createElement("label")
    this.email = document.createElement("input")
    this.email.type = "email"
    this.email.classList.add("search-field")
    this.email.name = "email"
    this.email.placeholder = "example@ellipsevape.me"
    this.emailLabel.appendChild(this.email)

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
    this.form.appendChild(this.emailLabel)
    this.form.appendChild(document.createElement("br"))
    this.form.appendChild(this.townLabel)
    this.form.appendChild(document.createElement("br"))
    this.form.appendChild(this.button)

    this.realButton = this.form.querySelector("button")
    this.realButton.addEventListener("mousedown", () => {

       /* let c = 0;
        let complete = true;

        for(let i of this.name.value) {
            if(i === ' ') c++
        }
        if (c < 1) complete = false;
        for(let i in this.phone.value) {
            if(!(i === '+' || (i >= '0' && i <= '9') || i === '(' || i === ')' || i === ' ')) {
                complete = false;
            }
        }*/

        if(this.form.reportValidity()
            && this.town.value.length > 0
            && this.phone.value.length > 0
            && this.name.value.length > 0
            && this.email.value.length > 0) {
            const thanks = document.createElement("h1")
            const thanks2 = document.createElement("p")
            thanks.style.color = "#d9d9d9"
            thanks2.style.color = "#d9d9d9"
            thanks.innerText = `Спасибо, ${this.name.value}.`
            thanks2.innerText = `Мы отправим вам инвайт код на ${this.email.value}`
            this.form.appendChild(thanks)
            this.form.appendChild(thanks2)
            FormSubmitDark.Show()
            this.name.value = ""
            this.phone.value = ""
            this.email.value = ""
            this.town.value = ""

            this.name.remove()
            this.phone.remove()
            this.email.remove()
            this.town.remove()
            this.realButton.remove()
            pls.remove()
            pls2.remove()
        }
        else InvalidDataDark.Show()
    })
}

const deviceForm = document.querySelector("button[id='deviceForm']")
const formm = new CustomerForm()
deviceForm.addEventListener("mousedown", () => {
    deviceForm.remove()
    body.append(formm.form)
    window.scrollTo({top: 10000, behavior: "smooth"})
})
//dropdown burger
AddDefaultMobileDropdown(true, true)

//slider
body.prepend(header)