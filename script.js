function displayBirthday() {
   console.log("Button clicked");

   const name = 'Biswajit';
   const age = '16';
   const dob = '21/3/2007';
   const picture = 'https://media.discordapp.net/attachments/1197080451173593119/1313088094026731530/royal-boys-dp_76-576x1024.webp';

   // Set image source
   document.getElementById('birthdayImage').src = picture;

   // Set name, age, and date of birth
   document.getElementById('birthdayName').textContent = `Today is ${name}'s Birthday`;
   document.getElementById('birthdayAge').textContent = `${age} years old`;
   document.getElementById('birthdayDate').textContent = dob;

   // Show header and gifts
   document.getElementById('birthdayHeader').style.display = 'block';
   document.querySelectorAll('.gift-section, .footer').forEach((section) => {
      section.style.display = 'block';
   });

   // Hide form
   document.querySelector('.form-container').style.display = 'none';

   // Play audio
   const audio = document.getElementById('birthdayAudio');
   audio.play();
}
