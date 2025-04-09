function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
 
  let rate;
  switch (yearOfStudy) {
    case 1:
      rate = 55; 
      break;
    case 2:
      rate = 65; 
      break;
    case 3:
      rate = 75; 
      break;
    case 4:
      rate = 85; 
      break;
    default:
      rate = 0; 
  }

  
  let totalHours = workDays * 8; // 8 ชั่วโมงต่อวัน
  
  
  let totalPay = totalHours * rate; 

  return totalPay; 
}
