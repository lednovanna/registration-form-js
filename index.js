/*document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Функция для отображения подсказки
    function showAction(input) {
        const hint = input.parentElement.querySelector(".actionText"); // Теперь ищем подсказку в родителе
        if (hint) hint.style.display = "block";
    }

    // Функция для скрытия подсказки
    function hideAction(input) {
        const hint = input.parentElement.querySelector(".actionText");
        if (hint) hint.style.display = "none";
    }

    // Функция для отображения ошибки
    function showError(input, message) {
        const error = input.parentElement.querySelector(".error-message"); // Находим .error-message в родительском блоке
        if (error) {
            error.textContent = message;
            error.style.display = "block";
        }
    }

    // Функция для скрытия ошибки
    function clearError(input) {
        const error = input.parentElement.querySelector(".error-message");
        if (error) {
            error.textContent = "";
            error.style.display = "none";
        }
    }

    // Валидация имени
    function validateName() {
        if (nameInput.value.trim().length < 3) {  // trim() убирает пробелы по краям
            showError(nameInput, "The name must contain at least 3 characters.");
            return false;
        }
        clearError(nameInput);
        return true;
    }

    // Валидация email
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, "Enter a valid email."); // Изменил текст ошибки
            return false;
        }
        clearError(emailInput);
        return true;
    }

    // Валидация пароля
    function validatePassword() {
        if (passwordInput.value.length < 6) {
            showError(passwordInput, "The password must contain at least 6 characters.");
            return false;
        }
        clearError(passwordInput);
        return true;
    }

    // Обработчики событий для имени
    nameInput.addEventListener("focus", () => showAction(nameInput));
    nameInput.addEventListener("blur", () => hideAction(nameInput));
    nameInput.addEventListener("input", validateName);

    // Для email
    emailInput.addEventListener("focus", () => showAction(emailInput));
    emailInput.addEventListener("blur", () => hideAction(emailInput));
    emailInput.addEventListener("input", validateEmail);

    // Для пароля
    passwordInput.addEventListener("focus", () => showAction(passwordInput));
    passwordInput.addEventListener("blur", () => hideAction(passwordInput));
    passwordInput.addEventListener("input", validatePassword);

    // Обработчик отправки формы
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        // Проверяем все поля перед отправкой
        let valid = true;
        if (!validateName()) valid = false;
        if (!validateEmail()) valid = false;
        if (!validatePassword()) valid = false;

        if (valid) {
            alert("The form has been successfully submitted!");
            form.reset(); // Очищаем форму
        }
    });
});  
*/


/*
class RegistrationForm {
    static value = {}

    static showError = (id, message) => {
        const errorElement = document.getElementById(id).closest(".field-wrapper");
        if (errorElement && errorElement.classList.contains("error-message")) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
        }
    }

    static clearError = (id) => {
        const errorElement = document.getElementById(id).closest(".field-wrapper").nextElementSibling;;
        if (errorElement && errorElement.classList.contains("error-message")) { 
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }
}

    static validate = (id, value) => {
        if (id === "name" && value.trim().length < 3) {
            this.showError(id, "The name must contain at least 3 characters.");
        return false;
    }

    if (id === "password" && value.length < 6) {
        this.showError(id, "The password must contain at least 6 characters.");
        return false;
    }

    this.clearError(id);
    return true;
}

    static submit = function (event) {         
        event.preventDefault();
        
        let valid = true;

        const nameValue = document.getElementById("name").value;
        const emailValue = document.getElementById("email").value;
        const passwordValue = document.getElementById("password").value;

        if (!this.validate("name", nameValue)) valid = false;
        if (!this.validate("email", emailValue)) valid = false;
        if (!this.validate("password", passwordValue)) valid = false;

        if (valid) {
            alert("The form has been successfully submitted!");
            document.getElementById("registrationForm").reset();
        } else {
            alert("Please fill out the form correctly.");
        }

}

    static change = (id, value) => {   
        this.validate(id, value); 
        this.value[id] = value; 
    
    
    }
    }
    

class FieldPassword {
    static toggle = (event) => {
        const target = event.target;

        const input = target.previousElementSibling;
    

        if (input.type === 'password') {
            input.type = "text";
            target.classList.add("show");
        } else {
           input.type = "password";
           target.classList.remove("show");
        }
    };
}



document.querySelector(".field-icon").addEventListener("click", FieldPassword.toggle);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        RegistrationForm.submit(event);
    });

    document.getElementById("name").addEventListener("input", function () {
        RegistrationForm.change("name", this.value);
    });

    document.getElementById("email").addEventListener("input", function () {
        RegistrationForm.change("email", this.value);
    });

    document.getElementById("password").addEventListener("input", function () {
        RegistrationForm.change("password", this.value);
    });
});

window.fieldPassword = FieldPassword;
window.registerationForm = RegistrationForm ; 
*/

class RegistrationForm {
    static value = {};

    static showError = (element, message) => {
        const errorElement = element.closest(".field-wrapper") 
            ? element.closest(".field-wrapper").nextElementSibling 
            : element.nextElementSibling;
        
        if (errorElement && errorElement.classList.contains("error-message")) {
            errorElement.textContent = message;
            errorElement.style.display = "block";
        }
    };

    static clearError = (element) => {
        const errorElement = element.closest(".field-wrapper") 
            ? element.closest(".field-wrapper").nextElementSibling 
            : element.nextElementSibling;

        if (errorElement && errorElement.classList.contains("error-message")) {
            errorElement.textContent = "";
            errorElement.style.display = "none";
        }
    };

    static validate = (element) => {
        const value = element.value.trim();
        const id = element.id; 

        if (id === "name" && value.length < 3) {
            this.showError(element, "The name must contain at least 3 characters.");
            return false;
        }

        if (id === "password" && value.length < 6) {
            this.showError(element, "The password must contain at least 6 characters.");
            return false;
        }

        this.clearError(element);
        return true;
    };

    static submit = function (event) {
        event.preventDefault();
        
        let valid = true;
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        if (!this.validate(nameInput)) valid = false;
        if (!this.validate(emailInput)) valid = false;
        if (!this.validate(passwordInput)) valid = false;

        if (valid) {
            alert("The form has been successfully submitted!");
            document.getElementById("registrationForm").reset();
        } else {
            alert("Please fill out the form correctly.");
        }
    };

    static change = (element) => {
        this.validate(element);
        this.value[element.name] = element.value;
    };
}

class FieldPassword {
    static toggle = (event) => {
        const input = event.target.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            event.target.classList.add("show");
        } else {
            input.type = "password";
            event.target.classList.remove("show");
        }
    };
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        RegistrationForm.submit(event);
    });

    document.querySelectorAll("#name, #email, #password").forEach(input => {
        input.addEventListener("input", function () {
            RegistrationForm.change(this);
        });
    });

    document.querySelector(".field-icon").addEventListener("click", FieldPassword.toggle);
});

window.fieldPassword = FieldPassword;
window.registrationForm = RegistrationForm;