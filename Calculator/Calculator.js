function clearScreen() {
    document.getElementById("result").value = "";
}
 
function display(inputValue) {
    document.getElementById("result").value += inputValue;
}
 
function calculate() {
    var input = document.getElementById("result").value;
    var answer = eval(input);
    document.getElementById("result").value = answer;
}