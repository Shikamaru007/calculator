
const display = document.getElementById("display")
const clear = document.getElementById("clear")

function btn(input) {
    display.value += input;
}

clear.onclick = function() {
    display.value = "";
}

function calculate(){
    
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "eRRoR"
    }
}
