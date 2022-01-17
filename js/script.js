//document.getElementById("submit").addEventListener('click', function getValueAkan(){
function getValueAkan(){
  var dateOfBirth = document.getElementById('date').value;
  var monthOfBirth = document.getElementById('month').value;
  var yearOfBirth = document.getElementById('year').value;
  var gender = document.getElementById('gender').value;
  //convert to integers
  var monthInt = parseInt(monthOfBirth);
  var dateInt = parseInt(dateOfBirth);
  var yearInt = parseInt(yearOfBirth);
  
  validateValues(dateInt,monthInt,gender,yearInt);
};



function validateValues(dateInt,monthInt,gender,yearInt){
    //parseInt
    
    if(dateInt > 31 || dateInt == 0){
      alert("error in date entry");
    } else if(dateInt == " "){
      alert("date cannot be empty");
    }else if(monthInt > 12 || monthInt == 0){
      alert("error in month entry");
    }else{
      
    }

   dayOfWeek(dateInt,monthInt,gender,yearInt)

};


  //use formulae on Ip
  function dayOfWeek(dateInt,monthInt,gender,yearInt){
    //get the exact day in the week
      //magic number month array
      let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
      yearInt -= (monthInt < 3) ? 1 : 0;
      //sakamoto formula (Time Complexity)
      var dw =  ( yearInt + yearInt/4 - yearInt/100 + yearInt/400 + t[monthInt-1] + dateInt) % 7;
      //truncates decimal part
      var newDw = Math.trunc(dw);
      console.log(newDw);
      finalOutput(newDw,gender)
  
  }
   

;
    
 
function finalOutput(newDw,gender){
     var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
     var femaleNames = ['Akosua','Akwoa','Abenaa','Akua','Yaa','Afua','Ama'];
     var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
     if(newDw == 0 && gender === 'male'){
       alert("You were born on" + days[0] + "Your akan name is" + maleNames[0]);
     }else if(newDw == 0 && gender === 'female'){
       alert("You were born on" + days[0] + "Your akan name is" + femaleNames[0]);
     }else if(newDw == 1 && gender === 'male'){
       alert("You were born on" + days[1] + "Your akan name is" + maleNames[1]);
     }else if (newDw == 1 && gender === 'female'){
       alert("You were born on" + days[1] + "Your akan name is" + femaleNames[1]);
     }else if(newDw == 2 && gender === 'male'){
       alert("You were born on" + days[2] + "Your akan name is" + maleNames[2]);
     }else if(newDw == 2 && gender === 'female'){
       alert("You were born on" + days[2] + "Your akan name is" + femaleNames[2]);
     }else if(newDw == 3 && gender === 'male'){
       alert("You were born on" + days[3] + "Your akan name is" + maleNames[3]);
     }else if(newDw == 3 && gender === 'female'){
       alert("You were born on" + days[3] + "Your akan name is" + femaleNames[3]);
     }else if(newDw == 4 && gender === 'male'){
       alert("You were born on" + days[4] + "Your akan name is" + maleNames[4]);
     }else if(newDw == 4 && gender === 'female'){
       alert("You were born on" + days[4] + "Your akan name is" + femaleNames[4]);
     }else if(newDw == 5 && gender === 'male'){
       alert("You were born on" + days[5] + "Your Akan name is" + maleNames[5]);
     }else if(newDw == 5 && gender === 'female'){
       alert("You were born on" + days[5] + "Your akan name is" + femaleNames[5]);
     }else if(newDw == 6 && gender === 'male'){
       alert("You were born on" + days[6] + "Your akan name is" + maleNames[6]);
     }else if(newDw == 6 && gender === 'female'){
       alert("You were born on" + days[6] + "Your akan name is" + femaleNames[6]);
     }else{
       alert("OOOPS!!SOMETHING WENT WRONG :-(")
     }
     
   
}
