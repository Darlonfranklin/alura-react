function validarCPF(cpf) {
    if (cpf.lenght !== 11) {
        return { valido: false, texto: "CPF dedve ter 11 digitos" }
    } else {
        return { valido: true, texto: "" }
    }
}

function validarSenha(senha) {
    if (senha.lenght < 4 || senha.length > 72) {
        return { valido: false, texto: "Senha deve ter 4 e 72 digitos" }
    } else {
        return { valido: true, texto: "" }
    }
}

export { validarCPF, validarSenha }