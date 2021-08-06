// =============================  PLACES

let places = [
    {
        id: 1,
        name: 'Mumbai',
        text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veritatis, Nam!',
        stars: 4,
        price: [90, 120]
    },
    {
        id: 2,
        name: 'Hawaii',
        text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veritatis, Nam! ',
        stars: 5,
        price: [100, 220]
    },
    {
        id: 3,
        name: 'Sydney',
        text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veritatis, Nam!',
        stars: 4,
        price: [250]
    },
    {
        id: 4,
        name: 'Paris',
        text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veritatis, Nam!',
        stars: 3,
        price: [90, 120]
    },
    {
        id: 5,
        name: 'Tokyo',
        text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veritatis, Nam!',
        stars: 4,
        price: [90, 120]
    },
    {
        id: 6,
        name: 'Egypt',
        text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veritatis, Nam!',
        stars: 5,
        price: [50, 90]
    },
]

// window.onload(function () {
let placesDiv = document.querySelector('.places')
for (let i = 0; i < places.length; i++) {
    let newPlace = document.createElement('div')
    newPlace.classList.add('place')
    let placeImg = document.createElement('img')
    placeImg.classList.add('place-img')
    placeImg.src = `./images/p-${places[i].id}.jpg`
    let placeInfo = document.createElement('div')
    placeInfo.classList.add('place-info')
    let placeName = document.createElement('span')
    let mapIcon = document.createElement('i')
    placeName.classList.add('place-name')
    mapIcon.classList.add('fas', 'fa-map-marker-alt')
    placeName.appendChild(mapIcon)
    placeName.innerHTML += ' ' + places[i].name
    let placeText = document.createElement('p')
    placeText.classList.add('place-text')
    placeText.innerHTML = places[i].text
    let stars = document.createElement('div')
    stars.classList.add('place-stars')
    for (let j = 0; j < 5; j++) {
        let star = document.createElement('i')
        star.classList.add('fa-star')
        if (j < places[i].stars) star.classList.add('fas')
        else star.classList.add('far')
        stars.appendChild(star)
    }
    let prices = document.createElement('div')
    prices.classList.add('place-price')
    let newPrice = document.createElement('span')
    newPrice.innerHTML = places[i].price[0]
    newPrice.classList.add('place-nowPrice')
    let oldPrice = document.createElement('span')
    oldPrice.innerHTML = places[i].price[1] ?? ''
    oldPrice.classList.add('place-oldPrice')
    prices.appendChild(newPrice)
    prices.appendChild(oldPrice)

    let btn = document.createElement('button')
    btn.classList.add('bookNow-btn', 'btn-buy')
    btn.innerHTML = 'Book now'

    placeInfo.appendChild(placeName)
    placeInfo.appendChild(placeText)
    placeInfo.appendChild(stars)
    placeInfo.appendChild(prices)
    placeInfo.appendChild(btn)
    newPlace.appendChild(placeImg)
    newPlace.appendChild(placeInfo)
    placesDiv.appendChild(newPlace)
}
// })


// ============= SEARCHING

const searchIcon = document.querySelector('#search')

searchIcon.addEventListener('click', function () {
    if (this.classList.contains('fa-search')) {
        this.classList.add('fa-times')
        this.classList.remove('fa-search')
        document.querySelector('.search').style.opacity = '1'
        document.querySelector('.search').style.top = '75px'
    } else {
        this.classList.add('fa-search')
        this.classList.remove('fa-times')
        document.querySelector('.search').style.opacity = '0'
        document.querySelector('.search').style.top = '0'
    }
})

// ============================== MODAL WINDOW

const modalClose = document.querySelector('#modal-close')
const modalOpen = document.querySelector('#modal-open')
const modal = document.querySelector('.modal-login')
let isModalLogin = false

modalOpen.addEventListener('click', function () {
    isModalLogin = true
    modal.style.display = 'flex'
})

modalClose.addEventListener('click', function () {
    isModalLogin = false
    modal.style.display = 'none'
})

window.addEventListener('scroll', function () {
    if (isModalLogin) {
        isModalLogin = false
        modal.style.display = 'none'
    }
})

//=============================== VIDEO CHANGER

let videoBtns = document.querySelectorAll('.new-video')

for (let i = 0; i < videoBtns.length; i++) {
    videoBtns[i].addEventListener('click', function () {
        for (let btn of videoBtns) {
            btn.classList.remove('active')
        }
        document.querySelector('.top_video').src = `./images/vid-${videoBtns[i].getAttribute('data-video')}.mp4`;
        videoBtns[i].classList.add('active')
    })
}