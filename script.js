'use strict';


function main() {
	document.getElementById('placa').addEventListener('change',cambioPlaca,!1);
}
function cambioPlaca() {
	var _s = parseInt(document.getElementById('placa').value);

	var _eleN = (Math.ceil(_s/2))-1;
	if(_s == 0) {
		_eleN = 4;
	}

	for(var i = 0; i < 7; i++) {
		document.querySelectorAll('#semana_naranja .card')[i].classList.remove('card-y');
		document.querySelectorAll('#semana_naranja .card')[i].classList.remove('card-r');
		document.querySelectorAll('#semana_naranja .card')[i].classList.remove('card-g');
		document.querySelectorAll('#semana_amarilla .card')[i].classList.remove('card-y');
		document.querySelectorAll('#semana_amarilla .card')[i].classList.remove('card-r');
		document.querySelectorAll('#semana_amarilla .card')[i].classList.remove('card-g');
	}

	document.querySelectorAll('#semana_naranja .card')[_eleN].classList.add('card-y');
	document.querySelectorAll('#semana_naranja .card-wknd')[_s%2].classList.add('card-r');

	document.querySelectorAll('#semana_amarilla .card')[_eleN].classList.add('card-r');
	document.querySelectorAll('#semana_amarilla .card-wknd')[_s%2].classList.add('card-r');

	document.getElementById('resultado').classList.remove('d-none');
	
}

document.addEventListener('DOMContentLoaded', main, !1);