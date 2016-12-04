
var DATA = [];
var input;

function insertItem(){

    input = document.getElementById('input').value;
    DATA.push(input);
    
    
    renderDATA(DATA);
}

function renderDATA(data){
    var container = document.getElementById('container');
    container.innerHTML="";
    for(var i in data){
        container.innerHTML += "<div><input type='checkbox' /><label>" + DATA[i] + "</label></div>";
    }
}
