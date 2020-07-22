function formvalid(){
  var email = document.registration.email;
  var mobile = document.registration.mobile;
  var pass1 = document.registration.password;
  var pass2 = document.registration.copassword;

    if(validemail(email))
    {
      if(validpass(pass1,pass2))
        {
          if(validmobilenumber(mobile)){
              alert("All fields are correct");
              clear();
          }
      }
    }
  return false;

}

function validemail(email) {
  var email1 = email.value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email1.match(mailformat))
  {
    return true;
  }
  else
  {
    alert("You have entered an invalid email address!");
    email1.focus();
    return false;
  }
}

function validpass(pass11,pass21) {
  var pass1 = pass11.value;
  var pass2 = pass21.value;
  if(pass1!= pass2){
    alert("enter the same password in confirm password");
    pass21.focus();
    return false;
  }
  if(pass1==""){
    alert("password cannot be empty");
    pass11.focus();
    return false;
  }
  if(pass2==""){
    alert("password cannot be empty");
    pass21.focus();
    return false;
  }

  if(pass1==pass2){
    return true;
  }
}

function validmobilenumber(mobile) {
  var num = mobile.value;
  if(num.length<0 && num.length>10){
    alert("enter correct mobile number");
    mobile.focus();
    return false;
  }
  var le =  /^[0-9]+$/;
  if(num.match(le)){
    return true;
  }
  else{
    alert("enter only numbers ");
    mobile.focus();
    return false;
  }
}
