'use strict';

// var _now;
// var _day = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

function main() {
	document.getElementById('placa').addEventListener('change',cambioPlaca,!1);
}
function cambioPlaca() {
	var _s = document.getElementById('placa').value;

	document.getElementById('placaEnd').innerHTML = _s;

	document.getElementById('semana').dataset.placa = _s;

	document.getElementById('calendario').dataset.placa = _s;

	document.getElementById('resultado').classList.remove('d-none');
	
}

document.addEventListener('DOMContentLoaded', main, !1);