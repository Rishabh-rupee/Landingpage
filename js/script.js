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


// CTA all 
function validateForm() {
  const loan = parseFloat(document.getElementById('loanAmount').value.trim());
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const pan = document.getElementById('panCard').value.trim().toUpperCase();
  const gender = document.getElementById('gender').value;
  const city = document.getElementById('city').value;
  const consent = document.getElementById('consent').checked;

  // Regex Patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const mobileRegex = /^[6-9][0-9]{9}$/; // Strict: starts with 6-9, 10 digits only
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  const nameRegex = /^[A-Za-z]{2,}(?: [A-Za-z]{2,}){0,4}$/;
  const panHolderTypes = ['P', 'C', 'H', 'A', 'B', 'G', 'J', 'L', 'F', 'T'];

  // Loan amount: must be number and within allowed range
  if (isNaN(loan) || loan < 5000 || loan > 100000) {
    alert('Loan amount must be a valid number between ₹5,000 and ₹1,00,000');
    document.getElementById('loanAmount').focus();
    return false;
  }

  // Full name validation
  if (!nameRegex.test(name) || name.length < 3 || name.length > 50) {
    alert('Enter a valid full name (only letters, 3–50 characters, no numbers/symbols)');
    document.getElementById('fullname').focus();
    return false;
  }

  // Email validation
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address (e.g., example@mail.com)');
    document.getElementById('email').focus();
    return false;
  }

  // Mobile number validation
  if (!mobileRegex.test(mobile)) {
    alert('Please enter a valid 10-digit Indian mobile number starting with 6–9 (no spaces or symbols)');
    document.getElementById('mobile').focus();
    return false;
  }

  // PAN format validation
  if (!panRegex.test(pan)) {
    alert('Enter a valid PAN number (format: ABCDE1234F)');
    document.getElementById('panCard').focus();
    return false;
  }

  // PAN 4th character check
  const panType = pan.charAt(3);
  if (!panHolderTypes.includes(panType)) {
    alert(`Invalid PAN type (4th character should be one of: ${panHolderTypes.join(', ')})`);
    document.getElementById('panCard').focus();
    return false;
  }

  // Gender selection
  if (!gender || gender === 'Select') {
    alert('Please select your gender');
    document.getElementById('gender').focus();
    return false;
  }

  // City selection
  if (!city || city === 'Select') {
    alert('Please select your city');
    document.getElementById('city').focus();
    return false;
  }

  // Consent checkbox
  if (!consent) {
    alert('You must accept the terms and conditions to proceed');
    document.getElementById('consent').focus();
    return false;
  }

  // Re-set PAN in uppercase
  document.getElementById('panCard').value = pan;

  // All validations passed
  return true;
}
//  end 