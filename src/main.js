let amount = document.getElementById("amount");
let clicker = document.getElementById("clicker");

let snot = 0;

clicker.addEventListener("click", () => {
	snot += 1;
	amount.innerText = snot;
});
