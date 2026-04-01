function validateForm() {
   
    let nid = document.getElementById("nid").value.trim();
    if (nid.length !== 13 || isNaN(nid)) {
        alert("National ID must be exactly 13 digits and numeric only!");
        return false;
    }


    let genderSelected = document.querySelector('input[name="genderRad"]:checked');
    if (!genderSelected) {
        alert("Please select your Gender!");
        return false;
    }

    
    let days = parseInt(document.getElementById("workDays").value);
    if (days < 1 || days > 6 || isNaN(days)) {
        alert("You can work between 1 and 6 days only!");
        return false;
    }

    
    payRateCalculate();
    return false; 
}