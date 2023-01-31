'use strict'

const criarBoxLR = ()=>{

    

    if(!document.getElementById('box-lu-lm')){
        const divGeral = document.createElement('div')
        divGeral.id = 'box-lu-lm'
        divGeral.classList.add('box-login')

        const divLoginUsuario = document.createElement('div')
        divLoginUsuario.classList.add('box-lu')
        const spanLoginUsuario = document.createElement('span')
        spanLoginUsuario.textContent = 'LOGIN COMO USUÁRIO'
    
        divLoginUsuario.appendChild(spanLoginUsuario)
    
        const divLoginMotorista = document.createElement('div')
        divLoginMotorista.classList.add('box-lm')
        const spanLoginMotorista = document.createElement('span')
        spanLoginMotorista.textContent = 'LOGIN COMO MOTORISTA'
    
        divLoginMotorista.appendChild(spanLoginMotorista)
    
        const div = document.getElementById('box-lr')
    
        divGeral.appendChild(divLoginUsuario)
        divGeral.appendChild(divLoginMotorista)

        div.appendChild(divGeral)
        return div
    }else{
        let div = document.getElementById('box-lu-lm')
        div.remove()
    }
}

document.getElementById('icon-lr').addEventListener('click', criarBoxLR)