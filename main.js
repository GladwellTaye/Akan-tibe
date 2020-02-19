// function getName() {
//     var year = parseInt(document.getElementById("YY").value);
//     var month =parseInt(document.getElementById("MM").value);
//     var day = parseInt(document.getElementById("DD").value);
//     var date = new Date();
//     var dob = date.getDay();
//     var male = document.getElementById("male");
//     var female = document.getElementById("female");
//     var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//     var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//     if (male.checked == false && female.checked == false) {
//         alert("Hello identify your gender");
//     }
//     else if (male.checked === true) {
//         alert("Hello, " + maleNames[dob] + " is your Akan name " + " since you were born on a " + weekdays[dob]);
//     }
//     else {
//         alert("Hello, " + femaleNames[dob] + " is your Akan name " +" since you were born on a " + weekdays[dob]);
//     };
//
//     (year == "" || year.length < 4 && year.length >4 )
//     if(year <1  || year >2020 ){
//               alert("Hello please re-enter a valid year!");
//     }
//     // else if (month <1  || month > 12 || month == 2 && day > 29 ){
//     else if (month <1  || month > 12 ){
//         alert("Hello please re-enter a valid month!");
//     }
//     else ( day  <1 || day >=31) {
//         alert("Hello please re-enter a valid day!");
//     };
//
// }

var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"]
function giveAkanName () {
    var year =parseInt(document.getElementById("year").value);
    var month=parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
    var gender=getGender();
    var date = new Date(year +"/" + month + "/"+day);
    var dayBorn = date.getDay();
    var akanName;
    var validate = (year > 0 && (month >0 && month <=12) && (day > 0 && day <= 31));
    var validateGender = (gender !== "male" && gender !== "female");
    if (year <= 0 ) {
        alert("please enter a valid year");
    }
    else if (month <= 0 || month > 12) {
        alert(" Invalid month input try again ");
    }
    else if (day <= 0 || day > 31){
        alert("Invalid day input try again");
    }
    else if (validate == false) {
        alert("try again wrong input");
    }
    if(gender ==="male" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        akanName = maleNames[dayBorn];
    alert("Your Akan name is "+akanName +" since you were born on a "+dayOfTheWeek[dayBorn]);
    }
    else if (gender ==="female" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        akanName = femaleNames[dayBorn];
    alert("Your Akan name is "+akanName +" since you were born on a "+dayOfTheWeek[dayBorn]);
    }
}
    function getGender(){
        var gender = document.getElementsByName("gender");
        for(i = 0; i < gender.length; i++){
            if(gender[i].checked){
                return(gender[i].value)
        }
    }
}
