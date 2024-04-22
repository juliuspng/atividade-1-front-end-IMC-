function calcularimc() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var imc = peso / (altura * altura);
    document.getElementById('resultado').innerText = "Seu IMC é: " + imc.toFixed(2);

//acredito que eu faltei nessa aula do innertext vi que tem relação com o DOM so que eu não entendi

/*também pipoquei nessa tarefa 3 eu tentei ver se não reciclava algo do que a gente fez com teles
eu achei uma função que faz isso isnan só que não conseguir entender a lógica por trás

*/
    var categorias = [
    { min: 0, max: 18.4, cor: '#9C27B0' },      //abaixo
    { min: 18.5, max: 24.9, cor: '#4CAF50' },   //normal
    { min: 25, max: 29.9, cor: '#FFC107' },     //sobrepeso
    { min: 30, max: 34.9, cor: '#FF9800' },     //obesidade 1°
    { min: 35, max: 39.9, cor: '#FF5722' },     //obesidade 2°
    { min: 40, max: Infinity, cor: '#795548' }  //obesidade 3°
    ];

    var cordefundo = '';
    for (var i = 0; i < categorias.length; i++) {
        if (imc >= categorias[i].min && imc <= categorias[i].max) {
            cordefundo = categorias[i].cor;
            break;
        }
    }

    document.getElementById('resultado').style.backgroundColor = cordefundo;
}