const toggle = document.getElementById("darkToggle");
const iconMoon = document.getElementById("iconMoon");
const iconSun = document.getElementById("iconSun");

// actualizar iconos
function actualizarIconos() {
    if (document.body.classList.contains("dark")) {
        iconMoon.style.display = "none";
        iconSun.style.display = "inline";
    } else {
        iconMoon.style.display = "inline";
        iconSun.style.display = "none";
    }
}

// cambio manual (CORREGIDO)
toggle.addEventListener("change", () => {
    if (toggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("modo", "oscuro");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("modo", "claro");
    }

    actualizarIconos();
});

// al cargar la página (CORREGIDO)
window.onload = function () {
    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("dark");
        toggle.checked = true;
    } else {
        document.body.classList.remove("dark");
        toggle.checked = false;
    }

    actualizarIconos(); 
};
