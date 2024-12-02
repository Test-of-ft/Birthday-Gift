function displayBirthday() {
   console.log("Button clicked");

   const name = 'Biswajit';
   const age = '16';
   const dob = '21/3/2007';
   const picture = './images/royal-boys-dp_76-576x1024.webp'; // Updated image path

   // Set the image source
   document.getElementById('birthdayImage').src = picture;

   // Set the name, age, and date of birth
   document.getElementById('birthdayName').textContent = `Today is ${name}'s Birthday`;
   document.getElementById('birthdayAge').textContent = `${age} years old`;
   document.getElementById('birthdayDate').textContent = dob;

   // Show the birthday header and gifts
   document.getElementById('birthdayHeader').style.display = 'block';
   document.querySelectorAll('.gift-section, .footer').forEach((section) => {
      section.style.display = 'block';
   });

   // Hide the form
   document.querySelector('.form-container').style.display = 'none';

   // Play audio
   const audio = document.getElementById('birthdayAudio');
   audio.play();
}
