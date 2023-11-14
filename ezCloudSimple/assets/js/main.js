document.getElementById("toggleIcon").addEventListener("click", function () {
  var passwordInput = document.getElementById("inputPassword");
  var icon = document.getElementById("toggleIcon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("ti-eye");
    icon.classList.add("ti-na");
    // icon.setAttribute("class", "ti-na input-group-text");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("ti-na");
    icon.classList.add("ti-eye");
    // icon.setAttribute("class", "ti-eye input-group-text");
  }
});
