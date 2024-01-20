// let btn = document.querySelector("button");
// let body = document.querySelector("body");
// let mode = "white";
// btn.addEventListener("click", () => {
//     if(mode === "white"){
//         mode = "black";
//         body.classList.add("black");
//         console.log(mode);
//     }else{
//         mode = "white";
//         body.classList.add("white");
//     }
// });

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; //dark

modeBtn.addEventListener("click", () => {
	if (currMode === "light") {
		currMode = "dark";
		body.classList.remove("light");
		body.classList.remove("b-img");
		body.classList.add("dark");
	} else if (currMode === "dark") {
		currMode = "b-img";
		body.classList.remove("dark");
		body.classList.add("b-img");
	} else {
		currMode = "light";
		body.classList.remove("dark");
		body.classList.remove("b-img");
		body.classList.add("light");
	}

	console.log(currMode);
});
