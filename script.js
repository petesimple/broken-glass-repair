document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  fetch('https://script.google.com/macros/s/AKfycbwX4XFw76YnjxciNLFhstyXFu2gQTEXY8OFrnmEaCfHbswYGHZTCaaKOIfJhV9oW48n/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(result => {
    console.log(result);
    if (result.includes("Success")) {
      form.reset();
      document.getElementById('confirmation').style.display = 'block';
    } else {
      alert("There was a problem: " + result);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Network error. Please try again.");
  });
});
