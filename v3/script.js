'use strict';


function main() {
	document.getElementById('placa').addEventListener('change',cambioPlaca,!1);
}
function cambioPlaca() {
	var _s = parseInt(document.getElementById('placa').value);

	document.getElementById('end_placa').innerHTML = _s;

	document.getElementById('cal_y').dataset.placa = _s;
	document.getElementById('cal_o').dataset.placa = _s;

	// var _eleN = (Math.ceil(_s/2))-1;
	// if(_s == 0) {
	// 	_eleN = 4;
	// }

	// for(var i = 0; i < 7; i++) {
	// 	document.querySelectorAll('#semana .card')[i].classList.remove('card-y');
	// 	document.querySelectorAll('#semana .card')[i].classList.remove('card-r');
	// 	document.querySelectorAll('#semana .card')[i].classList.remove('card-g');
	// }

	// document.querySelectorAll('#semana .card')[_eleN].classList.add('card-r');
	// document.querySelectorAll('#semana .card-wknd')[_s%2].classList.add('card-r');

	document.getElementById('resultado').classList.remove('d-none');
	
}

document.addEventListener('DOMContentLoaded', main, !1);