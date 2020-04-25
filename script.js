
function main() {


lowercase = "abcdefghijklmnopqrstuvwxyz";
uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
number = "0123456789";
special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var password= "";

let pwcriteria = {
  len : 0,
  lc : false,
  uc : false,
  num : false,
  spec : false,
}

// console.log(pwcriteria.lc);
// console.log(pwcriteria.uc);
// console.log(pwcriteria.num);
// console.log(pwcriteria.spec);
while (pwcriteria.lc == false 
    && pwcriteria.uc == false 
    && pwcriteria.num == false 
    && pwcriteria.spec == false   
    || (pwcriteria.len < 8 || pwcriteria.len > 128)){

        pwcriteria.len = prompt("How long would you like the password to be?");
        pwcriteria.lc = confirm("Would you like lowercase characters in your password?");
        pwcriteria.uc = confirm("Would you like uppercase characters in your password?");
        pwcriteria.num = confirm("Would you like numerical characters in your password?");
        pwcriteria.spec = confirm("Would you like special characters in your password?");

    }
var password= "";
var randomindex = 0;


while  (password.length < pwcriteria.len ){

    if (pwcriteria.lc ==true && password.length < pwcriteria.len){
        randomindex = Math.floor(Math.random() * lowercase.length);    
        password = password + lowercase[randomindex];
    }

    if (pwcriteria.uc ==true && password.length < pwcriteria.len){
        randomindex = Math.floor(Math.random() * uppercase.length);    
        password = password + uppercase[randomindex];
    }

    if (pwcriteria.num ==true && password.length < pwcriteria.len){
        randomindex = Math.floor(Math.random() * number.length);    
        password = password + number[randomindex];
    }

    if (pwcriteria.spec ==true && password.length < pwcriteria.len){
        randomindex = Math.floor(Math.random() * special.length);    
        password = password + special[randomindex];
    }
}

alert("password is " + password);

}
