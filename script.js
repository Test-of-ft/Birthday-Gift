function displayBirthday() {
   console.log("Button clicked"); // Add this for debugging

   const name = 'Biswajit';
   const age = '16';
   const dob = '21/3/2007';
   const picture = 'https://media.discordapp.net/attachments/1197080451173593119/1313088094026731530/royal-boys-dp_76-576x1024.webp';

   // Directly set the image source
   document.getElementById('birthdayImage').src = picture;

   // Set the name, age, and date of birth
   document.getElementById('birthdayName').textContent = `Today is ${name}'s Birthday`;
   document.getElementById('birthdayAge').textContent = `${age} years old`;
   document.getElementById('birthdayDate').textContent = dob;

   // Show the birthday header and gifts
   document.getElementById('birthdayHeader').style.display = 'block';

   const giftSections = document.querySelectorAll('.gift-section, .footer');
   giftSections.forEach((section) => section.style.display = 'block');

   // Hide the form
   document.querySelector('.form-container').style.display = 'none';

   // Play the audio
   const audio = document.getElementById('birthdayAudio');
   audio.play();
}
