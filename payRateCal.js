function payRateCalculate() {
  let workDays = parseInt(document.getElementById("workDays").value.trim());  // รับจำนวนวันที่สามารถทำงาน
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);  // รับค่าชั้นปีที่เลือก

  let hourlyRate = 0;
  
  // กำหนดอัตราค่าตอบแทนตามชั้นปี
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

  // คำนวณอัตราค่าตอบแทนต่อสัปดาห์ (คิด 8 ชั่วโมงต่อวัน)
  let weeklyPay = hourlyRate * 8 * workDays;

  return weeklyPay;
}