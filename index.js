var users =[
    {email :"fgulbakir@gmail.com",password :"123456"},
    {email :"fatmagbakir@gmail.com",password :"123456"}
]

var posts=[
{email :"fgulbakir@gmail.com",content :"The weather is so good today"},
{email :"fatmagbakir@gmail.com",content :"My favorite season is winter."}
]

var email =prompt("Please enter the email!")
var password =prompt("please enter the password!")

function login(){
if((email == users[0].email  && password == users[0].password)
 || (email == users[1].email  && password == users[1].password)    )
{
 console.log(posts);
}
else 
{
    console.log("Username or password is wrong!");
}
}

login(email,password);