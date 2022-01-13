function getValueAkan(){
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
  

};

function getDayOfWeek(gender,century,year,month,day){
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

};
    

  
function getAkanNames(dw){
     var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
     var femaleNames = ['Akosua','Akwoa','Abenaa','Akua','Yaa','Afua','Ama'];
     var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
     var newAnswer = dw.toString() + gender;
     if (days == 1 && gender === 'female'){
       alert("You are" + femaleNames[0]);
     }else if(days == 1 && gender === 'male'){
       alert("You are" + maleNames[0]);
     }else if(days == 2 && gender === 'female'){
       alert("You are" + femaleNames[1]);
     }else if(days == 2 && gender === 'male'){
       alert("You are" + maleNames[1]);
     }else if(days == 3 && gender === 'female'){
       alert("You are" + femaleNames[2]);
     }else if(days == 3 && gender === 'male'){
       alert("You are" + maleNames[2]);
     }else if(days == 4 && gender == 'female'){
       alert("You are" + femaleNames[3]);
     }else if(days == 4 && gender === 'male'){
       alert("You are" + maleNames[3]);
     }else if(days == 5 && gender == 'female'){
       alert("You are" + femaleNames[4]);
     }else if(days == 5 && gender == 'male'){
       alert("You are" + maleNames[4]);
     }else if(days == 6 && gender == 'female'){
       alert("You are" + femaleNames[5]);
     }else if(days == 6 && gender == 'male'){
       alert("You are" + maleNames[5]);
     }else if(days == 7 && gender == 'female'){
       alert(" You are" + femaleNames[6]);
     }else if(days == 7 && gender == 'male'){
       alert("You are" + maleNames[6]);
     }
 }
};
