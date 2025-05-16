const accountId = 12345
let accountEmail = "ansh@gmail.com"
var accountPassword = "1234"
accountCity = "varanasi"
let kamkafolder;

//accountId =3 // not running
/*
Prefer not to use Var because of the issue in block scope of and functional scope
*/
console.log( 'The correct account is', accountId);

console.table ([accountEmail, accountId, accountPassword, accountCity, kamkafolder])