function displayBirthday() {
   const name = Biswajit;
   const age = 16;
   const dob = 4/12/2024;
   const picture = 
      
   document.getElementById('birthdayName').textContent = `Today is ${name}'s Birthday`;
   document.getElementById('birthdayAge').textContent = `${age} years old`;
   document.getElementById('birthdayDate').textContent = dob.toLocaleDateString();

   document.getElementById('birthdayHeader').style.display = 'block';

   const giftSections = document.querySelectorAll('.gift-section, .footer');
   giftSections.forEach((section) => (section.style.display = 'block'));

   document.querySelector('.form-container').style.display = 'none';

   // Play the audio
   const audio = document.getElementById('birthdayAudio');
   audio.play();
}
