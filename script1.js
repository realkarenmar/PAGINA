//console.log("hola aprendices desde el archivo");
//var x = -15;
//x >= 0 ? console.log(x) : console.log(-x);

{
    x = Math.PI;
    cx = Math.cos(x);
    console.log('cx', cx);
}
username = undefined
if(username==null){
    username = "Onomishu";
}
var text;
var x = "10";
switch (x) {
    case 10:
        text = "decena";
        break;
        default:
        text = "sin valor";
}
console.log(text);
var data = '[ { "name": "Aragorn", "race": "Human" }, { "name":"Gimli", "race": "Dwarf" } ]';

console.log(data);

data = JSON.parse(data);
console.log(data);
console.log(data);
for (var i = 0; i < data.length; i++) {
    console.log(data[i].name + ' is a ' + data[i].race + '.')
    }
    var request = new XMLHttpRequest();
    request.open('GET','data.json', true);
    request.onload = function() {
        var data = JSON.parse(this.response) // this se refiere al request en este         contexto
        console.log(data) // Podemos ver los datos
        for( var i = 0; i < data.length; i ++){
        console.log(data[i].name + ' is a ' + data[i].race + '.') // Se imprimen llaves y         valores en la consola
        }
        }
        request.send()
        







