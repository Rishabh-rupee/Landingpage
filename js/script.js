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


// main form validation 

  // Validation for mobile number and PAN card
  document.getElementById("loanForm").addEventListener("submit", function(event) {
    const mobileInput = document.querySelector('input[name="mobile"]');
    const panCardInput = document.querySelector('input[name="panCard"]');

    // Mobile number validation (10 digits)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobileInput.value)) {
      alert("Please enter a valid 10-digit mobile number.");
      event.preventDefault();
      return;
    }

    // PAN card validation (format: AAAAA1234A)
    const panCardRegex = /^[A-Z]{5}\d{4}[A-Z]{1}$/;
    if (!panCardRegex.test(panCardInput.value)) {
      alert("Please enter a valid PAN card number (e.g., ABCDE1234F).");
      event.preventDefault();
      return;
    }
  });

// end 

// cta validation 

function validateForm() {
  const loan = parseFloat(document.getElementById('loanAmount').value);
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const pan = document.getElementById('panCard').value.trim().toUpperCase();
  const gender = document.getElementById('gender').value;
  const city = document.getElementById('city').value;
  const consent = document.getElementById('consent').checked;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^(\+91[\-\s]?)?[0]?(91)?[6-9]\d{9}$/;
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

  if (!loan || loan <= 0) {
    alert('Please enter valid loan amount (>0)');
    return false;
  }
  if (name.length < 2) {
    alert('Enter your full name');
    return false;
  }
  if (!emailRegex.test(email)) {
    alert('Enter a valid email');
    return false;
  }
  if (!mobileRegex.test(mobile)) {
    alert('Enter a valid Indian mobile number');
    return false;
  }
  if (!panRegex.test(pan)) {
    alert('Enter valid PAN (e.g. ABCDE1234F)');  
    return false;
  }
  if (!gender) {
    alert('Please select gender');
    return false;
  }
  if (!city) {
    alert('Please select city');
    return false;
  }
  if (!consent) {
    alert('You must consent before submitting');
    return false;
  }

  document.getElementById('panCard').value = pan;
  return true;
}



// end 