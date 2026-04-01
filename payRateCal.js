function payRateCalculate() {
  // 1. รับค่าจากหน้าจอและแปลงเป็นตัวเลข (Integer)
  let workDays = parseInt(document.getElementById("workDays").value);
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  let rate = 0;

  // 2. กำหนดอัตราค่าตอบแทนตามชั้นปี (Requirement ข้อ 1.5) [cite: 11, 42, 63]
  if (yearOfStudy === 1) {
      rate = 55;
  } else if (yearOfStudy === 2) {
      rate = 65;
  } else if (yearOfStudy === 3) {
      rate = 75;
  } else if (yearOfStudy === 4) {
      rate = 85;
  }

  // 3. คำนวณรายได้: อัตรา x 5 ชม./วัน x จำนวนวันที่ทำงาน [cite: 11, 53]
  let weeklyPay = rate * 5 * workDays; 

  // 4. แสดงผลเป็น Popup message (Requirement ข้อ 1.5) [cite: 11, 52]
  alert("Your weekly pay rate is " + weeklyPay + " THB");

  return false; // เพื่อไม่ให้หน้าเว็บ Refresh
}