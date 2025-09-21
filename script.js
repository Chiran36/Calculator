const textField = document.getElementsByClassName("textField")[0];
const clearBtn = document.querySelector(".clear");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply")
const removeBtn = document.querySelector(".remove")

const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus")
const resultBtn = document.querySelector(".result");

const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine")

const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");

const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");

const percentBtn = document.querySelector(".percent");
const zeroBtn = document.querySelector(".zero");
const dotBtn = document.querySelector(".dot");




let result = null;
let publishedResult = 0;

let textFieldValue = null;


textField.addEventListener("keydown", (e) => {
    // Allow: numbers, operators, backspace, delete, arrows
    const allowedKeys = "0123456789+-*/%.÷";
    const controlKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Enter"];

    if (!allowedKeys.includes(e.key) && !controlKeys.includes(e.key)) {
        e.preventDefault(); // block the key
    }
});


removeBtn.addEventListener("click", () => {
    console.log("removed")
    textFieldValue = textField.value;
    textField.value = textFieldValue.slice(0, textFieldValue.length - 1);
});

clearBtn.addEventListener("click", () => {
    publishedResult = 0;
    textField.value = "";
});

divideBtn.addEventListener("click", () => {
    if (textField.value == textFieldValue + "÷") {
        return
    }
    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "÷"
});

plusBtn.addEventListener("click", () => {

    if (textField.value == textFieldValue + "+") {
        return
    }
    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "+"
});
minusBtn.addEventListener("click", () => {
    if (textField.value == textFieldValue + "-") {
        return
    }
    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "-"
})


multiplyBtn.addEventListener("click", () => {
    if (textField.value == textFieldValue + "×") {
        return
    }
    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "×"
});



sevenBtn.addEventListener("click", () => {

    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "7"
});
eightBtn.addEventListener("click", () => {

    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "8"
});

nineBtn.addEventListener("click", () => {

    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "9"
});

fourBtn.addEventListener("click", () => {

    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "4"
});

fiveBtn.addEventListener("click", () => {

    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "5"
});

sixBtn.addEventListener("click", () => {

    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "6"
});

oneBtn.addEventListener("click", () => {

    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "1"
});

twoBtn.addEventListener("click", () => {

    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "2"
});

threeBtn.addEventListener("click", () => {

    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "3"
});

percentBtn.addEventListener("click", () => {
    if (textField.value == textFieldValue + "%") {
        return
    }
    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "%"
})

zeroBtn.addEventListener("click", () => {
    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "0"
})

dotBtn.addEventListener("click", () => {
    textFieldValue = textField.value;
    console.log(textFieldValue);
    textField.value = textFieldValue + "."
})






resultBtn.addEventListener("click", () => {
    if (publishedResult === 0) {
        const parts = textField.value.split(/([+\-*/%÷×])/);

        result = calculation(parts);
        textField.value += `=${result}`

        publishedResult++;

    }




})
textField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        if (publishedResult === 0) {
            const parts = textField.value.split(/([+\-*/%÷×])/);
            result = calculation(parts);
            textField.value += `=${result}`
            publishedResult++;
        }
    }

})

function calculation(parts) {
    function plus(a, b) {
        return a + b;
    }

    function minus(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }
    function percent(a, b) {
        console.log("value of b:", b)
        if (b == 0) {
            return a / 100;
        }
        return (a / 100) * b
    }
    let newValue = null;
    let newArray = [];
    while (newArray.length !== 1) {
        if (parts[1] == '+') {
            newValue = plus(Number(parts[0]), Number(parts[2]));
            newArray = parts.slice(3);
            newArray.unshift(newValue);
            parts = newArray;

        }
        else if (parts[1] == '-') {
            newValue = minus(Number(parts[0]), Number(parts[2]));
            newArray = parts.slice(3);
            newArray.unshift(newValue);
            parts = newArray;

        }
        else if (parts[1] == '*' || parts[1] == "×") {
            newValue = multiply(Number(parts[0]), Number(parts[2]));
            newArray = parts.slice(3);
            newArray.unshift(newValue);
            parts = newArray;

        }
        else if (parts[1] == "/" || parts[1] == "÷") {
            newValue = divide(Number(parts[0]), Number(parts[2]));
            newArray = parts.slice(3);
            newArray.unshift(newValue);
            parts = newArray;


        }
        else if (parts[1] == "%") {
            if (parts[2] == "") {
                newValue = percent(Number(parts[0]), 1);
                newArray = parts.slice(3);
                newArray.unshift(newValue);
                parts = newArray;
            }
            else {
                newValue = percent(Number(parts[0]), Number(parts[2]));
                newArray = parts.slice(3);
                newArray.unshift(newValue);
                parts = newArray;
            }
        }
    }
    return parts[0];
}


