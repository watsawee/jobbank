function validateForm() {
    // ดึงค่าจากฟอร์ม
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let year = document.getElementById("year").value;
    let days = document.getElementById("workDays").value;
    
    let hourlyRate = 0;

    // ตรวจสอบอัตราค่าจ้างตามปี
    if (year == "1") {
        hourlyRate = 55;
    } else if (year == "2") {
        hourlyRate = 65;
    } else if (year == "3") {
        hourlyRate = 75;
    } else if (year == "4") {
        hourlyRate = 85;
    }

    // คำนวณเงินรายสัปดาห์ (สมมติทำงาน 8 ชม./วัน)
    let weeklyPay = hourlyRate * 8 * days;

    // แสดงผล Alert Popup
    alert("Registration Successful!\n" +
          "Student Name: " + fname + " " + lname + "\n" +
          "Your weekly pay rate is: " + weeklyPay + " THB");

    // คืนค่า true เพื่อให้ฟอร์มทำงานต่อ (หรือเปลี่ยนเป็น false ถ้าไม่อยากให้หน้า Refresh)
    return true; 
}