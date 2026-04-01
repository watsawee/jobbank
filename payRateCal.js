function payRateCalculate() {
  let workDays = parseInt((document.getElementById("workDays").value).trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  // 1. กำหนดเรทค่าจ้างต่อชั่วโมงตามชั้นปี
  let hourlyRate = 0;
  if (yearOfStudy === 1) {
    hourlyRate = 55;
  } else if (yearOfStudy === 2) {
    hourlyRate = 65;
  } else if (yearOfStudy === 3) {
    hourlyRate = 75;
  } else if (yearOfStudy === 4) {
    hourlyRate = 85;
  }

  // 2. กำหนดจำนวนชั่วโมงทำงานต่อวัน 
  // (ถ้าอาจารย์ไม่ได้กำหนดในโจทย์ ให้สมมติฐานการทำงานมาตรฐานที่ 8 ชั่วโมง/วัน แต่ถ้าเป็นงานแบบ Job1 ในรูป อาจจะ 3 ชั่วโมง/วัน คุณสามารถแก้เลข 8 ตรงนี้ได้ครับ)
  let hoursPerDay = 8; 

  // 3. คำนวณรายรับต่อสัปดาห์ = วันที่ทำงาน x จำนวนชั่วโมงต่อวัน x เรทต่อชั่วโมง
  let weeklyPay = workDays * hoursPerDay * hourlyRate;
  
  return weeklyPay;
}