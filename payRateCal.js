function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  //alert("yearOfStudy = "+yearOfStudy);
  
  let payRatePerHour;
  switch (yearOfStudy) {
    case 1:
      payRatePerHour = 55; // ปีที่ 1
      break;
    case 2:
      payRatePerHour = 65; // ปีที่ 2
      break;
    case 3:
      payRatePerHour = 75; // ปีที่ 3
      break;
    case 4:
      payRatePerHour = 85; // ปีที่ 4 หรือมากกว่า
      break;
    default:
      payRatePerHour = 0;
  }
  let hoursPerDay = 8;
  let totalHours = workDays * hoursPerDay;

  // คำนวณค่าตอบแทนจากจำนวนชั่วโมงทำงาน
  let totalPay = payRatePerHour * totalHours;
  return totalPay;
}

