// Exercice 1.1
var nb_1 = 10;
var nb_2 = 20;
var result = nb_1 + nb_2;

function Add(){
  document.getElementById('result-exo-1-1').innerHTML = result;  
}


function Display(){
  var nb_test = document.getElementById('input-test').value;
  var resultat = eval(nb_test +"+ 1");
  document.getElementById('result-test').innerHTML = resultat;
  alert(resultat);
}


//Exercice 1.2

/*var nb_a = 10;
var nb_z = 20;
var result1 = nb_a * nb_z;

function multi(){
  document.getElementById('result-exo-1-2').innerHTML = result1;  
}*/


//Exercice 1.2
/*
var nb_a = 12;
var nb_z = 5;
var result1 = nb_a / nb_z;

function div(){
  document.getElementById('result-exo-1-3').innerHTML = result1;  
}*/

//Exercice 1.3
/*

function getSoustraction(){
    var num1 = document.getElementById('ex1_input1').value;
    var num2 = document.getElementById('ex1_input2').value;
    var resu = eval(num1 - num2)
    document.getElementById('ex1_result').innerHTML= resu;
    alert(resu);
}*/

//Exercice 1.5

function multiplication(){
    var num1 = document.getElementById('ex2_input1').value;
    var num2 = document.getElementById('ex2_input2').value;
    var resu = eval(num1 * num2)
    document.getElementById('ex2_result').innerHTML= resu;
    alert(resu);
}

//Exercice 2.1

function getDivision(){
    var num1 = document.getElementById('ex3_input1').value;
    var num2 = document.getElementById('ex3_input2').value;
    var resu = eval(num1 / num2)
    document.getElementById('ex3_result').innerHTML= resu;
    alert(resu);
}

//Exercice 2.2

function getAddition(){
    var num1 = document.getElementById('ex4_input1').value;
    var num2 = document.getElementById('ex4_input2').value;
    var resu = parseInt(num1 + num2);
    document.getElementById('ex4_result').innerHTML= resu;
    alert(resu);
}

//Exercice 3

function resultDiv(){
    var nb1 = 82;
    var nb2 = 8;
    var results = nb1/nb2;
    document.getElementById('ex5_result').innerHTML = results;
}


//Exercice 4



function option(){
    var monNum = 10;
    document.getElementById('ex6_result').innerHTML = monNum;
}
option();

function plusTen(){
  document.getElementById("ex6_result").innerHTML += Number(10);
}

function diviseFive(){
  document.getElementById("ex6_result").innerHTML /= 5;
}

function multiplyHeight(){
  document.getElementById("ex6_result").innerHTML *= 8;
}


function minusTwo(){
  document.getElementById("ex6_result").innerHTML -= 2;
}

function resetExo4(){
  document.getElementById("ex6_result").innerHTML = 0;
}

function combinePlusTenMinusTwo(){
  document.getElementById("ex6_result").innerHTML += 10 - 2;
}





// Exercice 5

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
var entier = entierAleatoire(50, 1000);

document.getElementById('ex7_result').innerHTML = entier;




//Exercice 6

function parametre(numero){
  numero = 18;
  var resultat = numero / 2
  document.getElementById('ex8_result').innerHTML = resultat;
}

parametre();


//Exercice 7

function parametres(numero1, numero2){
  numero1 = 18;
  numero2 = 6;
  var resultat = numero1 - numero2;
  document.getElementById('ex9_result').innerHTML = numero1 + " - " + numero2 + " = " + resultat;
}

parametres();


//Exercice 8

function parametress(numero1, numero2, numero3){
  numero1 = 18;
  numero2 = 6;
  numero3 = 2;
  var resultat = numero1 - numero2;
  document.getElementById('ex10_result').innerHTML = numero1 + " - " + numero2 + " = " + resultat;
}

parametress();


//Exercice 9
var pound = 2.20462;

function convertToPound(){
  var kg = document.getElementById('ex9_input1').value;
  var resultat3 = kg * pound;
  document.getElementById('ex9_1_result').innerHTML = resultat3 + " pound";
}

function convertToKg(){
  var pnd = document.getElementById('ex9_input2').value;
  var resultat3 = eval(pnd / pound);
  document.getElementById('ex9_2_result').innerHTML = resultat3 + " kg";
}



//exercice 10

