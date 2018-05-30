function persona  (altura,peso)
{
    var altura = altura;
    var peso = peso;
}

function imc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc;
}

persona.prototype = 
{
    calcularimc : function ()
    {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc;
    } 
}
persona