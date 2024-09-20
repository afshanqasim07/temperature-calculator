function temperatureConverter() {
    let submit = document.getElementById("submit");
    let inputtemp = document.getElementById("tempinput"); // Changed to "tempvalue"
    let inputvalue = parseFloat(inputtemp.value);
    let result = document.getElementById("result");
    let tempdiff = document.getElementById("temdiff");
    let selectedunit = tempdiff.value;
  
    if (isNaN(inputvalue)) {
      result.innerHTML = "ERROR! ENTER VALID TEMPERATURE";
      return; // Added return statement
    }
  
    if (selectedunit === "Celsius") {
      let fahrenheit = (inputvalue * 9 / 5) + 32;
      result.innerHTML = `The ${inputvalue}°C is equal to ${fahrenheit}°F`;
    } else if (selectedunit === "fahrenhiet") {
      let celsius = (inputvalue - 32) * 5 / 9;
      result.innerHTML = `The ${inputvalue}°F is equal to ${celsius}°C`;
    } else {
      result.innerHTML = "SELECT VALID TEMPERATURE UNIT"; // Added error message
    }
  }
  
  submit.addEventListener("click", temperatureConverter);
  
  