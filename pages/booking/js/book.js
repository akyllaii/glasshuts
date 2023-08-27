let bookList = document.querySelector('.book__list')



let services = [
    {
        "id" : 1,
        "title" : "Fresh Breakfast for one ",
        "price" : 400
    },
    {
        "id" : 2,
        "title" : "Fresh Breakfast for two ",
        "price" : 500
    },
    {
        "id" : 3,
        "title" : "Classic Dinner for one ",
        "price" : 600
    },
    {
        "id" : 4,
        "title" : "Classic Dinner for two ",
        "price" : 800
    },
    {
        "id" : 5,
        "title" : "Electric Car Charge",
        "price" : 800
    }
]

let cart = []
if (localStorage.getItem('cart') !== null) {
    cart = JSON.parse(localStorage.getItem('cart'))
}


const addToCheck = () => {
    services.forEach((item) => {
        bookList.innerHTML += `
        <li class="book__item">
                        <div class="book__item-row">
                            <button data-id="${item.id}" class="book__item-plus">+</button>
                            <div class="book__item-cont">
                                <div class="book__item-text">
                                    <h2 class="book__item-title">${item.title}</h2>
                                    <h3 class="book__item-price">${item.price}kr</h3>
                                </div>
                            </div>
                        </div>
                    </li>
        `
    })
    let bookBtn = document.querySelectorAll('.book__item-plus')
    Array.from(bookBtn).forEach((el) => {
        el.addEventListener('click', () => {
            const itemIndex = cart.findIndex((item)=> item.id == el.dataset.id);
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1); // удалить элемент из корзины
            } else {
                cart.push(services.find(item => item.id == el.dataset.id)); // добавить элемент в корзину
            }
            getToCheck();
            // остальной код




            if (el.classList.contains('book__item-plus')) {
                el.classList.remove('book__item-plus')
                el.innerHTML = `
            <button class="book__item-check"><span>
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 6.5L8.5 13.5L19.5 1" stroke="white"/>
</svg>
</span></button>
            `
            } else {
                el.innerHTML = `<button class="book__item-plus">+</button>`
                el.classList.add('book__item-plus')
            }
        })
    })

    bookBtn.forEach((item) => {
        if (item.classList.contains('book__item-check')) {

            getToCheck()
        }
    })
}
addToCheck()

let checkList = document.querySelector('.book__right-list')

console.log(cart)
const getToCheck = () => {
    checkList.innerHTML = ''
    Array.from(cart).forEach((elem) => {
        checkList.innerHTML += `
      <li class="book__right-item">
        <p class="book__right-title">${elem.title}</p>
        <p class="book__right-price">${elem.price} kr</p>
      </li>
    `
    })

    let bookTotal = document.querySelector('.book__total-price')
    bookTotal.textContent = `${cart.reduce((accum,rec) => {
        return accum + rec.price 
    },6400)} kr`
}
getToCheck()


let bookPay = document.querySelector('.book__btn')
bookPay.addEventListener('click', () => {
    location.href = 'http://localhost:63342/glasshuts/pages/pay/index.html'
})

let bookDays = document.querySelector('.book__right-days')
let checkin = document.querySelector('.checkin__date')
let checkout = document.querySelector('.checkout__date')
const countDays = () => {
    bookDays.innerHTML = `
    <p class="book__right-title">3.200kr x 2 nights</p>
    <p class="book__right-price"> 6.400kr</p>
    `
}
countDays()