//Creamos la clase usuario
class User {
    constructor(name, surname, email, pwd) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.pwd = pwd;
    }
}

//Creamos la clase de UI
class UI {
    // Funcion para agregar usuarios en lista;
    addUserToList(user) {
        const list = document.getElementById('users-list');
        // Crea una nueva fila en la tabla
        const row = document.createElement('tr');
        // inserta datos en las columnas
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.surname}</td>
            <td>${user.email}</td>
            <td>${user.pwd}</td>
            <td><a href="" class="eliminausuario" style="color:red;font-weight:bold;">ELIMINAR</i></a> </td>
        `;

        list.appendChild(row);
    }

    showAlert(message, className) {
        // crea un div
        const div = document.createElement('div');
        // agrega una clase
        div.className = `alert ${className}`;
        // agrega una alerta
        div.appendChild(document.createTextNode(message));
        // se obtienen los padres
        const container = document.querySelector('.form-register');
        const form = document.querySelector('#user-form');
        // insertar alerta
        container.insertBefore(div, form);
        // Tiempo de espera despues de 3 segundos
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteUser(target) {
        if (target.className === 'eliminausuario') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('pwd').value = '';
        document.getElementById('term-conditions').checked = false;
        document.getElementById('political').checked = false;
    }
}

// Clase de almacenamiento local
class Store {

    // Se obtienen los usuarios del almacenamiento local
    static getUsers() {
        let users;
        if (localStorage.getItem('users') === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem('users'));
        }
        return users;
    }

    // Se visualizan los usuarios en la interfaz
    static displayUsers() {
        const users = Store.getUsers();

        users.forEach(function (user) {
            const ui = new UI;
            // se agrega el usuario en la lista
            ui.addUserToList(user);
        })
    }

    // Agrega detalles del usuario al almacenamiento local
    static addUser(user) {
        const users = Store.getUsers();
        users.push(user);

        // Se guarda en el almacenamiento local
        localStorage.setItem('users', JSON.stringify(users));
    }

    static removeUser(pwd) {
        const users = Store.getUsers();
        users.forEach(function (user, index) {
            if (user.pwd === pwd) {
                users.splice(index, 1);
            }
        });
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// DOM Load event 
document.addEventListener('DOMContentLoaded', Store.displayUsers());

// Event listeners
document.getElementById('user-form').addEventListener('submit',
    function (e) {
        // Se obtienen valores
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        const pwd = document.getElementById('pwd').value;
        const terminos = document.getElementById('term-conditions').checked;
        const political = document.getElementById('political').checked;

        // instancia de usuario
        const user = new User(name, surname, email, pwd);

        // Instancia de objecto de la interfaz
        const ui = new UI();

        // Validación
        if (name === '' || surname === '' || email === '' || pwd === '' || terminos == false || political == false) {
            // Muestra alerta de error
            ui.showAlert('Por favor, revisar errores!!!', 'error');
        } else {
            // Agrega usuario a la lista
            ui.addUserToList(user)

            // Muestra alerta de registro exitoso
            ui.showAlert('Usuario Registrado', 'success');
            // guarda en el almacenamiento local
            Store.addUser(user);

            // Limpia registro de inputs de la interfaz
            ui.clearFields();
        }

        e.preventDefault();
    });

// Evento para eliminar  
document.getElementById('users-list').addEventListener('click', function (e) {
    // se crea una nueva instancia
    const ui = new UI();

    // Elimina usuario
    ui.deleteUser(e.target);

    // elimina usuario del almacenamiento local
    Store.removeUser(e.target.parentElement.previousElementSibling.textContent)

    // Muestra alerta de usuario eliminado
    ui.showAlert('Usuario Eliminado!!!', 'success');

    e.preventDefault();
})
