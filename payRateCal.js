function payRateCalculate() {
  let workDays = parseInt(document.getElementById("workDays").value.trim());
  let yearOfStudy = parseInt(document.getElementById("year").value);
  let hourlyRate = 0;
  
  switch (yearOfStudy) {
    case 1: hourlyRate = 55; break;
    case 2: hourlyRate = 65; break;
    case 3: hourlyRate = 75; break;
    case 4: hourlyRate = 85; break;
    default: hourlyRate = 0;
  }
  return workDays * hourlyRate;
}


