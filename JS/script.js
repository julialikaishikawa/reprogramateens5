let name = (document.querySelector("#name"));
let email = (document.querySelector("#email"));
let button = (document.querySelector("#submit"));



button.addEventListener('click', function form() {
    event.preventDefault();
    if (name.value == "" || email.value == "") {
        alert('Formulário vazio ou incompleto. Por favor, preencha os campos do nome e e-mail corretamente.');
    } else if (name.value <1 || email.value <8) {
        alert('Formulário vazio ou incompleto. Por favor, preencha os campos do nome e e-mail corretamente.')
    } else {
        alert(`Formulário completo! O nome '${name.value}' e o e-mail '${email.value}' foram cadastrados com sucesso!`)
    }
})