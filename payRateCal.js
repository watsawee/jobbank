function payRateCalculate() {
  let workDaysInput = document.getElementById("workDays");
  let workDays = parseInt(workDaysInput.value.trim());

  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

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

  // สมมติว่าทำงานวันละ 3 ชั่วโมง (ตามข้อมูลตัวอย่างใน PDF)
  const hoursPerDay = 3;
  let weeklyPay = workDays * hoursPerDay * hourlyRate;

  alert("Your weekly pay rate is " + weeklyPay + " THB");

  return true; // ให้ Form สามารถ Submit ได้ (ถ้าไม่มี Error อื่นๆ)
}

function validateForm() {
  // โค้ด validateForm เดิมของคุณ (ถ้ามี)
  // ...

  // เรียกฟังก์ชันคำนวณค่าจ้างเมื่อ Form ถูก Submit และ Validate ผ่าน
  return payRateCalculate();
}