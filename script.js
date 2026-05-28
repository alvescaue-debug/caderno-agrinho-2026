# script.js

```javascript
const botao = document.getElementById("btnSaibaMais");

botao.addEventListener("click", () => {

    const secao = document.getElementById("educacao");

    secao.scrollIntoView({
        behavior: "smooth"
    });

});


const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});
```
