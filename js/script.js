// Question 1 //
let cat = { type: "complain" };

function catComplain() {
	if ((cat.type = "complain")) {
		console.log("meow!");
	}
}
catComplain();

// question 2 //

var subHeading = document.querySelector("h3");

subHeading.innerHTML = "Updated Heading";

// Question 3 //

subHeading.style.fontSize = "2em";

// Question 4 //

subHeading.classList.add("subheading");

// Question 5 //

let paragraphs = document.querySelectorAll("p");

for (const paragraph of paragraphs) {
	paragraph.style.color = "#ff0000";
}

// Question 6 //

let resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "Yellow";

// Question 7 //

const cats = [
	{
		name: "Blob",
		age: 10,
	},
	{
		name: "Kafu",
		age: 99,
	},
	{
		name: "Shallow",
		age: 69,
	},
	{
		name: "Harold",
	},
	{
		name: "Blurt",
		age: 21,
	},
];

function myFunction(list) {
	for (let i = 0; i < list.length; i++) {
		console.log(list[i].name);
	}
}

myFunction(cats);

// Question 8 //

let container = document.querySelector(".cat-container");

function createCats(listOfCats) {
	let render = "";
	for (let i = 0; i < listOfCats.length; i++) {
		render += `<li>name: ${listOfCats[i].name} age: ${listOfCats[i].age}</li>`;
	}
	container.innerHTML = render;
}

createCats(cats);
