var date = 31;
if (date > 31) {
    console.log("Invalid date");
}
 var month = 12;
 if (month > 12){
     console.log('Invalid month');
 }
function find_leapyear(){

    var leapYear = document.getElementById("year").value;

    if((leapYear % 4 == 0) && (leapYear % 100 !=0) || (leapYear % 400 == 0)) {
        alert(leapYear + "True")
    }else{
        alert(leapYear + "False")
    }

}


 const maleNames = [Sunday["Kwasi"], Monday["Kwadwo"] ,Tuesday["Kwabena"] ,Wednesday["Kwaku"] ,Thursday["Yaw"], Friday["Kofi"] ,Saturday["Kwame"]];
 function let(male);{
 let male = maleNames[1,2,3,4,5,6,7];
 if (male === 1) {
    console.log("You are Kwasi.")
 } else if (male === 2) {
     console.log("You are kwado")
 }else if (male===3){
     console.log("You are Kwabena")
 }else if(male ===4){
     console.log("You are Kwaku")
 }else if(male ==5){
     console.log("You are Yaw")
 }else if(male===6){
     console.log("You are Kofi")
 }else if(male===7){
     console.log("You are Kwame")
 }else{
     console.log("Enter valid Day")
 }
 
}

const femaleNames = [Sunday["Akosua"],Monday["Adwoa"],Tuesday["Abonaa"],Wednesday["Akua"],Thursday["Yaa"], Friday["Afua"],Saturday["Ama"]];
function let(female);{
    var womaconst = femaleNames(1,2,3,4,5,6,7);
    if (womanconst == 1){
        console.log;("You are Akosua")
    } else if (womanconst == 2) {
        console.log("You are Adwoa")
    }else if (womanconst == 3){
        console.log("You are Abonaa")
    }else if (womanconst == 4){
        console.log("You are Akua")
    }else if (womanconst == 5){
        console.log("You are Yaa")
    }else if (womanconst === 6){
        console.log("You are Afua")
    }else if (womanconst == 7){
        console.log("You are Ama")
    }else{
        console.log("Enter valid Date")
    }
}

