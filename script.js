var button = document.getElementsByTagName("button")[0]
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li);
	input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}	
}

button.addEventListener("click", addListAfterClick); 

input.addEventListener("keypress",addListAfterKeypress)



input.addEventListener("keypress", function(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value))
		ul.appendChild(li);
		input.value = "";
	}
})

