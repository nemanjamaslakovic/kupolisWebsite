const emailInput = document.getElementById('email');

emailInput.addEventListener('input', function() {
  const email = emailInput.value;
  if (email === '') {
    emailInput.classList.remove('invalid');
  } 
  else if (validateEmail(email) == false) {
    emailInput.classList.add('invalid');
  } 
  else {
    emailInput.classList.remove('invalid');
  }
});

function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

const subjectInput = document.getElementById('subject');

subjectInput.addEventListener('input', function() {
  const link = subjectInput.value;
  const isLink = /https?:\/\/[\w-]+\.[\w-]+\S*/.test(link);

  if (isLink) {
    subjectInput.classList.add('invalid');
  } else {
    subjectInput.classList.remove('invalid');
  }
});