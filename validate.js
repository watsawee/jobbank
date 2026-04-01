function checkNID() {
    let nid = document.getElementById("nid").value.trim();
   
    if (!isNaN(nid) && nid.length === 13) {
        return true;
    } else {
        return false;
    }
}

function checkWorkDays() {
    let num = parseInt(document.getElementById("workDays").value.trim());
   
    if (!isNaN(num) && num >= 1 && num <= 6) {
        return true;
    } else {
        return false;
    }
}

function validateForm() {
    if (!checkNID()) {
        alert("Invalid value for National ID! กรุณากรอกตัวเลข 13 หลัก");
        document.getElementById("nid").focus();
        return false;
    } else {
        if (!checkWorkDays()) {
            alert("Invalid value for days of work! กรุณากรอกจำนวนวัน 1-6 วัน");
            document.getElementById("workDays").focus();
            return false;
        } else {
           
            let total = payRateCalculate(); 
            
            alert("ลงทะเบียนสำเร็จ!\nอัตราค่าตอบแทนต่อสัปดาห์ (Weekly pay rate) คือ: " + total + " บาท");
            
            return false; 
        }
    }
}