// Philip Tenteromano 7/27/2017 
//Lab 2


function compute() {
    var input1 = document.getElementById("num1");
    var input2 = document.getElementById("num2");
    var answer = document.getElementById("answer");
    if (input1.value == "" || input2.value == "") {
        alert("One or both fields were left blank")
    } else {
        var result = input1.value * input2.value;
        answer.value = result;
        answer.style.textAlign = "center";
    }
}

function convertName() {
    var input = document.getElementById("name");
    var name = input.value;
    var newName = '';
    var count = 0;
    var output = document.getElementById("convert");

    for (var i = name.length - 1; i >= 0; i--) {
        newName += name.charAt(i);
        count++;
    }
    output.value = newName;
}

// Make a favorite country list
var countrylist = [];

function addtolist() {
    var input = document.getElementById("country");
    if (input.value != "") {
        countrylist.push(input.value);
        input.value = "";
        update();
    } else {
        alert("Field was left blank")
    }
}

function clearlist() {
    countrylist = [];
    update();
}

function update() {
    var output = document.getElementById("clist");
    output.innerHTML = countrylist.join(", ");
}

var counter = 0; //declare click variable
var fontsize = 12; //declare fontsize variable

function fontchange() {
    var change = document.getElementById("colorchange");
    counter++; //count clicks to change 
    fontsize++; //font will get bigger each click
    if (fontsize <= 20) {
        if (counter % 2 == 1) {
            change.style.color = "blue";
            change.style.backgroundColor = "red";
            change.style.fontSize = fontsize + "px";
        } else {
            change.style.color = "red";
            change.style.backgroundColor = "blue";
        }
    } else {
        fontsize = 12; //reset fontsize if too big and...
        fontchange(); //recursive
    }
}