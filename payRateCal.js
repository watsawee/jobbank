function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  workDays = parseInt(workDays);
  
  if (isNaN(workDays) || workDays < 1 || workDays > 6) {
    alert("Please enter a valid number of work days (1-6).");
    return 0;
  }

  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  // อัตราค่าจ้างต่อวันตามปี
  let payRatePerDay = 0;
  switch (yearOfStudy) {
    case 1:
      payRatePerDay = 55;
      break;
    case 2:
      payRatePerDay = 65;
      break;
    case 3:
      payRatePerDay = 75;
      break;
    case 4:
    default:
      payRatePerDay = 85;
      break;
  }

  // คำนวณค่าจ้างต่อสัปดาห์
  let totalWeeklyPay = workDays * payRatePerDay;

  // แสดงผลลัพธ์
  alert("Estimated Weekly Pay: " + totalWeeklyPay + " THB");

  return totalWeeklyPay;
}



