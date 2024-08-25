let colorYellow = "rgb(250, 208, 68)";
let colorBlack = "rgb(10, 10, 10)";
let colorWhite = "rgb(255, 243, 226)";

let form1 = document.querySelector(".primeiro");
let form2 = document.querySelector(".segundo");

let button = document.getElementById("primeiro");
let button2 = document.getElementById("segundo");

function login() {
	checador(true);
}
function cadastrar() {
	checador(false);
}

function checador(trueOrFalse) {
	if (trueOrFalse) {
		form1.style.display = "flex";
		form2.style.display = "none";
	} else {
		form2.style.display = "flex";
		form1.style.display = "none";
		button.style.color = colorBlack;
		button.style.backgroundColor = colorYellow;
		button2.style.color = colorWhite;
		button2.style.backgroundColor = colorBlack;
	}
}
checador(true);
