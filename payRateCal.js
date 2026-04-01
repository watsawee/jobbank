function payRateCalculate() {
  let workDays = document.getElementById("workDays").value.trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  let rate = 0;

  // 1. กำหนดเรทเงินตามชั้นปี (yearOfStudy คือ value จาก select)
  if (yearOfStudy === 1) {
      rate = 55;
  } else if (yearOfStudy === 2) {
      rate = 65;
  } else if (yearOfStudy === 3) {
      rate = 75;
  } else if (yearOfStudy === 4) {
      rate = 85;
  }

  // 2. คำนวณเงินรายสัปดาห์ 
  // สูตร: เรท x 8 ชม. (สมมติว่าทำงานวันละ 8 ชม.) x จำนวนวันที่ทำได้
  let weeklyTotal = rate * 8 * parseInt(workDays);

  // 3. ส่งค่ากลับไปให้ validateForm() นำไปแสดงผล
  return weeklyTotal;
}