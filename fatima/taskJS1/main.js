var k;
var USERS = [
    'sumair','awais','umair'
];

var PASSWORDS = [
    '1234','1234','1234'
];

function validateUser(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var container = document.getElementById('container');
    
    for(i in USERS){
        if(username == USERS[i] && password == PASSWORDS[i]){
            k=i;

           container.innerHTML = print();
        }
        else{
            container.innerHTML = print2();
        }
    }   
}

function print() {
        return '<h1>Welcome' + USERS[k] + '</h1>';
        }
function print2(){

    
         return '<h1>' + 'Please Enter correct Password' + '</h1>';
    
    } 
    // body...
