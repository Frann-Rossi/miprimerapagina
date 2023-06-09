// Variables
const btn = document.querySelector("#btn");
const form = document.querySelector("#my-form");
const emailInput = document.querySelector("#email");
const btnMenu = document.querySelector("#btn-menu");
const navLinks = document.querySelector("#nav-links");

// Eventos
btn.addEventListener("click", showAlert);

form.addEventListener("submit", (e) => {
	e.preventDefault();
	validateForm();
});

btnMenu.addEventListener("click", () => {
	navLinks.classList.toggle("nav-links-responsive");
});

// Agrega el evento de clic al documento para cerrar el menú cuando se hace clic fuera de él
document.addEventListener("click", (event) => {
	// Comprueba si el clic se produjo fuera del menú
	if (!navLinks.contains(event.target) && !btnMenu.contains(event.target)) {
		navLinks.classList.remove("nav-links-responsive");
	}
});

// Funciones
function showAlert() {
	alert("¡Hola, esta es una alerta desde JavaScript!");
}

function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
	return regex.test(email);
}

function validateForm() {
	const email = emailInput.value;
	if (!validateEmail(email)) {
		alert("Por favor ingrese un correo electrónico válido.");
	} else {
		alert("Correo electrónico enviado correctamente.");
	}
}
