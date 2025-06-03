
function appendToBar(value) {
    document.getElementById("bar").value += value;
}

function clearBar() {
    document.getElementById("bar").value = "";
}

function calculate() {
    try {
        const result = eval(document.getElementById("bar").value);
        document.getElementById("bar").value = result;
    } catch (error) {
        document.getElementById("bar").value = "Error";
    }
}

function calculateExponent() {
    const expression = document.getElementById("bar").value;
    const operand = parseFloat(expression);
    if (!isNaN(operand)) {
        const result = Math.pow(operand, 2);;
        document.getElementById("bar").value = result;
    } else {
        document.getElementById("bar").value = "Invalid Input";
    }
}



function calculateSquareRoot() {
    const expression = document.getElementById("bar").value;
    const operand = parseFloat(expression);
    if (!isNaN(operand)) {
        const result = Math.sqrt(operand);
        document.getElementById("bar").value = result;
    } else {
        document.getElementById("bar").value = "Invalid Input";
    }
}


