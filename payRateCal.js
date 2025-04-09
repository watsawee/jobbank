function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  //alert("yearOfStudy = "+yearOfStudy);
  
  const workHours = 1;

  let hourlyRate = 0;

  // กำหนดอัตราค่าจ้างต่อชั่วโมงตามปี
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
    default:
      hourlyRate = 85;
      break;
  }

  // คำนวณค่าตอบแทนรายสัปดาห์
  const totalPay = workDays * workHours * hourlyRate;
  return totalPay;
}

