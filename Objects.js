const vh = visualViewport.height * 0.01
const vw = visualViewport.width * 0.01

const size = 1.4*vw + 0.5*vh;

const defIconWidth = 6*size;
const defIconHeight = 3*size;

const dark = "black"
const light = "#d9d9d9"
const accent = "#74d8f1"

const body = document.querySelector("body")


function Line(dark, noPad) {
    const line = document.createElement("div")
    line.style.height = "2px"
    line.style.width = "90%"
    line.style.margin = "0 auto"
    if (!noPad) {
        line.style.marginTop = "2%"
        line.style.marginBottom = "2%"
    }
    line.style.left = "0"
    line.style.right = "0"
    if (dark) line.style.backgroundColor = "#d9d9d9"
    else line.style.backgroundColor = "black"
    return line
}

function Icon(svgFilePath, width, height, interactive, square) {
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svgElement.classList.add("icon");
    if (interactive) {
        svgElement.classList.add("icon-interactive")
    }

/*    if (width) svgElement.setAttribute("width", width)
    else svgElement.setAttribute("width", "auto")

    if (height) svgElement.setAttribute("height", height)
    else svgElement.setAttribute("height", "auto")*/
    let xhr = new XMLHttpRequest();
    xhr.open("GET", svgFilePath, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Inject the SVG data into the SVG element
            svgElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
    svgElement.innerHTML
    if(square) svgElement.classList.add("wide")
    // Return the SVG element
    return svgElement;
}

function IconObj(svgFilePath, interactive, square) {
    const icon = document.createElement("div")
    const iconWidth = square ? defIconHeight : defIconWidth
/*    icon.style.width = `${iconWidth}`
    icon.style.height = `${defIconHeight}`*/
    icon.appendChild(Icon(svgFilePath, iconWidth, defIconHeight, interactive, square))
    return icon;
}

function IconLink(svgFilePath, link, interactive, square) {
    const linkObj = document.createElement("a")
    if(link){
        linkObj.href = link;
    }
    const iconWidth = square ? defIconHeight : defIconWidth;
    linkObj.appendChild(Icon(svgFilePath, iconWidth, defIconHeight, interactive, square))
    return linkObj
}

function defText(centered, dark, text) {
    const txt = document.createElement("h1")
    txt.innerText = text
    txt.classList.add("def-text")
    return txt
}

function textLink(centered, dark, text, href) {
    const link = document.createElement("a")
    link.appendChild(defText(centered, dark, text))
    link.href = href;
    return link;
}

function MidText(centered, dark, text) {
    const txt = document.createElement("h1")
    txt.innerText = text
    txt.classList.add("mid-text")
    return txt
}

function Label(dark, text) {
    const labelObj = document.createElement("div")
    if (dark) labelObj.classList.add("dark")
    else labelObj.classList.add("light")
    labelObj.classList.add("row")
    labelObj.classList.add("centered")

    const txt = MidText(true, true, text)

    labelObj.appendChild(txt)

    return labelObj
}

function Header(dark) {
    const headLabel = document.createElement("header")
    if (dark) headLabel.classList.add("dark")
    else headLabel.classList.add("light")
    headLabel.classList.add("row")
    headLabel.classList.add("flex-center")

    return headLabel;
}

function Footer(logoElement, Lists, disclaimer) {
    const footer = document.createElement("footer")
    footer.classList.add("dark")
    footer.classList.add("column")


    const footLabel = document.createElement("div") // append to footer
    footLabel.classList.add("dark")
    footLabel.classList.add("row")
    footLabel.classList.add("flex-center")
    footLabel.classList.add("foot-label")
    footLabel.style.borderBottom = "2px solid #d9d9d9"

    const footContainer = document.createElement("div")
    footContainer.classList.add("dark")
    footContainer.classList.add("row")
    footContainer.classList.add("flex-center")
    footContainer.classList.add("foot-container")
    footContainer.style.padding = "2%"
    for (let i = 0; i < Lists.length; i++) {
        footContainer.appendChild(Lists[i])
    }

    const footDisclaimerBlock = document.createElement("div")
    const footDisclaimer = document.createElement("p")
    if (disclaimer) {
        footDisclaimer.innerText = disclaimer
    }
    footDisclaimerBlock.classList.add("footer-disclaimer")

    //appends

    footLabel.appendChild(logoElement)

    footer.appendChild(footLabel)
    footer.appendChild(footContainer)

    if (disclaimer) {
        footer.appendChild(Line(true, true))
        footDisclaimerBlock.appendChild(footDisclaimer)
        footer.appendChild(footDisclaimerBlock)
    }

    return footer;
}

function FooterList(header, items) {
    const list = document.createElement("ul")
    list.classList.add("footer-list")

    const headItem = document.createElement("li")
    headItem.classList.add("footer-list-head")
    headItem.innerText = header

    list.appendChild(headItem)

    for (let i = 0; i < items.length; i++) {
        let item = document.createElement("li")
        item.classList.add("footer-list-item")
        item.appendChild(items[i])
        list.appendChild(item)
    }
    return list;
}

function LinkText(link, text) {
    const href = document.createElement("a")
    if(link) href.href = link;
    href.innerText = text;
    return href;
}

function Banner(link, source, info, centered, dark, transparentBack) {
    const linkObject = document.createElement("a")
    if(link) linkObject.href = link;

    const image = document.createElement("div")
    image.classList.add("banner-image")
    image.style.backgroundImage = `url(${source})`

    const description = document.createElement("div")
    if (centered) description.classList.add("banner-description-center")
    else description.classList.add("banner-description")


    const text = document.createElement("h1")
    text.innerText = info
    if (!dark) {
        text.style.color = "black"
    }

    description.appendChild(text)
    image.appendChild(description)
    linkObject.appendChild(image)
    return linkObject;
}

function InformationBanner(source, info, info2, dark) {
    const containerHref = document.createElement("a")
    const image = document.createElement("div")
    image.classList.add("banner-image")
    image.style.backgroundImage = `url(${source})`

    const description = document.createElement("div")
    description.classList.add("banner-full-description")

    const text = document.createElement("h1")
    text.innerHTML = info
    if (dark) {
        text.style.color = "#d9d9d9"
    } else text.style.color = "black"

    const text2 = document.createElement("p")
    text2.innerHTML = info2
    if (dark) {
        text2.style.color = "#d9d9d9"
    } else text2.style.color = "black"


    description.appendChild(text)
    description.appendChild(Line(dark))
    description.appendChild(text2)

    image.appendChild(description)
    containerHref.appendChild(image)
    return containerHref;
}

function Timer(f, t) {
    let timer = setInterval(f, t)
    this.stop = function () {
        if (timer) {
            clearInterval(timer)
            timer = null
        }
    }
    this.start = function () {
        if (!timer) {
            this.stop()
            timer = setInterval(f, t)
        }
    }
    this.reset = function (newT = t) {
        t = newT
        this.stop()
        this.start()
    }
}



function DropdownMenu(pairList, dark) {
    this.menu = document.createElement("div")
    this.menu.classList.add("row")
    this.menu.classList.add("dropdown-set")
    if(dark) this.menu.classList.add("dark")
    else this.menu.classList.add("light")
    this.menu.classList.add("desktop")
    const headerContainer = document.createElement("div")
    const InformationContainer = document.createElement("div")

    let current = 0;

    this.DropDown = function() {
        this.menu.classList.add("dropdown-shown")
    }

    this.DropOut = function() {
        this.menu.classList.remove("dropdown-shown")
    }
    let informationPairs = []

    this.SwitchTo = function(i) {
        informationPairs[i][0].classList.add("dropdown-focused")
        informationPairs[i][1].classList.add("dropdown-focused")
    }

    this.SwitchOut = function(i) {
        informationPairs[i][0].classList.remove("dropdown-focused")
        informationPairs[i][1].classList.remove("dropdown-focused")
    }

    for(let i = 0; i < pairList.length; i++) {
        headerContainer.appendChild(pairList[i][0])

        pairList[i][0].addEventListener("mouseover", () => {
            this.SwitchOut(current)
            current = i;
            this.SwitchTo(current);
        })

        InformationContainer.appendChild(pairList[i][1])


        informationPairs.push(pairList[i])
    }

    this.menu.appendChild(headerContainer)
    this.menu.appendChild(InformationContainer)
    headerContainer.classList.add("flex")

    headerContainer.classList.add("column")
    InformationContainer.classList.add("column")

    this.hovered = false


    this.menu.addEventListener("mouseleave", () => {
        this.DropOut();
    })


    this.SwitchTo(current)
}

function DropdownList(linkList, dark) {
    this.menu = document.createElement("div")
    this.menu.classList.add("row")
    this.menu.classList.add("dropdown-set")
    if(dark) this.menu.classList.add("dark")
    else this.menu.classList.add("light")
    this.menu.classList.add("desktop")
    const headerContainer = document.createElement("div")


    this.DropDown = function() {
        this.menu.classList.add("dropdown-shown")
    }

    this.DropOut = function() {
        this.menu.classList.remove("dropdown-shown")
    }


    for(let i = 0; i < linkList.length; i++) {
        linkList[i].classList.add("centered")
        headerContainer.appendChild(linkList[i])
    }

    this.menu.appendChild(headerContainer)
    headerContainer.classList.add("flex")

    headerContainer.classList.add("column")
    this.hovered = false


    this.menu.addEventListener("mouseleave", () => {
        this.DropOut();
    })
}

function Notification(icon, message, dark) {
    this.msg = document.createElement("div")
    this.msg.classList.add("row")
    this.msg.classList.add("dropdown-set")
    this.msg.classList.add("notification")
    if(dark) this.msg.classList.add("dark")
    else this.msg.classList.add("light")
    this.text = document.createElement("p")
    this.text.innerText = message;
    if(icon) {
        this.msg.appendChild(IconObj(icon, false, true))
    }
    this.msg.appendChild(this.text)
    this.hidden = true;

    let notDelay = new Timer(() => {
        this.Hide()
        notDelay.stop()
    }, 5000)


    this.Hide = function() {
        this.hidden = true;
        this.msg.classList.remove("dropdown-shown")
    }
    this.Show = function() {
        this.hidden = false;
        notDelay.start()
        this.msg.classList.add("dropdown-shown")
    }
    this.msg.addEventListener("mouseenter", () => {
        notDelay.stop();
    })
    this.msg.addEventListener("mouseleave", () => {
        this.Hide()
    })
}

function Slider(banners, scrollInteractive) {
    const count = banners.length
    const slider = document.createElement("div")
    slider.classList.add("slider-view")
    slider.classList.add("non-interactive")
    const left = IconObj(iconPath + "left.svg", true)
    const right = IconObj(iconPath + "right.svg", true)

    left.className = "prev"
    right.className = "next"

    slider.append(right)
    slider.append(left)
    const pointerContainer = document.createElement("div")
    pointerContainer.classList.add("slide-pointer-container")
    pointerContainer.classList.add("row")
    pointerContainer.classList.add("centered")
    slider.append(pointerContainer)

    let pointers = []
    let pointedSlide = 0;
    for (let i = 0; i < banners.length; i++) {
        let pointer = document.createElement("div")
        pointer.classList.add("slide-pointer")
        pointerContainer.append(pointer)
        pointers.push(pointer)
        pointer.addEventListener('mousedown', () => {
            this.SlideTo(i);
        })
        if(scrollInteractive) banners[i].classList.add("scroll-hidden")
        slider.append(banners[i])
    }



    this.Point = function (pointer) {
        pointer.classList.add("highlighted")
    }
    this.PointOut = function (pointer) {
        pointer.classList.remove("highlighted")
    }

    this.ApplyTranslation = function () {
        for (let i of slider.children) {
            if (i !== right && i !== left && i !== pointerContainer) {
                i.style.transform = `translateX(${translation}%)`
            }
        }
    }

    let translation = 0;
    this.SlideLeft = function () {
        if (translation < 0) {
            this.PointOut(pointers[pointedSlide])
            pointedSlide--;
            this.Point(pointers[pointedSlide])
            translation += 100
            this.ApplyTranslation()
        } else this.ToEnd()
    }
    this.SlideRight = function () {
        if (translation > -1 * (count - 1) * 100) {
            this.PointOut(pointers[pointedSlide])
            pointedSlide++;
            this.Point(pointers[pointedSlide])
            translation -= 100
            this.ApplyTranslation()
        } else this.GetBack()
    }

    this.SlideTo = function (index) {
        translation = -1*index*100;
        this.PointOut(pointers[pointedSlide])
        pointedSlide = index;
        this.Point(pointers[pointedSlide])
        this.ApplyTranslation()
    }

    this.GetBack = function () {
        this.PointOut(pointers[pointedSlide])
        pointedSlide = 0;
        this.Point(pointers[pointedSlide])
        translation = 0;
        this.ApplyTranslation()
    }

    this.ToEnd = function () {
        this.PointOut(pointers[pointedSlide])
        pointedSlide = count-1;
        this.Point(pointers[pointedSlide])
        translation = -1 * (count - 1) * 100;
        this.ApplyTranslation()
    }

    let SlideTimer = new Timer(() => {
        this.SlideRight()
    }, 15000)

    left.addEventListener('mousedown', () => {
        this.SlideLeft()
        SlideTimer.reset()
    })
    right.addEventListener('mousedown', () => {
        this.SlideRight()
        SlideTimer.reset()
    })

    this.Point(pointers[pointedSlide]);
    SlideTimer.start()

    return slider;
}

function Item(imgsource, caption, link) {
    const href = document.createElement("a")
    if(link) href.href = link;

    const container = document.createElement("div")
    container.classList.add("slide-item")

    const item = document.createElement("figure")


    const img = document.createElement("img")
    if(imgsource) img.src = imgsource
    const figcaption = document.createElement("figcaption")
    if(caption) figcaption.innerText = caption

    container.appendChild(item)
    href.appendChild(container)
    item.appendChild(img)
    item.appendChild(figcaption)

    return href
}

function ItemSlider(ItemsList, dark) {
    this.slider = document.createElement("div")
    this.slider.classList.add("item-slider-view")
    /*this.slider.classList.add(dark ? "dark" : "light")*/
    const slidecounter = ItemsList.length;
    this.sliderList = []
    for(let i = 0; i < slidecounter; i++) {
        this.sliderList.push(ItemsList[i])
        this.slider.appendChild(ItemsList[i])
        /*ItemsList[i].style.transform = `translateX(${i*50}%)`*/
    }

    this.prev = IconObj("left.svg", true)
    this.next = IconObj("right.svg", true)

    this.prev.className = "prev"
    this.next.className = "next"

    this.slider.appendChild(this.prev)
    this.slider.appendChild(this.next)

    let translation = 0;
    let current = 5
    current = parseInt(`${slidecounter/2}`)

    this.ApplyTranslation = function() {
        for (let i = 0; i < slidecounter; i++) {
            this.sliderList[i].style.transform = `translateX(${translation}%)`
        }
    }

    this.Delight = function() {
        this.sliderList[current].classList.remove("highlighted")
    }

    this.Highlight = function() {
        this.sliderList[current].classList.add("highlighted")
    }

    this.SlideLeft = function() {
        console.log(100*(slidecounter/2))
        if(translation < 100*slidecounter/2 - 50){
            translation += 100;
            this.Delight()
            current -= 1;
            this.Highlight()
            for (let i = 0; i < slidecounter; i++) {
                this.sliderList[i].style.transform = `translateX(${translation}%)`
            }
            this.ApplyTranslation()
        }
    }

    this.SlideRight = function() {
        if(translation > -1*100*slidecounter/2 + 50){
            translation -= 100;
            this.Delight()
            current+=1;
            this.Highlight()

            for (let i = 0; i < slidecounter; i++) {
                this.sliderList[i].style.transform = `translateX(${translation}%)`
            }
            this.ApplyTranslation()
        }
    }


    this.SlideTo = function(n) {
            translation = -1*100*n;
            for (let i = 0; i < slidecounter; i++) {
                this.sliderList[i].style.transform = `translateX(${translation}%)`
            }
            current = n;
        this.ApplyTranslation()
    }

    this.prev.addEventListener("mousedown", () => {
        this.SlideLeft()
    })

    this.next.addEventListener("mousedown", () => {
        this.SlideRight()
    })

    /*this.SlideTo(0)*/
}

function GridItem(text, img, link) {
    const item = document.createElement("div")
    item.classList.add("grid-item")

    const itemHref = document.createElement("a")
    const itemImg = document.createElement("img")
    const itemText = document.createElement("h1")
    if(link) itemHref.href = link
    if(img) itemImg.src = img
    if(text) itemText.innerText = text

    itemHref.appendChild(item)
    item.appendChild(itemImg)
    item.appendChild(itemText)
    return itemHref
}
function ItemGrid(dark, itemlist) {
    this.container = document.createElement("div")
    this.container.classList.add("items-grid")
    for(let i = 0; i < itemlist.length; i++) {
        this.container.appendChild(itemlist[i])
    }
}

function loadXMLDoc(source, func) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            func(this);
        }
    };
    xmlhttp.open("GET", source, true);
    xmlhttp.send();
}

