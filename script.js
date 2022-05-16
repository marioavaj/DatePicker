

let date = new Date();
let aktYear = date.getFullYear().toString();


function dateAnalise(){
    let userDate = document.getElementById("datumNarodenia").value;
    let userDateToString = userDate.toString().replaceAll("-", "").slice(4);
     let ddmm2022 = aktYear + userDateToString;
    
    let aktualDate = moment();

let dateToNextBirthday;

    if (aktualDate > moment(ddmm2022)){
        nextYearBirthday = moment(moment(), "DDMMYYYY").add(1, 'year'); //pripocita 1 rok ku aktualnemu datumu
        dateToNextBirthday = moment(nextYearBirthday).diff(ddmm2022); 
        let dni = dateToNextBirthday/1000/60/60/24;
        console.log("Datum narodenia uz uplynul, do dalsich narodenin je "+ dni + " dní")
         }else 
          {  dateToNextBirthday = moment(ddmm2022).dayOfYear() - moment(aktualDate).dayOfYear();
   
         console.log("Do ďalších narodenín je "+ dateToNextBirthday  + " dní")}

        }



