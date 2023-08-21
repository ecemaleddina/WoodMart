const navbarLiShop = document.querySelectorAll("#navbarLiShop")[0];
const shopLi = document.querySelectorAll(".strange-drpdwn-list .category-li");
document.querySelectorAll(".strange-content")[0].style.visibility = "hidden";
document.querySelectorAll(".strange-content")[0].style.opacity = "0";
navbarLiShop.onmouseenter = () => {
    document.querySelectorAll(".strange-content").forEach(x=>{
        x.style.visibility = "visible"
        x.style.opacity = "1"
    });
    shopLi.forEach(current => {
        current.onmouseenter = () => {
            current.classList.add("active-category");
            current.lastElementChild.style.visibility = "visible";
            current.lastElementChild.style.opacity = "1";
            shopLi.forEach(y => {
                if (y != current) {
                    y.classList.remove("active-category");
                    y.lastElementChild.style.visibility = "hidden";
                    y.lastElementChild.style.opacity = "0";
                }
            });
        }
    });
}

navbarLiShop.onmouseleave = () => {
    document.querySelectorAll(".strange-content").forEach(x=>{
        x.style.visibility = "hidden"
        x.style.opacity = "0"
    });
}



document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementsByClassName("close")[0];

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
});

document.addEventListener("DOMContentLoaded", function () {
    const openPopUp = document.getElementById("openPopUp");
    const closePopUp = document.getElementById("closePopUp");
    const popupLogin = document.getElementById("popupLogin");

    openPopUp.addEventListener("click", function (){
        popupLogin.classList.add("active");
    });

    closePopUp.addEventListener("click", function (){
        popupLogin.classList.remove("active");
    });
});

function addToCart() {
    const dec = document.querySelector('.dec');
    const inc = document.querySelector('.inc');
    const inp = document.querySelector('.num-box');

    dec.addEventListener('click', () => {
        const currentValue = parseInt(inp.value);
        if (currentValue > 1) {
            inp.value = currentValue - 1;
        }
    })

    inc.addEventListener('click', () => {
        const currentValue = parseInt(inp.value);
        inp.value = currentValue + 1;
    })
}

addToCart();