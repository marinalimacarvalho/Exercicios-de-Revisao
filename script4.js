function calcular() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("operacao").value;
    let resultado;

    if (op === "soma") {
        resultado = n1 + n2;
    } else if (op === "subtracao") {
        resultado = n1 - n2;
    } else if (op === "multiplicacao") {
        resultado = n1 * n2;
    } else if (op === "divisao") {
        if (n2 === 0) {
            resultado = "Não pode dividir por zero!";
        } else {
            resultado = n1 / n2;
        }
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}