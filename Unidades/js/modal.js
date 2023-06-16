const close_modal = document.querySelector(".cerrarBtn_modal");
const modal = document.querySelector('.modal');
const modal_content = document.querySelector('.modal_content');
/* modal content es el contenedor del modal */
const modal_text = document.querySelector('.modal_helpText');
/* Esto es para agregarle el texto dependiendo del sigo que seleccione el usuario */
const modal_titulo = document.querySelector('.titulo_modal');
/* Lo mismo aplica para el titulo */


// // Lo que hace es seleccionar la clase que tenga "modal open_modal" y verificar si se presiona la tecla escape remueve la clase "open_modal"
document.addEventListener("keyup", evento => {
	if(evento.key == "Escape" && document.querySelector(".modal.open_modal")){
		document.querySelector(".modal.open_modal").classList.remove('open_modal');
		modal_content.classList.remove('animate__zoomIn');
	}
});

/* Un signo como parametro que le dice al switch cuales de las areas se seleccionaron. Asi podra ejecutar la funcion de llamar al modal y colocar su respectivo texto y titulo en abrir_modal. Es la manera mas eficiente que encontre por falta de tiempo */

modal_boton = (boton) => {

	switch(boton){
		case 'pista_1':
			abrir_modal('pista_1');
			close_modal.addEventListener('click', cerrar_modal);
		break;
		case 'pista_1.1':
			abrir_modal('pista_1.1');
			close_modal.addEventListener('click', cerrar_modal);
		break;
		case 'pista_2':
			abrir_modal('pista_2');
			close_modal.addEventListener('click', cerrar_modal);
		break;
		case 'pista_2.1':
			abrir_modal('pista_2.1');
			close_modal.addEventListener('click', cerrar_modal);
		break;
		case 'pista_3':
			abrir_modal('pista_3');
			close_modal.addEventListener('click', cerrar_modal);
		break;
		case 'pista_3.1':
			abrir_modal('pista_3.1');
			close_modal.addEventListener('click', cerrar_modal);
		break;
		case 'alerta_campo_vacio':
			abrir_modal('alerta_campo_vacio');
			close_modal.addEventListener('click', cerrar_modal);
		break;
	}
}

	
cerrar_modal = () => {
	modal.classList.remove('open_modal');
	modal_content.classList.remove('animate__zoomIn');
}

abrir_modal = (letra) => {
	modal.classList.add('open_modal');
	modal_content.classList.add('animate__zoomIn');

	switch(letra){
		case 'pista_1':
			modal_titulo.innerText = 'Pista';
			modal_text.innerHTML = 
			`
			<p>La extinción de la solidaridad no implica que el deudor queda liberado de su obligación, queda liberado solo del carácter solidario de su obligación.</p>
			`;
		break;
		case 'pista_1.1':
			modal_titulo.innerText = 'Pista';
			modal_text.innerHTML = 
			`
			<p>Existen varias clases de condiciones: 1) Suspensivas, 2) Resolutorias, 3) Causales, 4) Potestativas, 5) Mixtas, 6) Imposibles, 7) Inmorales e Ilícitas.</p>
			`;
		break;
		case 'pista_2':
			modal_titulo.innerText = 'Pista';
			modal_text.innerHTML = 
			`
			<p>El que con intención, o por negligencia o por imprudencia, ha causado un daño a otro, está obligado a repararlo.</p>
			`;
		break;
		case 'pista_2.1':
			modal_titulo.innerText = 'Pista';
			modal_text.innerHTML = 
			`
			<p>En la doctrina: Mauricio Rodríguez Ferrara en su obra Obligaciones del año 2007, dice que hay tres (3) características fundamentales para que exista la gestión de negocio. Estas se muestran a continuación:</p>
			<p>&nbsp;</p>
			<p>1. Existan uno o más hechos de gestión</p>
			<p>2. La intención de un sujeto de obrar por otro</p>
			<p>3. Que no haya consentimiento del dueño</p>
			`;
		break;
		case 'pista_3':
			modal_titulo.innerText = 'Pista';
			modal_text.innerHTML = 
			`
			<p>La culpa es el matiz particular del proceder humano que se caracteriza porque su autor incurre fortuita o deliberadamente en un error de conducta que produce un daño a la víctima.</p>
			`;
		break;
		case 'pista_3.1':
			modal_titulo.innerText = 'Pista';
			modal_text.innerHTML = 
			`
			<p>Tipos de diversos casos de causa extraña no imputable:</p>
			<p>&nbsp;</p>
			<p>1) Caso fortuito y fuerza mayor</p>
			<p>2) Hecho del acreedor</p>
			<p>3) Hecho del tercero</p>
			<p>4) Pérdida de la cosa debida</p>
			<p>5) Hecho del príncipe</p>
			`;
		break;
		case 'alerta_campo_vacio':
			modal_titulo.innerText = 'Info';
			modal_text.innerHTML = 
			`
			<p>Debes de seleccionar y arrastrar cada elemento.</p>
			`;
		break;
	}
}
