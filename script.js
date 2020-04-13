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

// https://github.com/escueladigital/EDui
// Crear elementos con atributos e hijo
function createCustomElement(element,attributes,children) {
	var customElement = document.createElement(element);
	if (children !== undefined) children.forEach(el => {
		if (el.nodeType) {
			if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
		} else {
			customElement.innerHTML += el;
		}
	});
	addAttributes(customElement,attributes);
	return customElement;
}

// Añadir un objeto de atributos a un elemento
function addAttributes(element, attrObj) {
	for (var attr in attrObj) {
		if (attrObj.hasOwnProperty(attr)) {
			element.setAttribute(attr,attrObj[attr]);
		}
	}
}

document.addEventListener('DOMContentLoaded', main, !1);