alert("Hola");
nombre=parseInt(prompt("Ingresa tu nombre"))
alert("Bienvenido(a)", nombre, "al cuestionario sobre los mares");

respuesta1 = prompt("¿Cuánta agua hay en la Tierra? \nA: Alrededor de un 41% de la superficie terrestre es agua \nB: Alrededor de un 51% de la superficie terrestre es agua\nC: Alrededor de un 71% de la superficie terrestre es agua")
if (respuesta1=="A"){
respuesta1=0
}
else if(respuesta1=="B"){
respuesta1=0
}
else if(respuesta1=="C"){
respuesta1=50
}
else{
    alert(nombre,"no es una opcion válida")
}

respuesta2 = prompt("¿Qué océano es el más grande? \nA: El Pacífico \nB: El Atlántico \nC: El índico")
if (respuesta2=="A"){
respuesta2=50
}
else if(respuesta2=="B"){
respuesta2=0
}
else if(respuesta2=="C"){
respuesta2=0
}
else{
    alert(nombre,"no es una opcion válida")
}

respuesta3 = prompt("¿Cuánto mide la parte más profunda de los Océanos? \nA: 11km \nB: 23km \nC: 31km")
if (respuesta3=="A"){
respuesta3=50
}
else if(respuesta3=="B"){
respuesta3=0
}
else if(respuesta3=="C"){
respuesta3=0
}
else{
    alert(nombre,"no es una opcion válida")
}

var total = respuesta1 + respuesta2 + respuesta3
if(total=150){
    document.write (nombre, " Lo has hecho muy bien")
}
else if(total=100){
    document.write (nombre, " puedes hacerlo mejor")
}
else if (total=50){
    document.write (nombre, " puedes hacerlo mejor")
}
else (total=0);
document.write (nombre, " vuelve a intentarlo")

