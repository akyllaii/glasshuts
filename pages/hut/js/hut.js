let carChar = document.querySelector('.hut__car')
let hutTube = document.querySelector('.hut__tube')
let hutText = document.querySelector('.text')
let hutText2 = document.querySelector('.text2')
let hutText3 = document.querySelector('.text3')
let hutSpace = document.querySelector('.hut__space')
let hutKitchen = document.querySelector('.hut__kitchen')
let hutBath = document.querySelector('.hut__bath')
let hutBreak = document.querySelector('.hut__break')
let hutDinner= document.querySelector('.hut__dinner')

hutTube.addEventListener('click', () => {
    carChar.style.textDecoration = 'none'
    hutTube.style.textDecoration = 'underline'
    hutText.textContent = 'Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground.'
})

carChar.addEventListener('click', () => {
    carChar.style.textDecoration = 'underline'
    hutTube.style.textDecoration = 'none'
    hutText.textContent = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
})

hutSpace.addEventListener('click', () => {
    hutSpace.style.textDecoration = 'underline'
    hutBath.style.textDecoration = 'none'
    hutKitchen.style.textDecoration = 'none'
    hutText2.textContent = 'Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground.'
})
hutKitchen.addEventListener('click', () => {
    hutKitchen.style.textDecoration = 'underline'
    hutBath.style.textDecoration = 'none'
    hutSpace.style.textDecoration = 'none'
    hutText2.textContent = 'With kitchens being the hub of the home today, they often need a spot for keeping the household organized. Ideally, a mini office includes a desk for sorting mail, charging devices, stashing cookbooks, planning menus, keeping track of schedules and paying bills. A kitchen mini office also can be used for working at home when needed. Here are six key features of a successful kitchen workspace.'
})
hutBath.addEventListener('click', () => {
    hutKitchen.style.textDecoration = 'none'
    hutBath.style.textDecoration = 'underline'
    hutSpace.style.textDecoration = 'none'
    hutText2.textContent = 'With kitchens being the hub of the home today, they often need a spot for keeping the household organized. Ideally, a mini office includes a desk for sorting mail, charging devices, stashing cookbooks, planning menus, keeping track of schedules and paying bills. A kitchen mini office also can be used for working at home when needed. Here are six key features of a successful kitchen workspace.'
})
hutBreak.addEventListener('click',() => {
    hutBreak.style.textDecoration = 'underline'
    hutDinner.style.textDecoration = 'none'
    hutText3.textContent = 'Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.'
})
hutDinner.addEventListener('click', () => {
    hutBreak.style.textDecoration = 'none'
    hutDinner.style.textDecoration = 'underline'
    hutText3.textContent = 'Growing up, you had a favorite family dinner. Maybe it was Mom\'s bacon-wrapped meatloaf. Maybe it was Dad\'s sloppy Taco Tuesday production line. Maybe it was Nonna\'s fettuccine alfredo or your sister\'s chicken noodle soup. You walked through the door, looked at the stove, and let out a "Yessssssssssss." These are the recipes that you grew up with and will never grow out of.'
})

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.hut__slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}
