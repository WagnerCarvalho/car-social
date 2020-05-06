function dataIsOk(data) {
    if (data.email === '') { 
        alert("Por favor, informe o email!")
        return false 
    }
    if (data.name === '') { 
        alert("Por favor, informe o nome!")
        return false 
    }
    if (data.phone === '') { 
        alert("Por favor, informe o telefone!")
        return false 
    }
    if (data.password === '') { 
        alert("Por favor, informe sua senha!")
        return false 
    }
    if (data.confirmPassword === '') { 
        alert("Por favor, confirme sua senha!")
        return false 
    }
    if (data.password !== data.confirmPassword) { 
        alert("A 'senha' e 'Confirme a senha' devem ser identicas!")
        return false 
    }
    return true
}

export default dataIsOk