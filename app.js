let form = document.getElementById("form");
let input = document.getElementById("input");
let coin = document.getElementById("coin");
let price = document.getElementById("price");

function getData(query) {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${query}&vs_currencies=usd`)
    .then(response => response.json())
    .then(data => {
        if (data[query]) {
            coin.innerHTML = input.value.toUpperCase();
            price.innerHTML = data[query].usd + "$";
            console.log(data);
        } else {
            alert("Introduzca el nombre correcto");
            input.value = "";
        }
    })
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    getData(input.value.toLowerCase());
})