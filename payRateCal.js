
function payRateCalculate() {
	let workDays = parseInt(document.getElementById("workDays").value);
	let selectObj = document.getElementById("year");
	let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
	
	// กำหนดจำนวนชั่วโมงทำงานต่อวัน (fixed value)
	// สามารถแก้ไขค่านี้ตามความเหมาะสม
	const hoursPerDay = 12; // ทำงานวันละ 12 ชั่วโมง
	
	let hourlyRate;
	
	if (yearOfStudy === 1) {
	  hourlyRate = 55;
	} else if (yearOfStudy === 2) {
	  hourlyRate = 65;
	} else if (yearOfStudy === 3) {
	  hourlyRate = 75;
	} else if (yearOfStudy === 4) {
	  hourlyRate = 85;
	}
	
	// คำนวณค่าจ้างรายสัปดาห์โดยคูณกับจำนวนชั่วโมงต่อวันด้วย
	let weeklyPayRate = hourlyRate * workDays * hoursPerDay;
	
	alert("Your weekly pay rate is " + weeklyPayRate + " THB");
	
	return weeklyPayRate;
  }