let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let firstName = id("Name"),
  lastName = id("name"),
  email = id("email"),
  password = id("password"),
  //
  form = id("form"),
  errorMsg = classes("error"),
  failureIcon = classes("failure-icon");

function validate(e) {
  var status = false;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (firstName.value.trim() === "") {
    errorMsg[0].innerHTML = "FirstName cannot be empty";
    firstName.style.border = "2px solid red";
    failureIcon[0].style.opacity = "1";
    firstName.focus();
    status = false;
  } else {
    errorMsg[0].innerHTML = "";
    firstName.style.border = "2px solid green";
    failureIcon[0].style.opacity = "0";
    status = true;
  }

  if (lastName.value.trim() === "") {
    errorMsg[1].innerHTML = "LastName cannot be empty";
    lastName.style.border = "2px solid red";
    failureIcon[1].style.opacity = "1";
    status = false;
  } else {
    errorMsg[1].innerHTML = "";
    lastName.style.border = "2px solid green";
    failureIcon[1].style.opacity = "0";
    status = true;
  }

  if (email.value.trim() === "") {
    errorMsg[2].innerHTML = "Email cannot be empty";
    email.style.border = "2px solid red";
    failureIcon[2].style.opacity = "1";
    status = false;
  } if (!email.value.match(validRegex)) {
    errorMsg[2].innerHTML = "Looks like this is not an email";
    email.style.border = "2px solid red";
    failureIcon[2].style.opacity = "1";
    status = false;
  } else {
    errorMsg[2].innerHTML = "";
    email.style.border = "2px solid green";
    failureIcon[2].style.opacity = "0";
    status = true;
  }
  if (password.value.trim() === "") {
    errorMsg[3].innerHTML = "Password cannot be empty";
    password.style.border = "2px solid red";
    failureIcon[3].style.opacity = "1";
    status = false;
  } else {
    errorMsg[3].innerHTML = "";
    password.style.border = "2px solid green";
    failureIcon[3].style.opacity = "0";
    status = true;
  }
  return status;
  e.reset()
}

