// variable for function updateCards
let currentIndex = 0;
// reference variables for each card
const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const d3 = document.querySelector(".d3");
const d4 = document.querySelector(".d4");

// reference variables for the radio buttons
const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");
const btn4 = document.querySelector("#button4");

// array variable that holds reference to all cards
const cards = Array.from(document.querySelectorAll(".card"));

// reference variable to hamburger icon at smaller scren size (< 992px)
const menuIcon = document.getElementById("menuIcon");
// reference variable for dropdown menu at smaller screen size (< 992px)
const menuWrapperSM = document.querySelector(".menu-wrapper-sm");
//reference variable for main tag
const bgFade = document.getElementById("background-fade");

// reference variables for nav options at larger screens(>991px)
const shopNav = document.querySelector(".primary-nav-lg-item1");
const brandsNav = document.querySelector(".primary-nav-lg-item2");
const dealsNav = document.querySelector(".primary-nav-lg-item3");
const servicesNav = document.querySelector(".primary-nav-lg-item4");

// reference variables for dropdown menus at larger screens(>991px)
const shopDropDown = document.querySelector(".menu-wrapper-lg-shop");
const brandsDropDown = document.querySelector(".menu-wrapper-lg-brands");
const dealsDropDown = document.querySelector(".menu-wrapper-lg-deals");
const servicesDropDown = document.querySelector(".menu-wrapper-lg-services");

//reference variables for nav arrows at larger screens(>991px)
const shopArrow = document.getElementById("shop-item");
const brandsArrow = document.getElementById("brands-item");
const dealsArrow = document.getElementById("deals-item");
const servicesArrow = document.getElementById("services-item");

// array of reference variables for nav arrows at larger screens(>991px)
const arrowElements = [shopArrow, brandsArrow, dealsArrow, servicesArrow];

// function to set display value for all reference variables for nav arrows at larger screens(>991px)
function setDisplay(string1, string2, string3, string4) {
	shopDropDown.style.display = `${string1}`;
	brandsDropDown.style.display = `${string2}`;
	dealsDropDown.style.display = `${string3}`;
	servicesDropDown.style.display = `${string4}`;
}
// function that sets all display values to none using setDisplay
function closeDropdown() {
	setDisplay("none", "none", "none", "none");
}
// function that removes background filter when menu is closed
function removeFilter() {
	if (bgFade.classList.contains("active-brightness")) {
		bgFade.classList.toggle("active-brightness");
	}
}
// function that adds background filter when menu is open
function addFilter() {
	if (!bgFade.classList.contains("active-brightness")) {
		bgFade.classList.toggle("active-brightness");
	}
}
// function that changes icon for nav bar at smaller scren size (< 992px)
function menuIconChange() {
	menuIcon.classList.toggle("fa-bars");
	menuIcon.classList.toggle("fa-xmark");
}
// function that changes arrow direction for nav bar options at larger scren size (> 991px)
function setNavArrow(navOption) {
	navOption.classList.toggle("fa-arrow-down");
	navOption.classList.toggle("fa-arrow-up");
}
// function that changes arrow direction to down for nav bar options at larger scren size (> 991px)
function processArrowElements(ignoreIndex) {
	arrowElements.forEach((arrow, index) => {
		if (index !== ignoreIndex) {
			if (arrow.classList.contains("fa-arrow-up")) {
				setNavArrow(arrow);
			}
		}
	});
}
// function that closes dropdown(smaller screen size) when page gets larger than 991px
// function that changes menu icon to hamburger(smaller screen size) when page gets larger than 991px
//function that removes background filter when page gets larger than 991px and dropdown open(smaller screen size).
function windowUpsize() {
	if (window.innerWidth >= 992) {
		menuWrapperSM.style.display = "none";

		const condition =
			bgFade.classList.contains("active-brightness") &&
			shopDropDown.style.display == "none" &&
			brandsDropDown.style.display == "none" &&
			dealsDropDown.style.display == "none" &&
			servicesDropDown.style.display == "none";

		if (menuIcon.classList.contains("fa-xmark")) {
			menuIconChange();
		}
		if (condition) {
			bgFade.classList.toggle("active-brightness");
		}
	}
}

