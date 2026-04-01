function payRateCalculate() {
  let days = parseInt(document.getElementById("workDays").value);
  let hourlyRate = parseInt(document.getElementById("year").value);
  

  let totalPay = hourlyRate * 5 * days;
  
  alert("Your weekly pay rate is " + totalPay + " THB");
}