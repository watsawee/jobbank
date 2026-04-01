function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  // ใช้ Regular Expression เช็คว่าต้องเป็นตัวเลข 0-9 และมีความยาว 13 ตัวเป๊ะๆ
  let nidRegex = /^[0-9]{13}$/;
  if (nidRegex.test(nid)) {
    return true;
  } else {
    return false;
  }
}

function checkWorkDays() {
  let num = parseInt((document.getElementById("workDays").value).trim());
  // เช็คว่าต้องเป็นตัวเลข และค่าต้องอยู่ระหว่าง 1 ถึง 6
  if (isNaN(num) || num < 1 || num > 6) {
    return false;
  } else {
    return true;
  }
}

function validateForm(){
  // เช็คว่ามีการเลือก Gender หรือยัง (ป้องกันกรณี Browser ไม่ซัพพอร์ต HTML5 required)
  let genderSelected = document.querySelector('input[name="genderRad"]:checked');

  if(!checkNID()){
    alert("National ID must be exactly 13 digits and contain only numbers!");
    document.getElementById("nid").focus();
    return false;
  } else if (!genderSelected) {
    alert("Please select your Gender!");
    return false;
  } else if(!checkWorkDays()){
    alert("Days of work must be between 1 and 6 days!");
    document.getElementById("workDays").focus();
    return false;
  } else {
    // ถ้าข้อมูลถูกทั้งหมด จะเรียกคำนวณเงินและโชว์ Popup
    let total = payRateCalculate();
    alert("Your weekly pay rate is " + total + " THB");
    return false; // return false เพื่อไม่ให้ฟอร์มรีเฟรชหน้าเว็บหลังกด Submit
  }
}