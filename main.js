/*menu desplegable*/
const nav = document.querySelector("#nav");
const menue = document.querySelector("#menue");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const cerrare = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
	nav.classList.add("visible");
	menue.classList.add("visible");
	abrir.classList.add("usado");
	cerrar.classList.add("visible");
})

cerrar.addEventListener("click", () => {
	nav.classList.remove("visible");
	menue.classList.remove("visible");
	abrir.classList.remove("responsive");
	cerrar.classList.remove("visible");
	abrir.classList.remove("usado");
})

/*scroll anchor link*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function(e){
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior : "smooth"
		});
	});
});