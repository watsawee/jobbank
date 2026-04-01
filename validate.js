function checkNID() {
    let nid = (document.getElementById("nid").value).trim();
    // โจทย์: ต้องมี 13 หลัก และเป็นตัวเลขทั้งหมด 
    if (isNaN(nid) || nid.length !== 13) {
        return false;
    } else {
        return true;
    }
}

function checkWorkDays() {
    let num = (document.getElementById("workDays").value).trim();
    // โจทย์: ระบุได้ตั้งแต่ 1 ถึง 6 วันเท่านั้น 
    let days = parseInt(num);
    if (isNaN(days) || days < 1 || days > 6) {
        return false;
    } else {
        return true;
    }
}

function validateForm() {
    // 1. ตรวจสอบ National ID 
    if (!checkNID()) {
        alert("National ID จำเป็นต้องกรอก 13 หลัก และเป็นตัวเลขเท่านั้น!");
        document.getElementById("nid").focus();
        return false;
    }

    // 2. ตรวจสอบ Gender (ต้องเลือก Male, Female หรือ Other) 
    let gender = document.querySelector('input[name="genderRad"]:checked');
    if (!gender) {
        alert("กรุณาระบุสถานะเพศ (Gender)!");
        return false;
    }

    // 3. ตรวจสอบจำนวนวันทำงาน 
    if (!checkWorkDays()) {
        alert("จำนวนวันที่ทำงานได้ ต้องอยู่ระหว่าง 1 - 6 วันเท่านั้น!");
        document.getElementById("workDays").focus();
        return false;
    }

    // 4. ถ้าผ่านหมด ให้เรียกฟังก์ชันคำนวณเงิน 
    // ในไฟล์ payRateCal.js ของคุณมี alert อยู่แล้ว จึงไม่ต้องใส่ alert ซ้ำที่นี่ครับ
    payRateCalculate(); 
    return false; // เพื่อไม่ให้หน้าเว็บ Refresh
}