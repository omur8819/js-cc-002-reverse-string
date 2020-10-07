

const input = document.querySelector("#text_input");
const button = document.querySelector("#button_1");

button.addEventListener("click", reverseStringHandler);

function reverseStringHandler() {
    console.log(input.value);
    let text = "";
    for (var i = input.value.length; i >= 0; i--) {
        text += input.value.charAt(i)
    }



    document.querySelector("#reversed_text").innerText = text;
};