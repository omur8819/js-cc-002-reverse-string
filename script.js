

const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.addEventListener("click", reverseStringHandler);

function reverseStringHandler() {
    console.log(input.value);
    let text = "";
    for (var i = input.value.length; i >= 0; i--) {
        text = text + input.value.charAt(i)
    }



    document.querySelector("#reversed").innerText = text;
};