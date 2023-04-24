//notifications
body.appendChild(ClubInviter.msg)

//header
const header = document.querySelector("header")

const Club = document.querySelector("a[id='clubIcon']")
const More = document.querySelector("a[id='mobileIcon']")

Club.addEventListener("mouseenter", () => {
        ClubInviter.Show()
})

//dropdown

//dropdown burger
AddDefaultMobileDropdown(true)

//slider
body.prepend(header)