// AT Timer



window.addEventListener("load", () => {
	let form = document.getElementById("login-form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		getData();
	});
});


function getData() {
	let domain = document.getElementById("domain").value;
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	eel.login(domain, username, password)(r => toggleView(r));
	eel.get_projects()(r => console.log(r));
}

function toggleView(activeSection="login-section"){
	let sections = ["login-section", "timer-section"];
	console.log(activeSection);
	for(let i in sections){
		let el = document.getElementById(sections[i]);
		console.log(sections[i], el);
		if(activeSection == sections[i]){
			if (el.classList){
				el.classList.add("d-block");
				el.classList.remove("d-none");
			} else {
				el.className += " " + "d-block";
			}
		} else {
			if (el.classList){
				el.classList.add("d-none");
				el.classList.remove("d-block");
			} else {
				el.className += " " + "d-none";
			}
		}
	}
}

// need a load projects section of
