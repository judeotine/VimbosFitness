// Get the input fields and result paragraph
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultParagraph = document.getElementById('result');

// Add event listener to the calculate button
document.getElementById('calculate-bmi').addEventListener('click', calculateBMI);

// Function to calculate BMI
function calculateBMI() {
  // Get the input values
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  // Calculate BMI
  const bmi = weight / (height / 100) ** 2;

  // Determine the weight status
  let weightStatus;
  if (bmi < 18.5) {
    weightStatus = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    weightStatus = 'Healthy';
  } else if (bmi >= 25 && bmi < 30) {
    weightStatus = 'Overweight';
  } else {
    weightStatus = 'Obese';
  }

  // Display the result
  resultParagraph.textContent = `Your BMI is ${bmi.toFixed(2)} and your weight status is ${weightStatus}.`;
}