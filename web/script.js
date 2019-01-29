
// eel.expose(login);
// function login(domain, username, password){
// 	console.log("login called")
//
// }


window.addEventListener("load", () => {
	function getData() {
		let formData = new FormData(form);
		console.log("FromData init")
		for (let pair of formData.entries()) {
			alert(pair[0] + ': ' + pair[1]);
		}
	}

	let form = document.getElementById("login-form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		getData();
	});
});
