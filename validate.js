function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	if(isNaN(nid)){
	  return false;
	}else{
	  return true;
	}
  }
  
  function checkWorkDays() {
	let num = (document.getElementById("workDays").value).trim();
	if (isNaN(num)) {
	  return false;
	} else {
	  return true;
	}
  }
  
  function validateForm(){
	  if(!checkNID()){
		alert("Invalid value for National ID!");
		document.getElementById("nid").focus();
		return false;
	  }else{
		  if(!checkWorkDays()){
			alert("Invalid value for days of work!");
			document.getElementById("workDays").focus();
			return false;
		  }else{
			  total = payRateCalculate();
			  alert("Your weekly pay rate is "+total+" THB");
			  return false;
		  }
	  }
	  
  }
  function validateForm() {
	  const nidInput = document.getElementById("nid");
	  const nidValue = nidInput.value.trim();
	  const nidError = document.getElementById("nidError");
	  nidError.textContent = ""; // เคลียร์ข้อความผิดพลาด
	
	  if (nidValue.length !== 13) {
		nidError.textContent = "กรุณากรอกหมายเลขบัตรประชาชน 13 หลัก";
		nidInput.focus();
		return false;
	  }
	
	  if (!/^\d+$/.test(nidValue)) {
		nidError.textContent = "กรุณากรอกหมายเลขบัตรประชาชนด้วยตัวเลขเท่านั้น";
		nidInput.focus();
		return false;
	  }
	
	  return true;
	}
	function validateForm() {
	  const workDaysInput = document.getElementById("workDays");
	  const workDaysValue = workDaysInput.value.trim();
	
	  // ตรวจสอบว่าเป็นตัวเลขหรือไม่
	  if (!/^\d+$/.test(workDaysValue)) {
		alert("กรุณากรอกจำนวนวันที่สามารถทำงานได้ด้วยตัวเลขเท่านั้น");
		workDaysInput.focus();
		return false;
	  }
	
	  const days = parseInt(workDaysValue);
	
	  // ตรวจสอบช่วงของตัวเลข
	  if (isNaN(days) || days < 1 || days > 6) {
		alert("กรุณากรอกจำนวนวันที่สามารถทำงานได้ตั้งแต่ 1 ถึง 6 วัน");
		workDaysInput.focus();
		return false;
	  }
	
	  // ถ้าผ่านการตรวจสอบอื่นๆ ก็สามารถส่งแบบฟอร์มต่อได้
	  return true;
	}
  
	document.querySelector('form').addEventListener('submit', function(event) {
	  event.preventDefault(); // ป้องกันการส่งแบบฟอร์มแบบดั้งเดิม
  
	  // ตรวจสอบความถูกต้องของข้อมูลด้วย validateForm() (ตามที่คุณมีอยู่)
	  if (validateForm()) {
		  // ถ้าข้อมูลถูกต้อง ให้ส่งไปยัง Servlet เพื่อคำนวณค่าตอบแทน
		  fetch('/calculatePay', {
			  method: 'POST',
			  body: new FormData(this), // ส่งข้อมูลแบบฟอร์ม
		  })
		  .then(response => response.json())
		  .then(data => {
			  if (data.error) {
				  alert(data.error); // แสดงข้อผิดพลาดจากเซิร์ฟเวอร์
			  } else if (data.weeklyPay) {
				  alert(`อัตราค่าตอบแทนต่อสัปดาห์โดยประมาณ: ${data.weeklyPay} บาท`);
				  // คุณอาจต้องการทำการ Redirect หรือดำเนินการอื่นๆ ต่อไป
			  }
		  })
		  .catch(error => {
			  console.error('Error:', error);
			  alert('เกิดข้อผิดพลาดในการสื่อสารกับเซิร์ฟเวอร์');
		  });
	  }
  });
  function calculateWeeklyPay() {
	  const yearSelect = document.getElementById("year");
	  const selectedYearValue = yearSelect.value;
	  const workDaysInput = document.getElementById("workDays");
	  const workDaysValue = workDaysInput.value.trim();
	
	  let hourlyRate;
	
	  switch (selectedYearValue) {
		case "1":
		  hourlyRate = 55;
		  break;
		case "2":
		  hourlyRate = 65;
		  break;
		case "3":
		  hourlyRate = 75;
		  break;
		case "4":
		  hourlyRate = 85;
		  break;
		default:
		  alert("เกิดข้อผิดพลาดในการดึงอัตราค่าจ้าง");
		  return;
	  }
	
	  const daysPerWeek = parseInt(workDaysValue);
	
	  if (isNaN(daysPerWeek) || daysPerWeek < 1 || daysPerWeek > 6) {
		alert("กรุณากรอกจำนวนวันที่สามารถทำงานได้ตั้งแต่ 1 ถึง 6 วัน");
		workDaysInput.focus();
		return;
	  }
	
	  // สมมติว่าทำงานวันละ 8 ชั่วโมง (คุณสามารถปรับเปลี่ยนได้ตามความเหมาะสม)
	  const hoursPerDay = 8;
	  const weeklyPay = hourlyRate * hoursPerDay * daysPerWeek;
	
	  alert(`อัตราค่าตอบแทนต่อสัปดาห์โดยประมาณ: ${weeklyPay} บาท`);
	}
	
	function validateForm() {
	  // ... โค้ดตรวจสอบความถูกต้องของข้อมูลอื่นๆ ที่คุณมีอยู่ ...
	
	  const workDaysInput = document.getElementById("workDays");
	  const workDaysValue = workDaysInput.value.trim();
	
	  if (!/^\d+$/.test(workDaysValue)) {
		alert("กรุณากรอกจำนวนวันที่สามารถทำงานได้ด้วยตัวเลขเท่านั้น");
		workDaysInput.focus();
		return false;
	  }
	
	  const days = parseInt(workDaysValue);
	
	  if (isNaN(days) || days < 1 || days > 6) {
		alert("กรุณากรอกจำนวนวันที่สามารถทำงานได้ตั้งแต่ 1 ถึง 6 วัน");
		workDaysInput.focus();
		return false;
	  }
	
	  // ถ้าผ่านการตรวจสอบทั้งหมด ให้เรียกฟังก์ชันคำนวณค่าตอบแทน
	  calculateWeeklyPay();
	
	  return true; // อนุญาตให้ส่งแบบฟอร์ม (หากต้องการ)
	}