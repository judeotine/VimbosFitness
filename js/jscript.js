function calculateBMI() {
	const weight = document.getElementById("weight").value;
	const height = document.getElementById("height").value;

	if (weight && height) {
		const bmi = weight / (height * height);
		const result = document.getElementById("result");

		if (bmi < 18.5) {
			result.textContent = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
		} else if (bmi < 25) {
			result.textContent = `Your BMI is ${bmi.toFixed(2)}. You are normal weight.`;
		} else if (bmi < 30) {
			result.textContent = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
		} else {
			result.textContent = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
		}
	} else {
		alert("Please enter both weight and height values.");
	}
}
