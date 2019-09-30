

var total;
var test;
function KeyPress(){
    total = document.getElementById("caractere").value.length;
    test =
    
    document.getElementById("compteur").innerHTML = total;
    if(total < 12){
        document.getElementById("compteur").style.color = 'red';
    }else if(total > 12){
        document.getElementById("compteur").style.color = 'black';
    } 
}

function nextPage(){
    if(total < 12){
        document.getElementById('zoneTest').innerHTML = 'pas assez de caractere';
    
    }else if(total > 12){
        document.getElementById("blockContainer").style.marginLeft = '-100%';
        document.getElementById("blockContainer").style.transitionDuration = '1s';
    }
}


function beforePage(){
    document.getElementById("blockContainer").style.marginLeft = '0%';
}


