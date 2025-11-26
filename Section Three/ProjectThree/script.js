const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const input = document.getElementById("user-input");
const results = document.getElementById("results-div");

const checkNumber = input =>{
  if (input === "") {
    alert("Please provide a phone number");
  }

  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spaceDash = '[\\s\\-]?'
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spaceDash}${phoneNumber}`
  );

  if (phoneRegex.test(input)) {
    results.innerText = `Valid US number: ${input}`;
  } else {
    results.innerText = `Invalid US number: ${input}`;
  }  

}

checkButton.addEventListener("click", () => {
  checkNumber(input.value);
}
);

clearButton.addEventListener("click", () => {
  results.innerText = "";
});
