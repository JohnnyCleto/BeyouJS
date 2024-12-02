document.getElementById('logoLink').addEventListener('click', function(event) { 
    event.preventDefault();
    window.location.reload();
});
  
function abrirmenu() {
    document.getElementById("menu").style.width = "350px";
}
  
function fecharmenu() {
    document.getElementById("menu").style.width = "0";
}