class upgrade {
	constructor(cost, sps, multiplier = 0.1) {
		this.baseCost = cost;
		this.sps = sps;
		this.multiplier = multiplier;

		this.amount = 0;
		this.cost = this.baseCost;
	}

	buy(amount = 1) {
		this.cost = this.baseCost + (this.cost * this.amount * this.multiplier);
		this.amount += amount;

		update("upgrades");
	}
}

let snotCounter = document.getElementById("snot-counter");
let spsCounter = document.getElementById("sps-counter");
let upgradesContainer = document.getElementById("upgrades");
let c = document.getElementById("clicker");

let updateInterval;
let spsInterval;

let sps = 0;
let snot = 0;

let upgrades = {
	finger:		new upgrade(100, 0.1, 0.1),
	nostril:	new upgrade(1000, 1, 0.1)
}

let clicker = {
	click() {
		snot += 1;
		update();
	},
}

update("upgrades");

updateInterval = setInterval(() => update("default"), 1);
spsInterval = setInterval(() => snot += sps / 25, 50);

c.addEventListener("click", clicker.click);

function update(type = "default") {
	switch (type) {
		case "default": {
			snotCounter.innerText = Math.round(snot);
			spsCounter.innerText = Math.round(sps);
		} break;

		case "upgrades": {
			upgradesContainer.innerHTML = "";

			Object.keys(upgrades).forEach((u) => {
				let upgrade = document.createElement("div");
				upgrade.classList.add("upgrade");
				
				{
					let name = document.createElement("div");
					name.classList.add("name");
					name.innerText = u;
					upgrade.appendChild(name);

					let cost = document.createElement("div");
					cost.classList.add("cost");
					cost.innerText = upgrades[u].cost;
					upgrade.appendChild(cost);

					let amount = document.createElement("div");
					amount.classList.add("amount");
					amount.innerText = upgrades[u].amount;
					upgrade.appendChild(amount);
				}

				{
					upgrade.addEventListener("click", () => {})
				}

				upgradesContainer.appendChild(upgrade);
			});
		} break;
	}
}
