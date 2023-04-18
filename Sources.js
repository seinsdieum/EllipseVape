//folders

const iconPath = "img/icons/"
const vapePath = "img/Vapes/"
const ellipsePath = "img/ellipse/"

//icons

const ellipseIcon = iconPath + "ellipse.svg"
const clubIcon = iconPath + "club.svg"
const goodsIcon = iconPath + "goods.svg"
const leftIcon = iconPath + "left.svg"
const rightIcon = iconPath + "right.svg"
const MoreIcon = iconPath + "more.svg"

//photos

const NotFound = "notfound_21_9.jpg"

//ready-to-use solution functions
function AddDefaultMobileDropdown(dark, back) {
    //dropdown mobile
    const closeNavigationDropdown = (LinkText("", "Закрыть"))
    const backLink = LinkText("", "Назад")
    const navigationDropdown = back ? new DropdownList
    (
        [
            LinkText("", "Ellipstore"),
            LinkText("", "Ellipse Club"),
            LinkText("", "Каталог"),
            LinkText("", "Поддержка"),
            backLink,
            closeNavigationDropdown
        ],
        dark
    ) : new DropdownList
    (
        [
            LinkText("", "Ellipstore"),
            LinkText("", "Ellipse Club"),
            LinkText("", "Каталог"),
            LinkText("", "Поддержка"),
            closeNavigationDropdown
        ],
        dark
    )

    closeNavigationDropdown.addEventListener("mousedown", () => {
        navigationDropdown.DropOut()
    })
    if(back) backLink.addEventListener("mousedown", () => {
        history.back()
    })
    body.appendChild(navigationDropdown.menu)
    navigationDropdown.menu.classList.add("mobile")
    More.addEventListener("mousedown", () => {
        navigationDropdown.DropDown()
    })
//

    body.appendChild(header)
}