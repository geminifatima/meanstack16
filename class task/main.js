function showOutput(){
    var firstname = document.getElementById('firstname');

    var lastname = document.getElementById('lastname');
    
     var password = document.getElementById('password');

     var number =document.getElementById('number');
    document.getElementById('container').innerHTML = '<h1 style="display:inline-block;">' + firstname.value + '</h1>' + '<h2>' + lastname.value + '</h2>' +
     '<h3>' + password.value + '</h3>' + '<h2>' + password.value + '</h2>';


}