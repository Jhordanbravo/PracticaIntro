const shoppingCarIcon = document.getElementById("shoppingCarIcon")
const shoppingCar = document.getElementById("shoppingCar")
const buttonAdd = document.getElementsByClassName("buttonAdd")
const cartAdds = document.getElementById("carObjects")
const menuIcon = document.getElementById("menuIcon")
const menu = document.getElementById("menu")
const menuCloseIcon = document.getElementById("menuCloseIcon")
const cartBadge = document.getElementById("cartBadge")

let cartItems = 0;

shoppingCarIcon.addEventListener("click", () => {
    shoppingCar.classList.toggle("show")
});

menuIcon.addEventListener("click", () => {
    menu.setAttribute("class", "showMenu")
})

menuCloseIcon.addEventListener("click", () => {
    menu.setAttribute("class", "menu")
})

document.querySelectorAll(".buttonAdd").forEach((button) => {
    button.addEventListener("click", () => {

        let buttonParent = button.parentElement;
        let buttonImage = buttonParent.querySelector("img").getAttribute("src");
        let buttonTitle = buttonParent.querySelector("h3").textContent;
        let buttonPrice = buttonParent.querySelector("p").textContent

        let carObject = document.createElement("article")
        cartAdds.append(carObject)

        carObject.setAttribute("class", "cart__content")

        let carImage = document.createElement("img")
        carImage.setAttribute("src", buttonImage)
        carImage.setAttribute("class", "cart__img cart__img--product")
        carObject.append(carImage)

        let carPrice = document.createElement("p")
        carPrice.textContent = buttonPrice;
        carPrice.setAttribute("class" , "cart__total_price")
        carObject.append(carPrice)

        let carTitle = document.createElement("p")
        carTitle.setAttribute("class", "cart__object")
        carTitle.textContent = buttonTitle;
        carObject.append(carTitle)

        cartItems++
        cartBadge.textContent = cartItems;

        carObject.addEventListener("mouseenter", () => {
            const cartEliminator = document.createElement("img");
            cartEliminator.setAttribute("src", "img/icono-quitar.png");
            cartEliminator.setAttribute("class", "cart__icon");
            carObject.append(cartEliminator)

            carObject.addEventListener("mouseleave", () => {
                cartEliminator.remove();
            })

            cartEliminator.addEventListener("click", () => {
                carObject.remove();
                cartItems = Math.max(0, cartItems - 1);
                cartBadge.textContent = cartItems;
        })
        
    })
})
})

//son las 5:43 de la mañana ya sueltanme

Recibido 11 de marzo 2026 (9)
