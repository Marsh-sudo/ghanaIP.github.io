//document.getElementById("submit").addEventListener('click', function getValueAkan(){
function getValueAkan(){
  var date = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  var gender = document.getElementById('gender').value;
  validateValues(date,month,year,gender);
};



function validateValues(date,month,year,gender){
    //parseInt
    var dateInt = parseInt(date);
    if(dateInt > 31 || dateInt == 0){
      alert("error in date entry");
    } else if(dateInt == " "){
      alert("date cannot be empty");
    } else if(dateInt <=31){
      alert("You are good to go");
    }
    var monthInt = parseInt(month);
    if(monthInt > 12 || monthInt == 0){
      alert("error in month entry");
    }
     var yearInt = parseInt(year);


      getDayOfWeek(gender,yearInt,monthInt,dateInt);
  

};

function getDayOfWeek(gender,yearInt,monthInt,dateInt){
  //use formulae on Ip
  var MM = monthInt;
  var CC = yearInt.slice(0,2);
  var YY = yearInt.slice(2,5); 
  var DD = dateInt;
  



  // use fomula

  var dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
  var dw = Math.floor(dayOfWeek);
 
   getAkanNames(dw,gender);

};
    
 
function getAkanNames(dw,gender){
     var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
     var femaleNames = ['Akosua','Akwoa','Abenaa','Akua','Yaa','Afua','Ama'];
     var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
     if(dw ==1 && gender === 'male'){
       alert("You were born on" + day[0] + "Your akan name is" + maleNames[0]);
     }else if(dw ==1 && gender === 'female'){
       alert("You were born on" + days[0] + "Your akan name is" + femaleNames[0]);
     }else if(dw ==2 && gender === 'male'){
       alert("You were born on" + days[1] + "Your akan name is" + maleNames[1]);
     }else if (dw ==2 && gender === 'female'){
       alert("You were born on" + days[1] + "Your akan name is" + femaleNames[1]);
     }else if(dw ==3 && gender === 'male'){
       alert("You were born on" + days[2] + "Your akan name is" + maleNames[2]);
     }else if(dw ==3 && gender === 'female'){
       alert("You were born on" + days[2] + "Your akan name is" + femaleNames[2]);
     }else if(dw ==4 && gender === 'male'){
       alert("You were born on" + days[3] + "Your akan name is" + maleNames[3]);
     }else if(dw ==4 && gender === 'female'){
       alert("You were born on" + days[3] + "Your akan name is" + femaleNames[3]);
     }else if(dw ==5 && gender === 'male'){
       alert("You were born on" + days[4] + "Your akan name is" + maleNames[4]);
     }else if(dw ==5 && gender === 'female'){
       alert("You were born on" + days[4] + "Your akan name is" + femaleNames[4]);
     }else if(dw ==6 && gender === 'male'){
       alert("You were born on" + days[5] + "Your Akan name is" + maleNames[5]);
     }else if(dw ==6 && gender === 'female'){
       alert("You were born on" + days[5] + "Your akan name is" + femaleNames[5]);
     }else if(dw ==7 && gender === 'male'){
       alert("You were born on" + days[6] + "Your akan name is" + maleNames[6]);
     }else if(dw == 7 && gender === 'female'){
       alert("You were born on" + days[6] + "Your akan name is" + femaleNames[6]);
     }
   document.getElementById('myBTN').innerHTML = getAkanNames();
};

