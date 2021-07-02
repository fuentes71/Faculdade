var prompt = require("prompt-sync")();
console.log("Senha só pode conter de 4 à 6 caracteres");

var senha = prompt("Digite sua senha: ");
console.log(senha);
if (senha.length < 4 || senha.length > 6) {
    console.log("Fora dos padrões");
} else {

    var resultado = [];

    var caracteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "!", "@", "#", "$", "%", "ç", "?", ",", ".", ";",
        "<", ">", ":", "+", "-", "=", "'", "^", "~", "´", "`", "|", "&", "*", "(", ")"
    ];

    while (resultado != senha) {
        if (senha.length == 4) {
            for (var um = 0; um < caracteres.length; um++) {
                if (hipotese == senha) {
                    break;
                }
                for (var dois = 0; dois < caracteres.length; dois++) {
                    if (hipotese == senha) {
                        break;
                    }
                    for (var tres = 0; tres < caracteres.length; tres++) {
                        if (hipotese == senha) {
                            break;
                        }
                        for (var quatro = 0; quatro < caracteres.length; quatro++) {
                            var hipotese = caracteres[um] + caracteres[dois] + caracteres[tres] + caracteres[quatro]
                            console.log(hipotese);
                            if (hipotese == senha) {
                                resultado = hipotese
                                console.log('Senha quebrada: ' + senha)
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (senha.length == 5) {
            for (var um = 0; um < caracteres.length; um++) {
                if (hipotese == senha) {
                    break;
                }
                for (var dois = 0; dois < caracteres.length; dois++) {
                    if (hipotese == senha) {
                        break;
                    }
                    for (var tres = 0; tres < caracteres.length; tres++) {
                        if (hipotese == senha) {
                            break;
                        }
                        for (var quatro = 0; quatro < caracteres.length; quatro++) {
                            if (hipotese == senha) {
                                break;
                            }
                            for (var cinco = 0; cinco < caracteres.length; cinco++) {
                                var hipotese = caracteres[um] + caracteres[dois] + caracteres[tres] + caracteres[quatro] + caracteres[cinco]
                                console.log(hipotese);
                                if (hipotese == senha) {
                                    resultado = hipotese
                                    console.log('Senha quebrada: ' + senha)
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (senha.length == 6) {
            for (var um = 0; um < caracteres.length; um++) {
                if (hipotese == senha) {
                    break;
                }
                for (var dois = 0; dois < caracteres.length; dois++) {
                    if (hipotese == senha) {
                        break;
                    }
                    for (var tres = 0; tres < caracteres.length; tres++) {
                        if (hipotese == senha) {
                            break;
                        }
                        for (var quatro = 0; quatro < caracteres.length; quatro++) {
                            if (hipotese == senha) {
                                break;
                            }
                            for (var cinco = 0; cinco < caracteres.length; cinco++) {
                                if (hipotese == senha) {
                                    break;
                                }
                                for (var seis = 0; seis < caracteres.length; seis++) {
                                    var hipotese = caracteres[um] + caracteres[dois] + caracteres[tres] + caracteres[quatro] + caracteres[cinco] + caracteres[seis]
                                    console.log(hipotese);
                                    if (hipotese == senha) {
                                        resultado = hipotese
                                        console.log('Senha quebrada: ' + senha)
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}