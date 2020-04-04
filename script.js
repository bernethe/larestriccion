'use strict';

var _now;
var _d = [
	{
		'placa': 0,
		'si': [5,7],
		'medio': [8],
		'no': [4,6,9,10,11,12]
	},
	{
		'placa': 1,
		'si': [4,6],
		'medio': [8],
		'no': [5,7,9,10,11,12]
	},
	{
		'placa': 2,
		'si': [5,7],
		'medio': [9],
		'no': [4,6,8,10,11,12]
	},
	{
		'placa': 3,
		'si': [4,6],
		'medio': [9],
		'no': [5,7,8,10,11,12]
	},
	{
		'placa': 4,
		'si': [5,7],
		'medio': [10],
		'no': [4,6,8,9,11,12]
	},
	{
		'placa': 5,
		'si': [4,6],
		'medio': [10],
		'no': [5,7,8,9,11,12]
	},
	{
		'placa': 6,
		'si': [5,7],
		'medio': [11],
		'no': [4,6,8,9,10,12]
	},
	{
		'placa': 7,
		'si': [4,6],
		'medio': [11],
		'no': [5,7,8,9,10,12]
	},
	{
		'placa': 8,
		'si': [5,7],
		'medio': [12],
		'no': [4,6,8,9,10,11]
	},
	{
		'placa': 9,
		'si': [4,6],
		'medio': [12],
		'no': [5,7,8,9,10,11]
	}

];
var _day = ['Sábado', 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

function main() {
	document.getElementById('placa').addEventListener('change',cambioPlaca,!1);
}
function cambioPlaca() {
	var _s = document.getElementById('placa').value;
	_now = new Date();

	vaciarUL(document.getElementById('si_ul'));
	vaciarUL(document.getElementById('medio_ul'));
	vaciarUL(document.getElementById('no_ul'));

	if(_s == -1) {
		document.getElementById('resultado').classList.add('d-none');
	} else {
		document.getElementById('resultado').classList.remove('d-none');
	}

	//console.log(_d[_s].si)
	poblarUL(document.getElementById('si_ul'),_d[_s].si);
	poblarUL(document.getElementById('medio_ul'),_d[_s].medio);
	poblarUL(document.getElementById('no_ul'),_d[_s].no);
}
function poblarUL(_ul,_datos) {
	for(var i = 0; i < _datos.length; i++) {
		var _str = (_day[_datos[i]-4])+' '+_datos[i]+' de abril';
		console.log(_now.getDate() == _datos[i],_datos[i])
		if(_now.getDate() == _datos[i] && _now.getMonth() == 3 && _now.getFullYear() == 2020) {
			_ul.appendChild( createCustomElement('li',{'class':'texto-resaltado'},[
				createCustomElement('strong',{},[_str+' ⬅'])
			]) );
		} else {
			_ul.appendChild( createCustomElement('li',{},[_str]) );
		}
	}
}
function vaciarUL(_sel) {
	while( _sel.firstChild ){
		_sel.removeChild( _sel.firstChild );
	}
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