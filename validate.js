function validateForm() {
	const nid = document.getElementById("nid").value.trim();
	const fname = document.getElementById("fname").value.trim();
	const lname = document.getElementById("lname").value.trim();
	const school = document.getElementById("school").value;
	const year = document.getElementById("year").value;
	const workDays = document.getElementById("workDays").value.trim();
	const gender = document.querySelector('input[name="genderRad"]:checked');
  
	// ตรวจสอบว่าทุกช่องกรอกครบ
	if (!nid || !fname || !lname || !school || !year || !workDays || !gender) {
	  alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
	  return false;
	}
  
	// ตรวจสอบเลขบัตรประชาชน
	if (!/^\d{13}$/.test(nid)) {
	  alert("กรุณากรอกหมายเลขบัตรประชาชนให้ถูกต้อง (13 หลัก ตัวเลขเท่านั้น)");
	  return false;
	}
  
	// ตรวจสอบจำนวนวันที่ทำงาน
	const days = parseInt(workDays);
	if (isNaN(days) || days < 1 || days > 6) {
	  alert("กรุณาระบุจำนวนวันที่สามารถทำงานได้ ระหว่าง 1 ถึง 6 วัน");
	  return false;
	}
  
	// คำนวณค่า Weekly Pay Rate ตามปีการศึกษา
	let ratePerHour = 0;
	if (year === "1") ratePerHour = 55;
	else if (year === "2") ratePerHour = 65;
	else if (year === "3") ratePerHour = 75;
	else if (year === "4") ratePerHour = 85;
  
	// Popup message 

	const dailyHours = 4; 
	const weeklyPay = ratePerHour * dailyHours * days;
  
	alert(`การลงทะเบียนสำเร็จ!\nคุณจะได้รับค่าตอบแทนประมาณ ${weeklyPay} บาท/สัปดาห์`);
	return true;
  }
  