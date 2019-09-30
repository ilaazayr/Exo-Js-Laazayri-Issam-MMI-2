function changeEffect(){
    var pos1 = document.getElementById('price_range').value;
    var test = document.getElementById('1');
    var test2 = document.getElementById('2');
    var test3 = document.getElementById('3');

    if(pos1 < 33){
        test.style.backgroundColor = 'red';
        test2.style.backgroundColor = '#007bff';
    }else if(33 < pos1 && pos1 < 66){
        test2.style.backgroundColor = 'red';
        test.style.backgroundColor = '#007bff';
        test3.style.backgroundColor = '#007bff';
    }else if(pos1 > 66){
        test3.style.backgroundColor = 'red';
        test2.style.backgroundColor = '#007bff';
    }

}