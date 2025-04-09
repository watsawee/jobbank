function checkNID() {
    let nid = document.getElementById("nid").value.trim();
    
    if (!/^\d{13}$/.test(nid)) {
        return false;
    }
    return true;
}

function checkWorkDays() {
    let num = document.getElementById("workDays").value.trim();
    let days = parseInt(num);
    
    if (isNaN(days) || days < 1 || days > 6) {
        return false;
    }
    return true;
}

function checkGender() {
    let genderOptions = document.getElementsByName("gender");
    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            return true;
        }
    }
    return false;
}

function validateForm() {
    if (!checkNID()) {
        alert("Invalid value for National ID! ต้องเป็นตัวเลข 13 หลัก");
        document.getElementById("nid").focus();
        return false;
    } else if (!checkGender()) {
        alert("กรุณาเลือกเพศ (Gender)");
        return false;
    } else if (!checkWorkDays()) {
        alert("Invalid value for days of work! ต้องระหว่าง 1-6 วัน");
        document.getElementById("workDays").focus();
        return false;
    } else {
        let total = payRateCalculate(); 
        alert("Your weekly pay rate is " + total + " THB");
        return false;
    }
}

function resetForm() {
    document.getElementById("registerForm").reset();
}
