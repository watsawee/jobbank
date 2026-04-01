function validateForm() {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let year = document.getElementById("year").value;
    let days = document.getElementById("workDays").value;
    
    let hourlyRate = 0;

  
    if (year == "1") {
        hourlyRate = 55;
    } else if (year == "2") {
        hourlyRate = 65;
    } else if (year == "3") {
        hourlyRate = 75;
    } else if (year == "4") {
        hourlyRate = 85;
    }
    let weeklyPay = hourlyRate * 8 * days;
    alert("Registration Successful!\n" +
          "Student Name: " + fname + " " + lname + "\n" +
          "Your weekly pay rate is: " + weeklyPay + " THB");
    return true; 
}