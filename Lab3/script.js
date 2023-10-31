// Function to show an alert
function showAlert(message) 
{
  alert(message);
}
  
  // Function to show a confirmation dialog
  function showConfirmation(message) 
  {
    return confirm(message);
  }

  // Function to show a response
  function showResponse(message) 
  {
    alert(message);
  }
  
  function myFunction() {
    let person = prompt("Please enter your name");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }


  // Function to handle form submission and validation
  function handleSubmit(event) 
  {
    event.preventDefault(); // Prevent form submission
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const age = parseInt(ageInput.value);
  
    // Simple validation
    if (name === '' || email === '' || isNaN(age) || age <= 0) 
    {
      showAlert('Please fill in all fields with valid information.');
      return;
    }
  
    // Additional validation can be added here (e.g., validate email format)
  
    const confirmationMessage = `Name: ${name}\nEmail: ${email}\nAge: ${age}\nIs the information correct?`;
  
    // Ask for confirmation
    if (showConfirmation(confirmationMessage)) 
    {
      showResponse(`Form submitted successfully!\nName: ${name}\nEmail: ${email}\nAge: ${age}`);
      // You can submit the form to the server or perform further actions here
    } else 
    {
      showAlert('Form submission canceled.');
    }
  }
  

  
  
  // Attach event listener to the form on submission
  const form = document.getElementById('myForm');
  form.addEventListener('submit', handleSubmit);
  