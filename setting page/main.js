const Dark = document.cookie
  .split('; ')
  .find((row) => row.startsWith('Dark='))
  ?.split('=')[1];
var r = document.querySelector(':root');
window.onload = function(){    
    if (Dark=="true") {
    r.style.setProperty('--TitleParbackground-color', 'black');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)');
    r.style.setProperty('--Apartment', 'black');
    r.style.setProperty('--FontColor', 'white');
  } else {
    r.style.setProperty('--TitleParbackground-color', '#0080ff');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
    r.style.setProperty('--Apartment', 'white');
    r.style.setProperty('--FontColor', 'blue');
  }
    document.getElementById("PreLoader").style.display="none";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    // document.cookie = "TitleParbackground-color=#0080ff; expires=Thu, 18 Dec 2024 12:00:00 UTC"?"TitleParbackground-color=#0080ff; expires=Thu, 18 Dec 2024 12:00:00 UTC":"TitleParbackground-color=black; expires=Thu, 18 Dec 2024 12:00:00 UTC";
    // document.cookie = "ButttonGradiantColor=linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff); expires=Thu, 18 Dec 2024 12:00:00 UTC"?"ButttonGradiantColor=linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff); expires=Thu, 18 Dec 2024 12:00:00 UTC":"ButttonGradiantColor=linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB); expires=Thu, 18 Dec 2024 12:00:00 UTC";
    // document.cookie = "Apartment=white; expires=Thu, 18 Dec 2024 12:00:00 UTC"?"Apartment=white; expires=Thu, 18 Dec 2024 12:00:00 UTC":"Apartment=black; expires=Thu, 18 Dec 2024 12:00:00 UTC";
    //document.cookie = "Dark=false; expires=Thu, 18 Dec 2024 12:00:00 UTC";
  }
  
  // const ButttonGradiantColor = document.cookie
  // .split('; ')
  // .find((row) => row.startsWith('ButttonGradiantColor='))
  // ?.split('=')[1];
  // const Apartment = document.cookie
  // .split('; ')
  // .find((row) => row.startsWith('Apartment='))
  // ?.split('=')[1];


  
  var l = document.getElementById("Light");
  var d = document.getElementById("Dark");
// l.addEventListener("click", function() {
//   r.style.setProperty('--TitleParbackground-color', 'red');
//   r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
// });
function DarkMode(){
 

  // document.cookie = "TitleParbackground-color=black; expires=Thu, 18 Dec 2024 12:00:00 UTC";
  // document.cookie = "ButttonGradiantColor=linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB); expires=Thu, 18 Dec 2024 12:00:00 UTC";
  // document.cookie = "Apartment=black; expires=Thu, 18 Dec 2024 12:00:00 UTC";
  document.cookie = "Dark=true; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=/";
  // document.cookie = "Dark=true; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=../home page/main.html";
  window.location.reload();
  // console.log(getCookie("TitleParbackground-color"))
  // console.log(TitleParbackground)
}
function LightMode() {
  

  // document.cookie = "TitleParbackground-color=#0080ff; expires=Thu, 18 Dec 2024 12:00:00 UTC";
  // document.cookie = "ButttonGradiantColor=linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff); expires=Thu, 18 Dec 2024 12:00:00 UTC";
  // document.cookie = "Apartment=white; expires=Thu, 18 Dec 2024 12:00:00 UTC";
  document.cookie = "Dark=false; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=/";
  // document.cookie = "Dark=false; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=../home page/main.html";
  window.location.reload();
  // console.log(TitleParbackground)
}

