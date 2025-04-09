function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  //alert("yearOfStudy = "+yearOfStudy);
  
  if (isNaN(workDays) || workDays < 1 || workDays > 6) {
    alert("Invalid work days! Please enter a number between 1 and 6.");
    return 0;
  }
 
  // กำหนดอัตราค่าจ้างตามปีการศึกษา
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
    case 5:
    case 6:
      hourlyRate = 85;
      break;
    default:
      alert("Invalid year of study.");
      return 0;
  }
 
  // คำนวณค่าตอบแทนรายสัปดาห์
  let weeklyPay = hourlyRate * 8 * workDays; // 8 ชั่วโมงทำงานต่อวัน
  return weeklyPay;
}