// function that closes dropdown(larger screen size) when page gets smaller than 992px
// function that changes arrow icons to facing down (larger screen size) when page gets smaller than 992px
//function that removes background filter when page gets smaller than 992px and dropdown open(larger screen size).
function windowDownsize() {
	if (window.innerWidth < 992) {
		closeDropdown();
		processArrowElements();

		if (
			bgFade.classList.contains("active-brightness") &&
			menuWrapperSM.style.display == "none"
		) {
			bgFade.classList.toggle("active-brightness");
		}
	}
}
// set all card positions to their default.
function resetTranslateX() {
	cards.forEach((card) => {
		card.style.transform = "translateX(0)";
	});
}
// helper function that changes position of all cards based on currentIndex variable.
function updateCards() {
	if (currentIndex == 0) {
		d1.style.transform = "translateX(0)";
		d2.style.transform = "translateX(0)";
		d3.style.transform = "translateX(0)";
		d4.style.transform = "translateX(0)";
	} else if (currentIndex == 1) {
		d1.style.transform = "translateX(-100%)";
		d2.style.transform = "translateX(-100%)";
		d3.style.transform = "translateX(-100%)";
		d4.style.transform = "translateX(-100%)";
	} else if (currentIndex == 2) {
		d1.style.transform = "translateX(-200%)";
		d2.style.transform = "translateX(-200%)";
		d3.style.transform = "translateX(-200%)";
		d4.style.transform = "translateX(-200%)";
	} else if (currentIndex == 3) {
		d1.style.transform = "translateX(-300%)";
		d2.style.transform = "translateX(-300%)";
		d3.style.transform = "translateX(-275%)";
		d4.style.transform = "translateX(-275%)";
	}
}
// function that changes position of all cards based on currentIndex variable.
function showCard(cardIndex) {
	currentIndex = cardIndex;
	updateCards();
}

// event listener that opens or closes nav dropdown at smaller screen sizes(< 992px)
menuIcon.addEventListener("click", () => {
	menuIconChange();

	bgFade.classList.toggle("active-brightness");

	if (menuIcon.classList.contains("fa-xmark")) {
		menuWrapperSM.style.display = "block";
	} else {
		menuWrapperSM.style.display = "none";
	}
});

// event listener that opens or closes nav dropdown for shop option at larger screen sizez(>991px)
shopNav.addEventListener("click", () => {
	setNavArrow(shopArrow);

	if (shopArrow.classList.contains("fa-arrow-up")) {
		setDisplay("block", "none", "none", "none");
		addFilter();
		processArrowElements(0);
	} else {
		closeDropdown();
		removeFilter();
	}
});
// event listener that opens or closes nav dropdown for brands option at larger screen sizez(>991px)
brandsNav.addEventListener("click", () => {
	setNavArrow(brandsArrow);

	if (brandsArrow.classList.contains("fa-arrow-up")) {
		setDisplay("none", "block", "none", "none");
		addFilter();
		processArrowElements(1);
	} else {
		closeDropdown();
		removeFilter();
	}
});
// event listener that opens or closes nav dropdown for deals option at larger screen sizez(>991px)
dealsNav.addEventListener("click", () => {
	setNavArrow(dealsArrow);

	if (dealsArrow.classList.contains("fa-arrow-up")) {
		setDisplay("none", "none", "block", "none");
		addFilter();
		processArrowElements(2);
	} else {
		closeDropdown();
		removeFilter();
	}
});
// event listener that opens or closes nav dropdown for services option at larger screen sizez(>991px)
servicesNav.addEventListener("click", () => {
	setNavArrow(servicesArrow);

	if (servicesArrow.classList.contains("fa-arrow-up")) {
		setDisplay("none", "none", "none", "block");
		addFilter();
		processArrowElements(3);
	} else {
		closeDropdown();
		removeFilter();
	}
});

// event listeners for all radio buttons linked to the cards.
btn1.addEventListener("click", () => {
	showCard(0);
});

btn2.addEventListener("click", () => {
	showCard(1);
});

btn3.addEventListener("click", () => {
	showCard(2);
});

btn4.addEventListener("click", () => {
	showCard(3);
});

// event listener that deals with changes in screen size.
window.addEventListener("resize", () => {
	if (window.innerWidth >= 992) {
		resetTranslateX();
		windowUpsize();
	} else {
		windowDownsize();
	}
});
