const btn = document.querySelectorAll(".products-item .card-icon");

btn.forEach((item) => {
    item.addEventListener("click", () => {
        item.style.backgroundColor = "white";
        item.innerHTML = "Добавлено в корзину";
        setTimeout(function (){
            item.style.backgroundColor = "powderblue";
            item.innerHTML = "Купить";
        },1500);
    });
});


