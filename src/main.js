let snotCounter = document.getElementById("snot-counter");
let spsCounter = document.getElementById("sps-counter");
let c = document.getElementById("clicker");

let updateInterval;
let spsInterval;

let sps = 0;
let snot = 0;

let upgrades = {
	finger: 0,
	nostril: 0
}

let clicker = {
	click() {
		snot += 1;
		update();
	},
}

updateInterval = setInterval(() => update("default"), 1);
spsInterval = setInterval(() => snot += sps / 10, 100);

c.addEventListener("click", clicker.click);

function update(type = "default") {
	switch (type) {
		case "default": {
			snotCounter.innerText = Math.round(snot);
			spsCounter.innerText = Math.round(sps);
		} break;
	}
}
