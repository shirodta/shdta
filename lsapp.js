var storeS = localStorage.getItem("users");
if(storeS==null){
/*json array users*/
var users = [{
username:'adi',
password:'adi'},
{username:'budi',
password:'budi'}];
localStorage.setItem("users",JSON.stringify(users));}
function getUserUsername(username) {
return JSON.parse(localStorage.getItem('users')).filter(users => users.username === username)}
$(document).ready(function(){
$("#not-login").hide();
$("#login").hide();
var login = localStorage.getItem("login");
if(login!=null){
if(login=="true"){$("#content").html($("#login").html());}
else{$("#content").html($("#not-login").html());}}
else{
$("#content").html($("#not-login").html());}
$("#logout").click(function(){
localStorage.removeItem("login");
window.location.href=window.location.href;})
$("#kirim").click(function(){
var username= $("#username").val();
var password= $("#password").val();
if(getUserUsername(username.trim()).length>0){
var user = getUserUsername(username.trim())[0];
if(user.password == password.trim()){alert("iniciar sesion es correcto");
localStorage.setItem("login","true");
window.location.href=window.location.href;}
else{alert("Error en la contraseña o nombre de usuario");}}
else{alert("Usuario no encontrado");}})})
