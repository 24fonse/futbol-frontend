const API_URL = "https://futbol-backend-3hkl.onrender.com/equipos";

async function obtenerEquipos() {
try {
const res = await fetch(API_URL);
const datos = await res.json();
const tabla = document.getElementById("tabla");
tabla.innerHTML = "";

datos.forEach(equipo => {
tabla.innerHTML += `
<tr>
<td>${equipo.nombre}</td>
<td>${equipo.pais}</td>
<td>${equipo.titulos} títulos</td>
</tr>`;
});
} catch (err) {
console.error("Error al traer datos:", err);
}
}

document.getElementById("formEquipo").addEventListener("submit", async (e) => {
e.preventDefault();

const nuevoEquipo = {
nombre: document.getElementById("nombre").value,
pais: document.getElementById("pais").value,
titulos: Number(document.getElementById("titulos").value)
};

try {
const res = await fetch(API_URL, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(nuevoEquipo)
});

if(res.ok) {
alert("¡Equipo guardado con éxito en MongoDB Atlas!");
document.getElementById("formEquipo").reset();
obtenerEquipos();
}
} catch (err) {
console.error("Error al enviar datos:", err);
}
});

obtenerEquipos();