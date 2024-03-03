
//Validacion de formulario

window.onload = function() {
	
	var borrar = document.getElementById('eraser-register');
	borrar.addEventListener("click", borrando);
	
	var nombre = document.getElementById('name');
	nombre.addEventListener("input", campoNombre);

    var apellido = document.getElementById('surname');
	apellido.addEventListener("input", campoApellido);
	
	var correo = document.getElementById('email');
	correo.addEventListener("input", campoCorreo);
	
	var password = document.getElementById('pwd');
	password.addEventListener("input", campoPwd);
	
	var check_term = document.getElementById('term-conditions');
	check_term.addEventListener("input", campoTermCond);

    var check_political = document.getElementById('political');
	check_political.addEventListener("input", campoPolitical);
	
}

function campoNombre() {
	var usuarioNombre = document.getElementById('name').value;
	
	if (usuarioNombre) {
		document.getElementById('name_error').innerHTML = " ";
		document.getElementById('name').style.outline = "1px solid #000";
	}
}

function campoApellido() {
	var usuarioApellido = document.getElementById('surname').value;
	
	if (usuarioApellido) {
		document.getElementById('surname_error').innerHTML = " ";
		document.getElementById('surname').style.outline = "1px solid #000";
	}
}

function campoCorreo() {
	var usuarioCorreo = document.getElementById('email').value;
	
	if (usuarioCorreo) {
		document.getElementById('email_error').innerHTML = " ";
		document.getElementById('email').style.outline = "1px solid #000";
	}
}

function campoPwd() {
	var usuarioPwd = document.getElementById('pwd').value;
	
	if (usuarioPwd) {
		document.getElementById('pwd_error').innerHTML = " ";
		document.getElementById('pwd').style.outline = "1px solid #000";
	}
}

function campoTermCond() {
	var usuarioTermCond = document.getElementById('term-conditions').value;
	
	if (usuarioTermCond) {
		document.getElementById('term-conditions_error').innerHTML = " ";
		document.getElementById('term-conditions').style.outline = "1px solid #000";
	}
}

function campoPolitical() {
	var usuarioPolitical = document.getElementById('political').value;
	
	if (usuarioPolitical) {
		document.getElementById('political_error').innerHTML = " ";
		document.getElementById('political').style.outline = "1px solid #000";
	}
}

function borrando() {
	document.location.reload(true);
}

function validacion() {
	var expUsuarioNom = /^[A-Z]{1}[a-z áéíóúñüàè]{2,9}\s[A-Z]{1}[a-z áéíóúñüàè]{2,9}$/;
    var expUsuarioApe = /^[A-Z]{1}[a-z áéíóúñüàè]{2,9}\s[A-Z]{1}[a-z áéíóúñüàè]{2,9}$/;
	var expCorreo = /^[a-zA-Z0-9_-_.]{2,63}@[a-zA-Z0-9]{2,63}[\.][a-z]{2,4}$/;
	var usuarioNombre = document.getElementById('name').value;
    var usuarioApellido = document.getElementById('surname').value;
	var usuarioCorreo = document.getElementById('email').value;
	var usuarioPwd = document.getElementById('pwd').value;
	var usuarioTermCond = document.getElementById('term-conditions').checked;
    var usuarioPolitical = document.getElementById('political').checked;
    //----------------------------------------------------------------
	var nombreError = document.getElementById('name_error');
    var apellidoError = document.getElementById('surname_error');
	var correoError = document.getElementById('email_error');
	var pwdError = document.getElementById('pwd_error');
	var termCondError = document.getElementById('term-conditions_error');
    var politicalError = document.getElementById('political_error');
    //----------------------------------------------------------------
	var campoNombre = document.getElementById('name');
    var campoApellido = document.getElementById('surname');
	var campoCorreo = document.getElementById('email');
	var campoPwd = document.getElementById('pwd');
	var campoTermCond = document.getElementById('term-conditions');
    var campoPolitical = document.getElementById('political');
	
	if (!usuarioNombre) {
		var mensajeErrorNombre = "Es requerido que ingrese sus 02 nombres!";
		nombreError.innerHTML = mensajeErrorNombre;
		campoNombre.style.outline = "2px solid #f00";
		return false;
	} else if (!expUsuarioNom.test(usuarioNombre)) {
		var mensajeInvalidoNombre = "La información de los nombres es invalido!";
		nombreError.innerHTML = mensajeInvalidoNombre;
		campoNombre.style.outline = "2px solid #f00";
		return false;
	}

	if (!usuarioApellido) {
		var mensajeErrorApellido = "Es requerido que ingrese sus 02 apellidos!";
		apellidoError.innerHTML = mensajeErrorApellido;
		campoApellido.style.outline = "2px solid #f00";
		return false;
	} else if (!expUsuarioApe.test(usuarioApellido)) {
		var mensajeInvalidoApellido = "La información de los apellidos es invalido!";
		apellidoError.innerHTML = mensajeInvalidoApellido;
		campoApellido.style.outline = "2px solid #f00";
		return false;
	}

	if (!usuarioCorreo) {
		var mensajeErrorCorreo = "Es requerido que ingrese su correo electronico correctamente!";
		correoError.innerHTML = mensajeErrorCorreo;
		campoCorreo.style.outline = "2px solid #f00";
		return false;
	} else if (!expCorreo.test(usuarioCorreo)) {
		var mensajeInvalidoCorreo = "La información del Correo Electrónico es Invalido!";
		correoError.innerHTML = mensajeInvalidoCorreo;
		campoCorreo.style.outline = "2px solid #f00";
		return false;
	}
	
	if (!usuarioPwd) {
		var mensajeErrorPwd = "Es Requerido que ingrese una contraseña!";
		pwdError.innerHTML = mensajeErrorPwd;
		campoPwd.style.outline = "2px solid #f00";
		return false;
	} else if (usuarioPwd.length<10) {
		var mensajeNumerosPwd = "Es necesario que la contraseña tenga más de 9 digitos";
		pwdError.innerHTML = mensajeNumerosPwd;
		campoPwd.style.outline = "2px solid #f00";
		return false;
	}
	
	if (usuarioTermCond==false) {
		var mensajeErrorTermCond = "Es requerido que acepte los términos y condiciones!";
		termCondError.innerHTML = mensajeErrorTermCond;
		campoTermCond.style.outline = "2px solid #f00";
        return false;
	} 

    if (usuarioPolitical==false) {
		var mensajeErrorPolitical = "Es requerido que acepte las políticas de privacidad!";
		politicalError.innerHTML = mensajeErrorPolitical;
		campoPolitical.style.outline = "2px solid #f00";
		return false;
	} 
//    return true;
}