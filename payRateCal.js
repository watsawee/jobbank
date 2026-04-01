function payRateCalculate() {
  let workDays = parseInt(document.getElementById("workDays").value);
  let year = parseInt(document.getElementById("year").value);
  let rate = 0;
 
  if (year == 1) rate = 55;
  else if (year == 2) rate = 65;
  else if (year == 3) rate = 75;
  else rate = 85;
 
  return workDays * 3 * rate;
}
 