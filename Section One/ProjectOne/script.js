const button = document.getElementById("check-btn");
  const input = document.getElementById("text-input");

  const value = document.getElementById("result")

  button.addEventListener("click", () => {
    const text = input.value.trim();

 if (text === "") {
    alert("Please input a value.");
    return;
  }

const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversed = cleaned.split("").reverse().join("");

  if(reversed === cleaned){
    value.innerText = `${text} is a palindrome`;
  }

  else{
    value.innerText = `${text} is not a palindrome`;
  }

  console.log(reversed);

  });