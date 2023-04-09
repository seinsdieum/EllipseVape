const header = Header(true)

const GoodsIcon = IconLink("goods.svg", "https://vk.com", true)
const EllipseIcon = IconLink("ellipse.svg", "#top", true)
const EllipseIcon2 = IconLink("ellipse.svg", "index.html", true)
const ClubIcon = IconLink("Club.svg", "#vk.com", true)

ClubIcon.classList.add("desktop")
GoodsIcon.classList.add("desktop")

body.appendChild(header)
header.appendChild(GoodsIcon)
header.appendChild(EllipseIcon)
header.appendChild(ClubIcon)

const banner0 = Banner("https://youtube.com", "img/Vapes/Leaves/Transparent/LeavesVapePresent21_9.png", "TMT 46", false, true)

const pair1 = [LinkText("vk.com", "TMT"), banner0]

const banner00 = Banner("https://youtube.com", "img/Vapes/Leaves/Transparent/LeavesVapePresent21_9.png", "Leaves I", false, true)

const pair2 = [LinkText("vk.com", "Leaves"), banner00]

const dropper = new DropdownMenu([pair1, pair2], true)
body.appendChild(dropper.menu)

const not1 = new Notification(false, "Ошибка входа, повторите позже", true)



GoodsIcon.addEventListener("mouseover", () => {
    dropper.DropDown()
})

body.appendChild(not1.msg)

EllipseIcon.addEventListener("mouseover", () => {
    not1.Show()
})


const banner1 = Banner("https://youtube.com", "img/ellipse/history1_21_9.jpg", "Welcome", true, true)
const banner2 = Banner("https://vk.com", "notfound_21_9.jpg", "Welcome", true, true)
const banner3 = Banner("https://vk.com", "notfound_21_9.jpg", "Welcome", true, true)
const banner4 = Banner("https://vk.com", "notfound_21_9.jpg", "Welcome", true, true)
const goodsSlider = new Slider([banner1, banner2, banner3, banner4])
body.appendChild(goodsSlider)

body.appendChild(Banner("https://vk.com", "img/ellipse/history1_21_9.jpg", "Welcome", false, true))
/*body.appendChild(Line(true))*/
/*body.appendChild(Label(true, ""))*/
body.appendChild(InformationBanner("img/ellipse/history1_21_9.jpg", "Welcome","Ellipse is fucked", true))



const itemsArray =
    [LinkText("https://vk.com", "TMT"),
        LinkText("https://vk.com", "Leaves"),
        LinkText("https://vk.com", "SurfinGem"),
        LinkText("https://vk.com", "Kali")]

const itemsArray2 =
    [LinkText("https://vk.com", "TMT"),
            LinkText("https://vk.com", "Leaves"),
            LinkText("https://vk.com", "SurfinGem"),
            LinkText("https://vk.com", "Kali")]

const itemsArray3 =
    [LinkText("https://vk.com", "TMT"),
        LinkText("https://vk.com", "Leaves"),
        LinkText("https://vk.com", "SurfinGedsczxm"),
        LinkText("https://vk.com", "Kali")]

const itemsArray4 =
    [LinkText("https://vk.com", "TMT"),
        LinkText("https://vk.com", "Leavexdcsdcs"),
        LinkText("https://vk.com", "SurfsdcsdcsdinGem"),
        LinkText("https://vk.com", "Kasdcsdcsdcli")]

const itemsArray5 =
    [LinkText("https://vk.com", "TMT"),
        LinkText("https://vk.com", "Leavsdcsdcsdes"),
        LinkText("https://vk.com", "SurfsdcsdcinGem"),
        LinkText("https://vk.com", "Kalsdcsdcsdi")]

const SeriesList = FooterList("серии", itemsArray)
const SeriesList2 = FooterList("дичь", itemsArray2)
const SeriesList3 = FooterList("дичь", itemsArray3)
const SeriesList4 = FooterList("дичь", itemsArray4)
const SeriesList5 = FooterList("дичь", itemsArray5)

const FooterLists = [SeriesList, SeriesList2, SeriesList3, SeriesList4, SeriesList5]
const footer = Footer(EllipseIcon2, FooterLists,
    "ВНИМАНИЕ: Наши продукты " +
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
    " с врачом.")


body.appendChild(footer)
