function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  //alert("yearOfStudy = "+yearOfStudy);
  const ratePerHour = {
    1: 55,
    2: 65,
    3: 75,
    4: 85
  };
  const hoursPerDay = 8;
  const totalHours = workDays * hoursPerDay;
  const totalPay = totalHours * ratePerHour[yearOfStudy];
  return totalPay;
}


