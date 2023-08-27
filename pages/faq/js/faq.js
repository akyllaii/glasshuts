let acc = document.querySelectorAll('.faq__block');
let arrow = document.querySelectorAll('.faq__arrow');


const showBlock = () => {
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            this.classList.add("active");
            let hide = this.nextElementSibling;
            if (hide.style.display === "block") {
                hide.style.display = "none";
            } else {
                hide.style.display = "block";
            }
        });
        acc[i].addEventListener('click', function() {
            if (this.classList.contains("active")) {
                this.classList.remove("active");
            }
        });
    }
}
showBlock();