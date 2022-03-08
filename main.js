function adduser(){
    window.location = "index2.html";
}

function sent(){
    player1name = document.getElementById("num1").value;
    player2name = document.getElementById( "num2").value;
    localStorage.setItem("q turn" , player1name);
    localStorage.setItem("a turn" , player2name);
    localStorage.setItem("1" , player1name);
    localStorage.setItem("2" , player2name);
    window.location = "index2.html";
}