const slides = document.querySelectorAll('.cabins__slide')
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

let bookBtn = document.querySelectorAll('.btn')
let aboutBtn = document.querySelector('.about__btn')

const clickBtn = () => {
    Array.from(bookBtn).forEach((item) => {
        item.addEventListener('click', () => {
            location.href = `http://localhost:63342/glasshuts/pages/booking/index.html`
        })
    })
}
clickBtn()

aboutBtn.addEventListener('click', () => {
    location.href  =`http://localhost:63342/glasshuts/pages/about/index.html`
})