function iterateWords(){
  var motAdd = document.getElementById('ex11_input').value;
  console.log(motAdd);
  document.getElementById('ex11_result').innerHTML += motAdd ;
}

function resetWords(){
  document.getElementById('ex11_result').innerHTML = "" ;
}


//Exercice 11 Pari sportif
var nombreRandom;
function changerCote(){
  nombreRandom = Math.floor(Math.random() * (20 - 0.5) + 0.5);
  
console.log(nombreRandom);
}
changerCote();



function miser(){
  var mise = document.getElementById('coteChoisi').value;
  var résultat = mise * nombreRandom;
  document.getElementById('gain').innerHTML = résultat;
}



//Exercice 9 Mini jeu

function nb_aleatoire(min, max)
{
     var nb = min + (max-min+1)*Math.random();
     return Math.floor(nb);
}

var nb = nb_aleatoire(1, 100);  // nb a deviner


function valider(){
  var saisie = document.getElementById('choix').value;
  if(saisie != nb){
    if(saisie > nb){
      document.getElementById('ex12_result').innerHTML = "c'est plus petit";
    }
    else if(saisie < nb){
      document.getElementById('ex12_result').innerHTML = "c'est plus grand";
    }
  }else{
    document.getElementById('ex12_result').innerHTML = "c'est gagné";
  }
  console.log(nb);
}


//exercice 13


function myFunction() {

  setInterval(function(){ 
                  tail = window.innerHeight;
                  tails = window.innerWidth; 
                  document.getElementById('taille').innerHTML = tail + "px de hauteur et " + tails +"px de largeur"; }, 100);
}

myFunction();


//Exercice 15

function communDiv(){
  var test = document.getElementById('numUtilisateur').value;
  var a = 7;
  var b = 3;
  var resultatA = test/a;
  var resultatB = test/b;
  if(Number.isInteger(resultatA) && Number.isInteger(resultatB)){
    document.getElementById('resultatUtilisateur').innerHTML = test + " est un multiple de 7 et 3";
  }else if(Number.isInteger(resultatA)){
    document.getElementById('resultatUtilisateur').innerHTML = test + " est un multiple de 7";
  }else if(Number.isInteger(resultatB)){
    document.getElementById('resultatUtilisateur').innerHTML = test + " est un multiple de 3";
  }else{
    document.getElementById('resultatUtilisateur').innerHTML = test + " n'est pas un multiple ni de 7 ni de 3";
  }

  

}



//Exercice 10.1 conversion

function convertToFah(){
  var Fah = 32;
  var difFah = 1.8;
  var degre = document.getElementById('degre').value;
  var resultat3 = degre * difFah + Fah;
  document.getElementById('degreResult').innerHTML = resultat3 + " Fahrenheit";
  console.log(resultat3);
}




//Exercice 10.2 conversion

function convertToDolar(){
  var dolar = 1.1;
  var euros = document.getElementById('euro').value;
  var resultat3 = euros * dolar;
  resultat3 = resultat3.toFixed(2);
  document.getElementById('euroResult').innerHTML = resultat3 + " dolar";
  console.log(resultat3);
}



//Exercice 10.3 conversion

function convertToEuro(){
  var sommePound = 1.13;
  var euros = document.getElementById('pound').value;
  var resultat3 = euros * sommePound;
  resultat3 = resultat3.toFixed(2);
  document.getElementById('poundResult').innerHTML = resultat3 + " euro";
  console.log(resultat3);
}



//Exercice 12

function timeFly(){
  
  var heure = 0;
  var minKm = 16;

  var temps = document.getElementById('km').value;
  resultat1 = temps * minKm;
  resultat2 = temps / heure;
  for (var i = 0; temps >= 60; i++) {
    temps = temps-60; 
    heure ++;
    resultat3 = temps; 
  }
  document.getElementById('volResult').innerHTML = resultat1 + " km parcouru en " + heure + "h" + resultat3 +"minute";
}

function distanceFly(){
  var heure = 0;
  var distance = 16;
  var trajet = document.getElementById('Heure').value;
  resultat1 = trajet / distance;
  for (var i = 0; resultat1 >= 60; i++) {
    resultat1 = resultat1-60; 
    heure ++;
    var resultat3 = Math.floor(resultat1); 
    
  }
  
  document.getElementById('heureResult').innerHTML = trajet + " km parcouru en " + heure + "h" + resultat3 +"minute";

}