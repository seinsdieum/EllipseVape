//notifications

body.appendChild(ClubInviter.msg)
//header
const header = Header(true)

const Ellipse = IconLink(ellipseIcon, "javascript:history.back()", true)
const More = IconLink(MoreIcon, false, false, true)


More.classList.add("mobile")

header.appendChild(Ellipse)
header.appendChild(More)
//dropdown


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
const slideBanner1 = Banner("catalog.html", NotFound,
    "TMT-45 - Наш первый вейп", false, true)
const slideBanner2 = Banner("https://goo.gl/maps/tVWbhh9DWYF3AqsU6", ellipsePath + "head_21_9.jpg",
    "Г. Минск - наш первый штаб", false, true)
//

const slider = new Slider([slideBanner1, slideBanner2])

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
        LinkText(false, "TEL: +37064887227"),
        LinkText(false, "Business: alexellipse@icloud.com"),
        LinkText(false, "Время обслуживания:"),
        LinkText(false, "9.30 - 12.30"),
        LinkText(false, "15.30 - 19.30"),
        LinkText(false, "15.30 - 19.30"),
        LinkText(false, "GMT+3"),
        LinkText(false, "Пн - Пт")
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