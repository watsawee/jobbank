function payRateCalculate() {
  const workDays = parseInt(document.getElementById("workDays").value.trim());
  const year = parseInt(document.getElementById("year").value);
  
  let ratePerHour = 0;

  switch (year) {
    case 1: ratePerHour = 55; break;
    case 2: ratePerHour = 65; break;
    case 3: ratePerHour = 75; break;
    case 4: ratePerHour = 85; break;
    default: ratePerHour = 55;
  }

  const hoursPerDay = 4;
  return ratePerHour * workDays * hoursPerDay;
}


