document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // You can post formData to a backend or Google Apps Script endpoint here
  console.log('Form submitted:', Object.fromEntries(formData.entries()));

  form.reset();
  document.getElementById('confirmation').style.display = 'block';
});
