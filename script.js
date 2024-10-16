const converBtn = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");
const spanOutput = document.getElementById("output");

converBtn.addEventListener("click", () => {
  let value = inputNumber.value;
  if (value === "") {
    spanOutput.innerHTML = "Please enter a valid number";
    return;
  } else if (value <= -1) {
    spanOutput.innerHTML = "Please enter a number greater than or equal to 1";
    return;
  } else if (value >= 4000) {
    spanOutput.innerHTML = "Please enter a number less than or equal to 3999";
    return;
  }
  
  function intToRoman(num) {
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];

  let result = '';

  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}

spanOutput.innerHTML = intToRoman(value);
});
