'use strict';

var _now;
var _day = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

function main() {
	document.getElementById('placa').addEventListener('change',cambioPlaca,!1);
}
function cambioPlaca() {
	var _s = document.getElementById('placa').value;
	_now = new Date();

	if(document.querySelector('.card.restricted-red') != null) {
		document.querySelector('.card.restricted-red').classList.remove('restricted-red');
		document.querySelector('.card.restricted-red-wknd').classList.remove('restricted-red-wknd');
	}
	
	document.querySelector('#semana .col:nth-child('+((_s%2)+6)+') .card').classList.add('restricted-red-wknd');

	if(_s==0) {
		_s = 10;
	}
	document.querySelector('#semana .col:nth-child('+Math.ceil(_s/2)+') .card').classList.add('restricted-red');

	document.getElementById('resultado').classList.remove('d-none');
	
}

document.addEventListener('DOMContentLoaded', main, !1);