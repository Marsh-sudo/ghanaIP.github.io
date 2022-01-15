//document.getElementById("submit").addEventListener('click', function getValueAkan(){
function getValueAkan(){
  var dateOfBirth = document.getElementById('date').value;
  var monthOfBirth = document.getElementById('month').value;
  var yearOfBirth = document.getElementById('year').value;
  var gender = document.getElementById('gender').value;
  //convert to integers
  var monthInt = parseInt(monthOfBirth);
  var dateInt = parseInt(dateOfBirth);
  var century = yearOfBirth.slice(0,2);
  var bornYear = yearOfBirth.slice(2,5);
  var CC = parseInt(century);
  var YY = parseInt(bornYear);
  console.log(century + " " + bornYear)
  validateValues(dateInt,monthInt,CC,YY,gender);
};



function validateValues(dateInt,monthInt,gender,YY,CC){
    //parseInt
    
    if(dateInt > 31 || dateInt == 0){
      alert("error in date entry");
    } else if(dateInt == " "){
      alert("date cannot be empty");
    } if(monthInt > 12 || monthInt == 0){
      alert("error in month entry");
    }else{
      getDayOfWeek(gender,CC,YY,monthInt,dateInt);
  
    }
  

};

function getDayOfWeek(gender,CC,YY,monthInt,dateInt){
  //use formulae on Ip
  console.log(CC + " " + YY);

  // use fomula

  var dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(monthInt+1)/10)) + dateInt ) % 7;
  var dw = Math.floor(dayOfWeek);
 
   getAkanNames(dw,gender);

};
    
 
function getAkanNames(dw,gender){
     var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
     var femaleNames = ['Akosua','Akwoa','Abenaa','Akua','Yaa','Afua','Ama'];
     var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
     if(dw == 1 && gender === 'male'){
       alert("You were born on" + days[0] + "Your akan name is" + maleNames[0]);
     }else if(dw == 1 && gender === 'female'){
       alert("You were born on" + days[0] + "Your akan name is" + femaleNames[0]);
     }else if(dw == 2 && gender === 'male'){
       alert("You were born on" + days[1] + "Your akan name is" + maleNames[1]);
     }else if (dw == 2 && gender === 'female'){
       alert("You were born on" + days[1] + "Your akan name is" + femaleNames[1]);
     }else if(dw == 3 && gender === 'male'){
       alert("You were born on" + days[2] + "Your akan name is" + maleNames[2]);
     }else if(dw == 3 && gender === 'female'){
       alert("You were born on" + days[2] + "Your akan name is" + femaleNames[2]);
     }else if(dw == 4 && gender === 'male'){
       alert("You were born on" + days[3] + "Your akan name is" + maleNames[3]);
     }else if(dw == 4 && gender === 'female'){
       alert("You were born on" + days[3] + "Your akan name is" + femaleNames[3]);
     }else if(dw == 5 && gender === 'male'){
       alert("You were born on" + days[4] + "Your akan name is" + maleNames[4]);
     }else if(dw == 5 && gender === 'female'){
       alert("You were born on" + days[4] + "Your akan name is" + femaleNames[4]);
     }else if(dw == 6 && gender === 'male'){
       alert("You were born on" + days[5] + "Your Akan name is" + maleNames[5]);
     }else if(dw == 6 && gender === 'female'){
       alert("You were born on" + days[5] + "Your akan name is" + femaleNames[5]);
     }else if(dw == 7 && gender === 'male'){
       alert("You were born on" + days[6] + "Your akan name is" + maleNames[6]);
     }else if(dw == 7 && gender === 'female'){
       alert("You were born on" + days[6] + "Your akan name is" + femaleNames[6]);
     }else{
       alert("OOOPS!!SOMETHING WENT WRONG :-(")
     }
     
   
}
