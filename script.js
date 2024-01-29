
const array = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const value =
			Math.ceil(Math.random() * array.length) % 2 === 0 ? true : false;
		if (value === true) {
			resolve("Value is true");
		} else {
			reject("Value is false");
		}
	}, 2000);
});

promise.then((result) => {
	console.log(result);
});
promise.catch((error) => {
	console.log(error);
});

const colors = [
	"#ff0000",
	"#00ff00",
	"#0000ff",
	"#ffff00",
	"#ff00ff",
	"#00ffff",
	"#000000",
	"#ffffff",
];

function changeColor() {
	const randomIndex = Math.floor(Math.random() * colors.length);
	const colorsQuare = document.getElementById("color");
	colorsQuare.style.backgroundColor = colors[randomIndex];
}

setInterval(changeColor, 1000);

const inputText = document.getElementById("textInput");
const secondInput = document.getElementById("minisecond");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

let setIntervalId;
let num = 0;
const counter = () => {
	inputText.value = num += +inputText.value;
	inputText.innerHTML = num;
};

const startSetInterval = () => {
	if (!setIntervalId) {
		setIntervalId = setInterval(counter, secondInput.value);
		console.log(setIntervalId);
	} else {
		console.log("Таймер уже запущен!");
	}
};

const stopSetInterval = () => {
	clearInterval(setIntervalId);
	setIntervalId = null;
};

startButton.onclick = startSetInterval;
stopButton.onclick = stopSetInterval;
