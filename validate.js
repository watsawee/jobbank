function checkNID() {
    let nid = document.getElementById("nid").value.trim();
    // ต้องเป็นตัวเลข และ มี 13 หลัก
    if (isNaN(nid) || nid.length !== 13 || nid === "") {
        return false;
    }
    return true;
}

function checkWorkDays() {
    let num = document.getElementById("workDays").value.trim();
    // ต้องเป็นตัวเลข และ อยู่ระหว่าง 1 - 6
    if (isNaN(num) || num < 1 || num > 6 || num === "") {
        return false;
    }
    return true;
}

function validateForm() {
    // เพิ่มการดึงค่าชื่อ นามสกุล และ เพศ
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let gender = document.querySelector('input[name="genderRad"]:checked');

    // เช็คชื่อ-นามสกุล และ เพศ ห้ามว่าง
    if (fname === "" || lname === "" || !gender) {
        alert("Please fill in all fields (Name and Gender)!");
        return false;
    }

    if (!checkNID()) {
        alert("Invalid value for National ID! (Must be 13 digits)");
        document.getElementById("nid").focus();
        return false;
    }

    if (!checkWorkDays()) {
        alert("Invalid value for days of work! (Must be 1 - 6 days)");
        document.getElementById("workDays").focus();
        return false;
    }

    // ถ้าผ่านหมด ให้คำนวณเงิน
    let total = payRateCalculate();
    alert("Your weekly pay rate is " + total + " THB");
    return false; // เพื่อหยุดหน้าเว็บไม่ให้รีเฟรชหลังกดปุ่ม
}