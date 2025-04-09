function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	return /^\d{13}$/.test(nid);
}

function checkWorkDays() {
	let num = (document.getElementById("workDays").value).trim();
	let days = Number(num);
	if (!/^\d+$/.test(num) || days < 1 || days > 6) {
		return false;
	} else {
		return true;
	}
}

function validateForm() {
	if (!checkNID()) {
		alert("Invalid value for National ID!");
		document.getElementById("nid").focus();
		return false;
	} else {
		if (!checkWorkDays()) {
			alert("Invalid value for days of work!");
			document.getElementById("workDays").focus();
			return false;
		} else {
			let total = payRateCalculate();
			if (total !== null) {
				alert("Your weekly pay rate is " + total + " THB");
			}
			return false;
		}
	}
}