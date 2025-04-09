function checkNID() {
    let nid = document.getElementById("nid").value.trim();
    return /^\d{13}$/.test(nid); 
}

function checkWorkDays() {
    let days = parseInt(document.getElementById("workDays").value.trim());
    return !isNaN(days) && days >= 1 && days <= 6;
}

function checkGender() {
    let genders = document.getElementsByName("gender");
    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) return true;
    }
    return false;
}

function payRateCalculate() {
    let year = document.getElementById("year").value;
    let days = parseInt(document.getElementById("workDays").value.trim());
    let rate = 0;

    switch (year) {
        case "1": rate = 55; break;
        case "2": rate = 65; break;
        case "3": rate = 75; break;
        case "4": rate = 85; break;
    }

    let total = rate * 6 * days; 
    return total;
}

function validateForm() {
    if (!checkNID()) {
        alert("กรุณากรอกเลขบัตรประชาชนให้ถูกต้อง (13 หลัก)");
        document.getElementById("nid").focus();
        return false;
    }

    if (!document.getElementById("fname").value.trim()) {
        alert("กรุณากรอกชื่อ (First Name)");
        document.getElementById("fname").focus();
        return false;
    }

    if (!document.getElementById("lname").value.trim()) {
        alert("กรุณากรอกนามสกุล (Last Name)");
        document.getElementById("lname").focus();
        return false;
    }

    if (!checkGender()) {
        alert("กรุณาเลือกเพศ (Gender)");
        return false;
    }

    if (!checkWorkDays()) {
        alert("กรุณากรอกจำนวนวันที่ทำงานได้ (1-6 วัน/สัปดาห์)");
        document.getElementById("workDays").focus();
        return false;
    }

    let total = payRateCalculate();
    alert("Your weekly pay rate is " + total + " THB");
    return false; 
}
