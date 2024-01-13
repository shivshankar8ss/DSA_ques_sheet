function clearInput() {
    document.getElementById("disp").value = '';
}

function appendToDisplay(value) {
    document.getElementById("disp").value += value;
}

function calculate() {
    try {
        document.getElementById("disp").value = eval(document.getElementById("disp").value);
    } catch (error) {
        document.getElementById("disp").value = "Error";
    }
}
