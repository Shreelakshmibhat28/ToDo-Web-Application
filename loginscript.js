document.getElementById("loginForm").addEventListener("submit", function(event) {
	event.preventDefault(); // prevent form submission
  
	// Get the input values
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
  
	// Check if the username and password are correct
	if (username === "shree" && password === "shwetha") {
	  document.getElementById("message").textContent = "Login successful!";
	   window.location.href = "index.html";
	} else {
	  document.getElementById("message").textContent = "Invalid username or password!";
	}
  });
  