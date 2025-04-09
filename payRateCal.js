function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  let perHr = 1;
  
	if(yearOfStudy == 1){
		perHr = 55;
	}
	if(yearOfStudy == 2){
		perHr = 65;
	}
	if(yearOfStudy == 3){
		perHr = 75;
	}
	if(yearOfStudy == 4){
		perHr = 85;
	}
  
  return workDays * perHr;
}


