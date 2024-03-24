document.getElementById('image-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const originalImg = document.getElementById('original-image');
      originalImg.src = e.target.result;
  
      // Send the image to backend for processing
      // Implement this part using AJAX or Fetch API
      // You'll need to send the image data to the backend
      // and receive the processed image back
    };
  
    reader.readAsDataURL(file);
  });