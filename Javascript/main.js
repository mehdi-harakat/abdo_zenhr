import * as mainMain from "../Javascript/data.js";

const navNav = document.querySelector("header .container .nav-bar");
const aboutSys = document.querySelectorAll("header .first-nav li");
const abUs = document.querySelector("header .third-nav");
const windowTwo = document.querySelector("header .window-a-a");
const navIcon = document.querySelectorAll("header .container .nav-icon i");
const mainInput = document.querySelector("main .container .search input");
const mainBox = document.querySelector("main .container .main-boxes");
const sectionArticles = document.querySelector("section .container .articles");

let mainArray = Object(mainMain.articles);
// ---------------------------------------- fetch json and create Elements------------------------------------------
// fetch("../JSON/main.json")
// 	.then((resolve) => {
// 		let mainJson = resolve.json();
// 		return mainJson;
// 	})
// 	.then((resol) => {
// 		let lettersArray = Array.from(Object.keys(resol.articles));
// 		createLettersButtons(lettersArray); // call back function --------------------------------

// 		mainArray = Object(resol.articles);

// 		return resol.articles;
// 	})
// 	.then((res) => {
// 		createArticles(res); // call back function-----------------------
// 	});

let lettersArray = Array.from(Object.keys(mainArray));
createLettersButtons(lettersArray); // call back function --------------------------------
createArticles(mainArray); // call back function-----------------------

let letterBtn = document.querySelectorAll("main .main-boxes div");
letterBtn.forEach((elem) => {
	elem.addEventListener("click", () => {
		clickOneTwo(elem);
	});
});

// ------------ Create Letters ---------------------------------------------
function createLettersButtons(test) {
	test.forEach((e) => {
		let createBox = `
			<div data-letter="${e}" class="letter" onclick="clickOneTwo(this)">${e}</div>
		`;
		mainBox.innerHTML = mainBox.innerHTML + createBox;
	});
}

function clickOneTwo(e) {
	let buttonActive = Array.from(e.parentElement.children);
	buttonActive.forEach((element) => {
		if (element.dataset.letter === e.dataset.letter) {
			element.classList.add("active");
		} else {
			element.classList.remove("active");
		}
	});

	let lelett;
	if (e.hasAttribute("data-letter")) {
		lelett = e.dataset.letter;
	} else {
		lelett = e.value;
	}

	if (lelett === "الكل") {
		createArticles(mainArray);
	} else {
		let valueone = Object.entries(mainArray[lelett]);

		let obj = {
			[lelett]: {},
		};

		for (let i = 0; i < valueone.length; i++) {
			obj[lelett][`${valueone[i][0]}`] = [`${valueone[i][1]}`];
		}
		createArticles(obj);
	}
}

// -------------- Create Articles -----------------------------------------
function createArticles(mainnn) {
	sectionArticles.innerHTML = "";
	let bigLetter = Array.from(Object.keys(mainnn));

	bigLetter.forEach((e) => {
		createElementByElement(e, mainnn);
	});
}

function createElementByElement(test, testThree) {
	let artBoxes = document.createElement("div");
	artBoxes.className = "artic-boxes";
	let letterrr = document.createElement("div");
	letterrr.className = "big-letter";
	let hTwo = document.createElement("h2");
	hTwo.innerHTML = test;
	let artText = document.createElement("div");
	artText.className = "artic-text";

	let titleValue = Object.keys(testThree[test]);
	let paraValue = Object.values(testThree[test]);

	titleValue.forEach((ele, ind) => {
		let artCard = document.createElement("div");
		artCard.className = "artic-card";
		let HThree = document.createElement("h3");
		HThree.innerHTML = ele;
		let para = document.createElement("p");
		para.innerHTML = paraValue[ind];
		artCard.append(HThree, para);
		artText.appendChild(artCard);
	});

	letterrr.appendChild(hTwo);
	artBoxes.append(letterrr, artText);
	sectionArticles.appendChild(artBoxes);
}

// _________________________________________________________________________________________________________________

let catchValue = false;

window.addEventListener("resize", () => {
	catchFunction();
});

catchFunction();

function catchFunction() {
	if (window.innerWidth <= 992) {
		catchValue = true;
	} else {
		catchValue = false;
	}
}

if (window.innerWidth >= 992) {
	aboutSys.forEach((ele) => {
		ele.addEventListener("click", navOneFunction);
	});

	window.addEventListener("click", (eee) => {
		if (eee.target.classList.contains("found")) {
			aboutSys.forEach((ele) => {
				ele.addEventListener("click", navOneFunction);
			});
		} else {
			aboutSys.forEach((ele) => {
				ele.classList.remove("active");
				ele.ariaExpanded = false;
			});
		}
	});
} else {
	aboutSys.forEach((ele) => {
		ele.addEventListener("click", navOneFunction);
	});
}

function navOneFunction() {
	aboutSys.forEach((e) => {
		if (e.className === this.className) {
			if (e.getAttribute("aria-expanded") === "false") {
				e.classList.add("active");
				e.ariaExpanded = true;
			} else {
				e.classList.remove("active");
				e.ariaExpanded = false;
			}
		} else {
			e.classList.remove("active");
			e.ariaExpanded = false;
		}
	});
}

aboutUsEvents();

function aboutUsEvents() {
	abUs.addEventListener("click", () => {
		if (catchValue === true) {
			windowTwo.classList.toggle("active");
		}
	});

	abUs.addEventListener("mouseover", () => {
		if (catchValue === false) {
			windowTwo.classList.add("active");
		}
	});

	abUs.addEventListener("mouseout", () => {
		if (catchValue === false) {
			windowTwo.classList.remove("active");
		}
	});
}

navIcon.forEach((e) => {
	e.addEventListener("click", () => {
		if (e.classList.contains("fa-bars")) {
			navNav.classList.add("active");
		} else if (e.classList.contains("fa-xmark")) {
			navNav.classList.remove("active");
		}

		navIcon.forEach((ele) => {
			if (ele.ariaExpanded === "true") {
				ele.ariaExpanded = false;
			} else {
				ele.ariaExpanded = true;
			}
		});
	});
});

// -----------------------------------------------------

const mainHeader = document.querySelector("header");
const upButton = document.querySelector(".up i");

window.addEventListener("scroll", () => {
	if (scrollY >= 92) {
		mainHeader.classList.add("active");
	} else {
		mainHeader.classList.remove("active");
	}

	if (scrollY >= 280) {
		upButton.classList.add("active");
	} else {
		upButton.classList.remove("active");
	}
});

upButton.addEventListener("click", () => {
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});
