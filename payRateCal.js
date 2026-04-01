function payRateCalculate() {
    
    let workDays = document.getElementById("workDays").value.trim();
    
   
    let selectObj = document.getElementById("year");
    let rate = parseInt(selectObj.options[selectObj.selectedIndex].value);

   
    let total = rate * parseInt(workDays);

    
    return total; 
}