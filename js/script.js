// open model js 

function openModal() {
  document.getElementById('formModal').classList.remove('hidden');
  document.getElementById('formModal').classList.add('flex');
}

function closeModal() {
  document.getElementById('formModal').classList.add('hidden');
  document.getElementById('formModal').classList.remove('flex');
}

// end here 


//  testimonial 


  let reviewIndex = 0;
  const reviewSlides = document.querySelectorAll(".review-slide");
  const reviewDots = document.querySelectorAll(".review-dot");

  function showReview(index) {
    reviewSlides.forEach((slide, i) => {
      slide.classList.toggle("opacity-100", i === index);
      slide.classList.toggle("opacity-0", i !== index);
    });
    reviewDots.forEach((dot, i) => {
      dot.classList.toggle("bg-gray-400", i === index);
      dot.classList.toggle("bg-gray-300", i !== index);
    });
    reviewIndex = index;
  }

  function goToReview(index) {
    showReview(index);
  }

  setInterval(() => {
    reviewIndex = (reviewIndex + 1) % reviewSlides.length;
    showReview(reviewIndex);
  }, 2000);

  // Initial display
  showReview(reviewIndex);




// end 


// faq 


  function toggleFAQ(index) {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    const isHidden = content.classList.contains('hidden');

    // Hide all
    document.querySelectorAll('[id^="faq-content-"]').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('[id^="faq-icon-"]').forEach(el => el.classList.remove('rotate-180'));

    if (isHidden) {
      content.classList.remove('hidden');
      icon.classList.add('rotate-180');
    }
  }



// end 


// Main form validation

document.getElementById("loanForm").addEventListener("submit", function(event) {
  const mobileInput = document.querySelector('input[name="mobile"]');
  const panCardInput = document.querySelector('input[name="panCard"]');

  const mobile = mobileInput.value.trim();
  const pan = panCardInput.value.trim().toUpperCase(); // Ensure PAN is uppercase

  // Mobile number validation: must be exactly 10 digits starting with 6-9
  const mobileRegex = /^[6-9]\d{9}$/;
  if (!mobileRegex.test(mobile)) {
    alert("Please enter a valid 10-digit Indian mobile number starting with 6-9.");
    event.preventDefault();
    return;
  }

  // PAN card validation: format AAAAA9999A
  const panCardRegex = /^[A-Z]{5}\d{4}[A-Z]$/;
  if (!panCardRegex.test(pan)) {
    alert("Please enter a valid PAN card number (e.g., ABCDE1234F).");
    event.preventDefault();
    return;
  }

  // Apply uppercase PAN before form submit
  panCardInput.value = pan;
});

// end 


// Strict CTA Validation

function validateForm() {
  const loan = parseFloat(document.getElementById('loanAmount').value);
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const pan = document.getElementById('panCard').value.trim().toUpperCase();
  const gender = document.getElementById('gender').value;
  const city = document.getElementById('city').value;
  const consent = document.getElementById('consent').checked;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const mobileRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

  if (isNaN(loan) || loan < 5000 || loan > 100000) {
    alert('Loan amount must be between ₹5,000 and ₹100000 Crore');
    return false;
  }

  if (name.length < 3 || !/^[a-zA-Z\s]+$/.test(name)) {
    alert('Enter a valid full name (only letters & spaces, at least 3 characters)');
    return false;
  }

  if (!emailRegex.test(email)) {
    alert('Enter a valid email address');
    return false;
  }

  if (!mobileRegex.test(mobile)) {
    alert('Enter a valid 10-digit Indian mobile number');
    return false;
  }

  if (!panRegex.test(pan)) {
    alert('Enter a valid PAN (e.g. ABCDE1234F)');
    return false;
  }

  if (!gender || gender === 'Select') {
    alert('Please select your gender');
    return false;
  }

  if (!city || city === 'Select') {
    alert('Please select your city');
    return false;
  }

  if (!consent) {
    alert('You must accept the terms to continue');
    return false;
  }

  // Capitalize PAN before submission
  document.getElementById('panCard').value = pan;

  return true;
}
