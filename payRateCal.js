function payRateCalculate() {
  let workDays = parseInt(document.getElementById("workDays").value.trim());  
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value); 
  
  let hourlyRate = 0;

  switch (yearOfStudy) {
    case 1:
      hourlyRate = 55;
      break;
    case 2:
      hourlyRate = 65;
      break;
    case 3:
      hourlyRate = 75;
      break;
    case 4:
      hourlyRate = 85;
      break;
    default:
      hourlyRate = 0;  
      break;
  }

    // คำนวณค่าตอบแทนต่อสัปดาห์ (8 ชั่วโมงต่อวัน)
  let weeklyPay = hourlyRate * 8 * workDays;

  return weeklyPay;  
}



