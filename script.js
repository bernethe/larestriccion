'use strict';

var _now, _day, _month;

function main() {
	_day = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
	_month = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
	_now = new Date();
	document.getElementById('placa').addEventListener('change',cambioPlaca,!1);
}
function cambioPlaca() {
	var _s = document.getElementById('placa').value;

	document.getElementById('placaEnd').innerHTML = _s;

	document.getElementById('todayDate').innerHTML = _day[_now.getDay()]+' '+_now.getDate()+' de '+_month[_now.getMonth()];

	document.getElementById('semana').dataset.placa = _s;

	document.getElementById('calendario').dataset.placa = _s;

	document.getElementById('resultado').classList.remove('d-none');
	
}

document.addEventListener('DOMContentLoaded', main, !1);