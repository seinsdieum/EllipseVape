//notifications
body.appendChild(ClubInviter.msg)

//header
const header = document.querySelector("header")

const Goods = document.querySelector("a[id='catalogIcon']")
const Club = document.querySelector("a[id='clubIcon']")
const More = document.querySelector("a[id='mobileIcon']")

Club.addEventListener("mouseenter", () => {
        ClubInviter.Show()
})

//dropdown

const tmtBanner = Banner("", vapePath + "Leaves/Transparent/LeavesVapePresent21_9.png", "TMT 46", false, true)
const tmtPair = [LinkText("catalogitem.html?item=tmtfs", "TMT"), tmtBanner]

const leavesBanner = Banner("", vapePath + "Leaves/Transparent/LeavesVapePresent21_9.png", "Leaves", false, true)
const leavesPair = [LinkText("catalogitem.html?item=leaves", "Leaves"), leavesBanner]

const surfingemBanner = Banner("", vapePath + "Leaves/Transparent/LeavesVapePresent21_9.png", "SurfinGem Wise", false, true)
const surfingemPair = [LinkText("catalogitem.html?item=wise", "SurfinGem"), surfingemBanner]

const kaliBanner = Banner("", vapePath + "Leaves/Transparent/LeavesVapePresent21_9.png", "Byteshard A", false, true)
const kaliPair = [LinkText("catalogitem.html?item=bytesharda", "Byteshard"), kaliBanner]


const goodsDropdown = new DropdownMenu([tmtPair, leavesPair, surfingemPair, kaliPair], true)
Goods.addEventListener("mouseenter", () => {
    const height = header.getBoundingClientRect().top
    if(height === 0){
        goodsDropdown.DropDown()
    }
})
goodsDropdown.menu.classList.add("desktop")
body.appendChild(goodsDropdown.menu)



//dropdown burger
AddDefaultMobileDropdown(true)

//slider

const slideBanner1 = Banner("catalogitem.html/tmt", "img/Temp/TemporaryFull_21_9.png",
    "TMT 46. Релиз в июне.", false, true)
const slideBanner2 = Banner("catalogseries.html/leaves", vapePath + "Leaves/Present/1_21_9.jpg",
    "Leaves. Лес ваших фантазий.", false, true)
const slideBanner3 = InformationBanner(ellipsePath + "weDo_21_9.jpg", "Что мы производим?" ,
    "Мы производим вейп-устройства, которые дарят удовольствие каждому желающему. " +
    "Наши компоненты производятся в Тайване, и благодаря этому устройства будут служить вам большой срок. " +
    "Всё, что мы делаем - исключительно ради вас.", true)

const tempSl = document.querySelector(".slider-view")
const slider = new Slider([slideBanner1, slideBanner2, slideBanner3], true)

tempSl.replaceWith(slider)

body.prepend(header)
