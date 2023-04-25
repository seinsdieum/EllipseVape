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
    pls2.innerText = "После заполнения формы мы сможем связаться с вами по email"

    this.nameLabel = document.createElement("label")
    this.name = document.createElement("input")
    this.name.type = "text"
    this.name.classList.add("search-field")
    this.name.name = "name"
    this.name.placeholder = "ФИО"
    this.nameLabel.appendChild(this.name)

    this.emailLabel = document.createElement("label")
    this.email = document.createElement("input")
    this.email.type = "email"
    this.email.classList.add("search-field")
    this.email.name = "email"
    this.email.placeholder = "example@ellipsevape.me"
    this.emailLabel.appendChild(this.email)

    this.descriptionLabel = document.createElement("label")
    this.description = document.createElement("textarea")
    this.description.type = "textarea"
    this.description.classList.add("search-field")
    this.description.name = "textarea"
    this.description.placeholder = "Опишите проблему"
    this.descriptionLabel.appendChild(this.description)


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
    this.form.appendChild(this.emailLabel)
    this.form.appendChild(document.createElement("br"))
    this.form.appendChild(this.descriptionLabel)
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
            && this.name.value.length > 0
            && this.email.value.length > 0
            && this.description.value.length > 0) {
            FormSubmitDark.Show()
            this.name.value = ""
            this.email.value = ""
            this.description.value = ""
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