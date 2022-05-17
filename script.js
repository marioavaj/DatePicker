function dateAnalise() {
  let date = new Date();
  let aktYear = date.getFullYear().toString();
  let userDate = document.getElementById("datumNarodenia").value;
  let userDateToString = userDate.toString().replaceAll("-", "").slice(4);
  let ddmm2022 = aktYear + userDateToString;
  let toNextBirthday = document.getElementById("toNextBirthday");
  let aktualDate = moment(); //aktualny datum
  let season = document.getElementById("birthSeason");

  let dateToNextBirthday;

  if (aktualDate > moment(ddmm2022)) {
    let nextYearBirthday = moment(moment(), "DDMMYYYY").add(1, "year"); //pripocita 1 rok ku aktualnemu datumu
    dateToNextBirthday = moment(nextYearBirthday).diff(ddmm2022);
    let dni = Math.floor(dateToNextBirthday / 1000 / 60 / 60 / 24);
    console.log(
      "Dátum narodenín tento rok už uplynul, do dalsich narodenin je " +
        dni +
        " dní"
    );
    toNextBirthday.innerText =
      "Dátum narodenín tento rok už uplynul, \n ďalšie Tvoje narodeniny budú  \n až budúci rok o " +
      dni +
      " dní";
  } else {
    dateToNextBirthday =
      moment(ddmm2022).dayOfYear() - moment(aktualDate).dayOfYear();

    console.log("Do ďalších narodenín je " + dateToNextBirthday + " dní");
    toNextBirthday.innerText =
      "Ďalšie Tvoje narodeniny budú o " + dateToNextBirthday + " dní";
  }

  let monthBirth = userDateToString.slice(0, 2);
  console.log(monthBirth);
  switch (monthBirth) {
    case "03":
    case "04":
    case "05":
      season.innerText = "Narodil si sa na jar";
      break;
    case "06":
    case "07":
    case "08":
        season.innerText = "Narodil si sa v lete";
      break;
    case "09":
    case "10":
    case "11":
        season.innerText =
        "Narodil si sa v jeseni";
      break;
    case "12":
    case "01":
    case "02":
        season.innerText = "Narodil si sa v zime";
      break;
  }
}
