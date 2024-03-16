const firebaseConfig = {
    apiKey: "AIzaSyAWToXIIMG23IWuOjqMJnYfuLPhnWWGbrk",
    authDomain: "legalease-2a11f.firebaseapp.com",
    databaseURL: "https://legalease-2a11f-default-rtdb.firebaseio.com",
    projectId: "legalease-2a11f",
    storageBucket: "legalease-2a11f.appspot.com",
    messagingSenderId: "1081566631402",
    appId: "1:1081566631402:web:41c3a9b2528492a3b04e93"
  };
  // initializing 
  firebase.initializeApp(firebaseConfig);

  // refernce your database
  var LegalEaseDB = firebase.database().ref('LegalEase')

document.getElementById('register').addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();


    
    var newusername = getElementVal("newUsername");
    
    var newEmail = getElementVal("newEmail");

    
    var newPhone = getElementVal("newPhone");

    var  newPassword = getElementVal("newPassword");


    saveMessages(newusername,newEmail,newPhone,newPassword);

    document.querySelector('.alert').style.display = "block"; 
    setTimeout(() => {
    document.querySelector('.alert').style.display = "none"; 
    }, 3000);
  document.getElementById('registerForm').reset();
  window.location.assign("login.html");
      /* enable alert 
    document.querySelector('.alert').style.display = "block"; 

      // remove alert message after 3 sec
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none"; 
    }, 3000);

      // reset the form

    document.getElementById('registerForm').reset();

//      console.log(newusername , newEmail , newPhone , newPassword);*/
} 
const saveMessages = (newusername,newEmail,newPhone,newPassword) => {
    var newLegalEase = LegalEaseDB.push();

    newLegalEase.set({
        newusername : newusername,
        newEmail : newEmail,
        newPhone : newPhone,
        newPassword : newPassword,
    })
}
    const getElementVal = (id) => {
        return document.getElementById(id).value;
};


document.getElementById('login').addEventListener("submit", LoginForm);
function LoginForm(e){
  e.preventDefault();
  var username = getElementVal("username");
  var  Password = getElementVal("password");
  //console.log(username + typeof(username));

LegalEaseDB.on("value",function(snapshot){
  snapshot.forEach(function(element){
    if ((element.val().newusername == username && element.val().newPassword==Password ))
    {
    document.querySelector('.alert').style.display = "block"; 
    setTimeout(() => {
    document.querySelector('.alert').style.display = "none"; 
  }, 3000);
  document.getElementById('loginForm').reset();
    alert("login successfull");
  window.location.assign("upload.html");
  }
  });
})
}