const addInputBtn = document.getElementById("addInput");
const inputPlace = document.getElementById("iniputPlace");
const addBtn = document.getElementById("addBtn");
const result = document.getElementById("result");

// add inputs using loop
addInputBtn.addEventListener("click", () => {
    for (let i = 0; i < 1; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = i === 0 ? "First number" : "Second number";
        inputPlace.appendChild(input);
    }
});

// calculate sum
addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const inputs = inputPlace.querySelectorAll("input");
    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value !== "") {
            sum += Number(inputs[i].value);
        }
    }

    result.textContent = "Result: " + sum;
});









// add inputs using forEach
addInputBtn.addEventListener("click", () => {
    const placeholders = ["Number here........."];

    placeholders.forEach(text => {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = text;
        inputPlace.appendChild(input);
    });
});

// calculate sum using forEach
addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const inputs = inputPlace.querySelectorAll("input");
    let sum = 0;

    inputs.forEach(input => {
        if (input.value !== "") {
            sum += Number(input.value);
        }
    });

    result.textContent = "Result: " + sum;
});
