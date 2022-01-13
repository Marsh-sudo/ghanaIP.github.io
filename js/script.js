function getValueAkan() {
  var date = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  var gender = document.getElementById('gender').value;
  validateValues(date,month,year,gender);




function validateValues(date,month,year,gender){
    //parseInt
    var dateInt = parseInt(date);
    if(dateInt > 31 || dateInt == 0){
      alert("error in date entry");
    } else if(dateInt == " "){
      alert("date cannot be empty");
 
    }
    var monthInt = parseInt(month);
    if(monthInt > 12 || monthInt == 0){
      alert("error in month entry");
    }
     
      getDayOfWeek(gender,century,year,month,day);
  

}

function getDayOfWeek(gender,century,year,month,day);
    //use formulae on Ip
    var CC = parseInt(document.getElementById("century").value);
    var MM = parseInt(document.getElementById("month").value);
    var DD = parseInt(document.getElementById("day").value);
    var YY = parseInt(document.getElementById("year").value);
    
    var century = year.slice(0,1);
    var year = year.slice(2,3);
    


    // use fomula

    var dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    var dw = Math.floor(dayOfWeek);
   
     getAkanNames(dw);

  
function getAkanNames(dw){
     var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
     var newAnswer = dw.toString() + gender;
     switch (newAnswer) {
       case "1Male":
         alert("Your name is Kwasi,you were born on" + days[1]);
         break;
         case "1female":
           alert("You are Akosua,you were born on" + days[1]);
           break;
           case "2Male":
             alert("You Akan Kwadwo,you were born on" + days[2]);
             break;
             case "2Female":
               alert("Your Akan is Adwoa,you were born on" + days[2]);
               break;
               case "3Male":
                 alert("You are is kwabena,you were born on" + days[3]);
                 break;
                 case "3Female":
                   alert("You are is Akua,you were born on" + days[3]);
                   break;
                   case "4Male":
                     alert("You are is Kwaku,you were born" + days[4]);
                     break;
                     case "4Female":
                       alert("You are  Yaa,you were born on" + days[4]);
                       break;
                       case "5Male":
                         alert("Your are Yaw,you were born on" + days[5]);
                         break;
                         case "5Female":
                           alert("Your are Afua,you were born on" + days[5]);
                           break;
                           case "6Male":
                             alert("Your are Kofi,you were born on" + days[6]);
                             break;
                             case "6Female":
                               alert(" Your are Ama,you were born on" + days[6]);
                               break;
                               case "7Male":
                                 alert("Your are Kwame,you were born on" + days[7]);
                                 break;
                                 case "7Female":
                                   alert("Your are Amani,you were born on" + days[7]);
                                 break;
                                 default:
                                   alert("Sorry no such Entry")
     }

 }
};
