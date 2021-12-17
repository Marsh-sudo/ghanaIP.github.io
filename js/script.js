$(document).ready(function()
$(form).submit(function(event){
  var date = "31"
  if (date > 31) {
    console.log("Invalid date");
}
var month = 12;
if (month > 12){
    console.log('Invalid month');
}
  

     
      var days = document.getElementById("gender").value;
     var days = function(Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday)
     var male = (Kwasi,Kwado,Kwabena,Kwaku,Yaw,Kofi,Kwame);
     function msgPrint(male){
      if (days == Sunday && male == Kwasi) {
        alert("You are Kwasi.")
       } else if (days== Monday && male == kwado) {
         alert("You are kwado")
       }else if(days == Tuesday && male == Kwabena){
         alert("You are Kwabena")
       }else if(days == Wednesday && male == Kwaku){
         alert("You are Kwaku")
       }else if(days == Thursday && male == Yaw){
         alert("You are Yaw")
       }else if(days == Friday && male == Kofi){
         alert("You are Kofi")
       }else if(days == Saturday && male == Kwame){
         alert("You are Kwame")
       }else{
         alert("Enter valid Day")
       }
     }
    
    var days = document.getElementById("gender").value;
    var days = function(Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday) ;
    var femaleNames = (Akosua,Adowoa,Abenaa,Akua,Yaa,Afua,Yaa,Afua,Ama)
      function msgPrint(femaleNames){
        if (days == Sunday && femaleNames == Akosua){
          alert("You are Akosua")
      } else if (days == Monday && femaleNames == Adowoa) {
          alert("You are Adwoa")
      }else if (days == Tuesday && femaleNames == Abenaa){
          alert("You are Abonaa")
      }else if (days == Wednesday && femaleNames == Akua){
          alert("You are Akua")
      }else if (days == Thursday && femaleNames == Yaa){
          alert("You are Yaa")
      }else if (days == Friday && femaleNames == Afua){
          alert("You are Afua")
      }else if (days == Saturday && femaleNames == Ama){
          alert("You are Ama")
      }else{
          alert("Enter valid Date")
      }
      }
        
    event.preventDefault()

    });
