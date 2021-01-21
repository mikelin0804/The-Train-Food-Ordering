function clickToJump(){
  document.getElementById("homepage").style.display = "none";
  document.getElementById("selector").style.display = "block";
}

function openFirstPopupWindow() {
    document.getElementById("window1").style.display = "block"
  }

  function closeFirstPopupWindow() {
    document.getElementById("window1").style.display = "none"
  }

  function openSecondPopupWindow() {
    document.getElementById("window2").style.display = "block"
    }

  function closeSecondPopupWindow() {
    document.getElementById("window2").style.display = "none"
  }

  function showPassword() {
    var password = document.getElementById("inputPassword");
    if(password.type === "password")    password.type = "text";
    else    pwd.type = "password";
  }
