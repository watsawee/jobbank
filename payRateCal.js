function payRateCalculate() {
  let workDaysInput = document.getElementById("workDays");
  let workDays = parseInt(workDaysInput.value.trim());

  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  let hourlyRate = 0;

  if (yearOfStudy === 1) {
      hourlyRate = 55;
  } else if (yearOfStudy === 2) {
      hourlyRate = 65;
  } else if (yearOfStudy === 3) {
      hourlyRate = 75;
  } else if (yearOfStudy === 4) {
      hourlyRate = 85;
  }


  const hoursPerDay = 3;
  let weeklyPay = workDays * hoursPerDay * hourlyRate;

  alert("Your weekly pay rate is " + weeklyPay + " THB");

  return true; 
}