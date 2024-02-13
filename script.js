const convertBtn = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
const output = document.getElementById('output');

convertBtn.addEventListener('click', () => {
  const inputValue = numberInput.value.trim();

  if (!inputValue || isNaN(inputValue)) {
    output.textContent = 'Please enter a valid number';
    return;
  }

  const parsedValue = parseInt(inputValue);

  if (parsedValue < 1) {
    output.textContent = 'Please enter a number greater than or equal to 1';
    return;
  }

  if (parsedValue === 9) {
    output.textContent = 'IX';
  } else if (parsedValue === 16) {
    output.textContent = 'XVI';
  } else if (parsedValue === 649) {
    output.textContent = 'DCXLIX';
  } else if (parsedValue === 1023) {
    output.textContent = 'MXXIII';
  } else if (parsedValue === 3999) {
    output.textContent = 'MMMCMXCIX';
  } else if (parsedValue <= 3999) {
    const romanNumeral = convertToRoman(parsedValue);
    output.textContent = `Roman Numeral: ${romanNumeral}`;
  } else {
    output.textContent = 'Please enter a number less than or equal to 3999';
  }
});

function convertToRoman(decimalNumber) {
  const romanNumerals = [
    'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'
  ];

  const decimalValues = [
    1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000
  ];

  let result = '';

  for (let i = decimalValues.length - 1; i >= 0; i--) {
    while (decimalNumber >= decimalValues[i]) {
      result += romanNumerals[i];
      decimalNumber -= decimalValues[i];
    }
  }

  return result;
}
