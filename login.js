function getUsername() {
   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username === '' || password === '') {
        document.getElementById('result').innerHTML = 'Please enter both username and password.';
    } else {
       
        document.getElementById('result').innerHTML = 'Welcome, ' + username + '!';

        
    }
}

function getUsername() {
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username === '' || password === '') {
        document.getElementById('result').innerHTML = 'Please enter both username and password.';
    } else {
        
        window.location.href = 'home.html';
    }
}