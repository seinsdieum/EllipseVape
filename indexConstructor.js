//notifications

body.appendChild(ClubInviter.msg)
//header
const header = Header(true)

const Ellipse = IconLink(ellipseIcon, false, true)
const Goods = IconLink(goodsIcon, "catalog.html", true, true)
const Club = IconLink(clubIcon, "club.html", true, true)
const More = IconLink(MoreIcon, false, false, true)

Club.addEventListener("mouseenter", () => {
        ClubInviter.Show()
})
More.classList.add("mobile")
Goods.classList.add("desktop")
Club.classList.add("desktop")

header.appendChild(Goods)
header.appendChild(Ellipse)
header.appendChild(Club)
header.appendChild(More)
//dropdown

const tmtBanner = Banner("", vapePath + "Leaves/Transparent/LeavesVapePresent21_9.png", "TMT 46", false, true)
const tmtPair = [LinkText("catalog.html", "TMT"), tmtBanner]

const leavesBanner = Banner("", vapePath + "Leaves/Transparent/LeavesVapePresent21_9.png", "Leaves I", false, true)
const leavesPair = [LinkText("catalog.html", "Leaves"), leavesBanner]

const surfingemBanner = Banner("", vapePath + "Leaves/Transparent/LeavesVapePresent21_9.png", "SurfinGem", false, true)
const surfingemPair = [LinkText("catalog.html", "SurfinGem"), surfingemBanner]

const kaliBanner = Banner("", vapePath + "Leaves/Transparent/LeavesVapePresent21_9.png", "Kali 8", false, true)
const kaliPair = [LinkText("catalog.html", "Kali"), kaliBanner]


const goodsDropdown = new DropdownMenu([tmtPair, leavesPair, surfingemPair, kaliPair], true)
Goods.addEventListener("mouseenter", () => {
    goodsDropdown.DropDown()
})
goodsDropdown.menu.classList.add("desktop")
body.appendChild(goodsDropdown.menu)

//

//dropdown burger
const navigationDropdown = new DropdownList
(
    [
        LinkText("", "Ellipstore"),
            LinkText("", "Ellipse Club"),
            LinkText("", "Каталог"),
            LinkText("", "Поддержка"),
        ],
    true
)
body.appendChild(navigationDropdown.menu)
navigationDropdown.menu.classList.add("mobile")
More.addEventListener("mousedown", () => {
        navigationDropdown.DropDown()
})
//

body.appendChild(header)
//

//main part

//slider

//slidebanners
const slideBanner1 = Banner("catalog.html", vapePath + "TMT/Present/1_21_9.jpg",
    "TMT-46 - Релиз в июне", false, true)
const slideBanner2 = Banner("catalog.html", vapePath + "TMT/Present/1_21_9.jpg",
    "Leaves I - Спокойствие для всех", false, true)
const slideBanner3 = InformationBanner(ellipsePath + "weDo_21_9.jpg", "Что мы производим?" ,
    "Мы производим вейп-устройства, которые дарят удовольствие каждому желающему. " +
    "Наши компоненты производятся в Тайване, и благодаря этому устройства будут служить вам большой срок. " +
    "Всё, что мы делаем - исключительно ради вас.", true)
//

const slider = new Slider([slideBanner1, slideBanner2, slideBanner3])

body.appendChild(slider)

//

//infoBanner
const infoBanner = InformationBanner(ellipsePath + "ellipseBlur_21_9.jpg", "Почему стоит выбрать нас?" ,
    "Мы делаем качественный продукт, поставляемый на мировой рынок, улучшаем показатели наших устройств и " +
    "стараемся значительно снизить вред электронных сигарет, задавая новые тренды в их развитии, а также у нас есть " +
    "круглосуточная поддержка для покупателей, у которых возникли проблемы или имеются вопросы. Экосистема устройств " +
    "Ellipse не оставит вас равнодушными и подарит вам кучу новых возможностей.", true)
body.appendChild(infoBanner)
//

//store banner
const storeBanner = Banner("shop.html", ellipsePath + "shop1_21_9.jpg",
    "Ellipstore - купи свой девайс", false, true)
body.appendChild(storeBanner)
//

//catalog banner
const catalogBanner = Banner("catalog.html", ellipsePath + "catalog1_21_9.jpg",
    "Circle - каталог актуальных испарителей", false, true)
body.appendChild(catalogBanner)
//

//history banner
const historyBanner = Banner("catalog.html", ellipsePath + "history1_21_9.jpg",
    "История бренда", true, true)
body.appendChild(historyBanner)
//


//club banner
const clubBanner = Banner("club.html", ellipsePath + "ellipseClub1_21_9.jpg",
    "Ellipse Club", true, true)
body.appendChild(clubBanner)
//

//

//footer

//footer items
const itemsArray =
    [LinkText("https://vk.com", "TMT"),
        LinkText("https://vk.com", "Leaves"),
        LinkText("https://vk.com", "SurfinGem"),
        LinkText("https://vk.com", "Kali")]

const itemsArray2 =
    [LinkText("https://vk.com", "Ellipse Club"),
        LinkText("https://vk.com", "О нас")]


const itemsArray3 =
    [LinkText("https://vk.com", "Гарантийная помощь")]

const itemsArray4 =
    [
        LinkText("", "TEL: +37064887227"),
        LinkText("", "Business: alexellipse@icloud.com"),
        LinkText("", "Время обслуживания:"),
        LinkText("", "9.30 - 12.30"),
        LinkText("", "15.30 - 19.30"),
        LinkText("", "15.30 - 19.30"),
        LinkText("", "GMT+3"),
        LinkText("", "Пн - Пт")
    ]

const SeriesList = FooterList("серии", itemsArray)
const SeriesList2 = FooterList("изучение", itemsArray2)
const SeriesList3 = FooterList("поддержка", itemsArray3)
const SeriesList4 = FooterList("связь", itemsArray4)

const Disclaimer = "ВНИМАНИЕ: Наши продукты " +
    "предназначены лишь для лиц, " +
    "достигших 18 лет. Запрещено" +
    " использование товаров данного " +
    "сайта детьми, беременными женщинами," +
    " диабетиками и людьми с" +
    " сердечно-сосудистыми заболеваниями." +
    " Товары могут содержать никотин." +
    " Никотин вызывает зависимость." +
    " Товары на этом сайте не лечат " +
    "от никотиновой зависимости." +
    " Перед использованием проконсультируйтесь" +
    " с врачом."

const FooterLists = [SeriesList, SeriesList2, SeriesList3, SeriesList4]
const Ellipse2 = IconLink(ellipseIcon, "#top", true)
//
const footer = Footer(Ellipse2, FooterLists,
    Disclaimer)
body.appendChild(footer)
//