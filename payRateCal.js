function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  //alert("yearOfStudy = "+yearOfStudy);
  
  workDays = parseInt(workDays);

  let payRate = 0;

  switch (yearOfStudy) {
    case 1:
      payRate = 55; break;
    case 2:
      payRate = 65; break;
    case 3:
      payRate = 75; break;
    case 4:
      payRate = 85; break;
  }

  let totalPay = workDays * payRate;

  return totalPay;
}


