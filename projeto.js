
function calcularNivel(vitoria, derrotas){
    let saldo = vitoria - derrotas

let nivel= ""
if (saldo <=10){
    nivel= "ferro"
}
else if ((saldo>=11 && saldo<=20)){
    nivel= "bronze"
}
else if ((saldo>= 21 && saldo<=50)){
    nivel= "prata"
}
else if ((saldo>= 51 && saldo<=80)){
    nivel= "ouro"
}
else if ((saldo>=81 && saldo<=90)){
    nivel = "diamante"
}
else if ((saldo>= 91 && saldo<=100)){
    nivel= "lendario"
}
else{
    nivel= "imortal"
}
return 'o Mario esta com ' + saldo + ' vidas e está no nivel ' + nivel
}
let saldoDoHeroi = calcularNivel (50,25);
console.log(saldoDoHeroi)