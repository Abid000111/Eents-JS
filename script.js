let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
	console.log(evt);
	console.log(evt.type);
	console.log(evt.target);
	console.log(evt.clientX, evt.clientY);
	console.log("Thank you for joining our community.");
	alert("Welcome to our community");
};

let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () => {
	window.open("thanks.html", "_blank");
};

let img = document.querySelector(".show");
// console.log(show);
// show.style.visibility = "hidden";
img.style.visibility = "hidden";
let show = "hidden";
function showTime() {
	if (show == "hidden") {
		show = "visible";
		img.style.visibility = "visible";
	} else {
		show = "hidden";
		img.style.visibility = "hidden";
	}
}

btn2.addEventListener("mouseover", showTime);
btn2.addEventListener("mouseout", showTime);

// btn2.addEventListener("mouseover", "onmouseout", () => {
//     show.style.visibility = "visible";
//     show.style.visibility = "hidden";
// });

// btn2.addEventListener("onmouseout", () => {});

// eventListener()
btn2.addEventListener("dblclick", () => {
	console.log("Thank you for donating for indeed");
});

const handler2 = (evt) => {
	console.log(evt);
	console.log(evt.type);
	console.log(evt.target);
};

btn2.addEventListener("dblclick", handler2);
btn2.removeEventListener("dblclick", handler2);

let box = document.querySelector("#box");
box.onmouseover = () => {
	console.log("You are hovering on a div element");
};

let theme = document.querySelector("#theme");
let body = document.querySelector("body");
let pre = document.getElementsByTagName("pre");
// let pre = document.querySelector(".code");   // It will not work. It doesn't give any list of array type collection.
let Theme = "light";
theme.onclick = () => {
	// let Theme = prompt("Choose theme: 1) Default, 2)White, 3)Black");
	// Theme = Theme.toString().toLowerCase();
	if (Theme == "b-img") {
		Theme = "light";
		body.setAttribute("class", "light");
		for (let i = 0; i < pre.length; i++) {
			pre[i].style.borderColor = "black";
		}
		console.log(Theme);
	} else if (Theme == "light") {
		Theme = "dark";
		body.setAttribute("class", "dark");
		for (let i = 0; i < pre.length; i++) {
			pre[i].style.borderColor = "white";
		}
		console.log(Theme);
	} else if (Theme == "dark") {
		Theme = "b-img";
		body.setAttribute("class", "b-img");
		for (let i = 0; i < pre.length; i++) {
			pre[i].style.borderColor = "white";
		}
		console.log(Theme);
	}
};

// let modeBtn = document.querySelector("#theme");
// let body = document.querySelector("body");
// let currMode = "light";
// let pre = document.getElementsByTagName("pre");

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         body.classList.remove("light");
//         body.classList.remove("b-img");
//         body.classList.add("dark");
//         for (let i = 0; i < pre.length; i++) {
//             pre[i].style.borderColor = "white";
//         }
//     } else if(currMode === "dark"){
//         currMode = "b-img";
//         body.classList.remove("dark");
//         body.classList.add("b-img");
//         for (let i = 0; i < pre.length; i++) {
//             pre[i].style.borderColor = "white";
//         }
//     }else {
//         currMode = "light";
//         body.classList.remove("dark");
//         body.classList.remove("b-img");
//         body.classList.add("light");
//         // let pre = document.getElementsByTagName("pre");
//         for (let i = 0; i < pre.length; i++) {
//             pre[i].style.borderColor = "black";
//         }
//     }

//     console.log(currMode);
// });

// let inp = prompt();
// inp = inp.toString().toLowerCase();
// // inp.toLowerCase();
// console.log(inp);

// let inp = prompt("");
// let lowerCaseInp = inp.toString().toLowerCase();
// console.log(lowerCaseInp);

// let a = document.getElementsByTagName("div");
// a[5].style.backgroundColor = "red";
// console.log(a.length);
// console.log(document.getElementsByTagName("div"));
