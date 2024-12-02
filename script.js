function displayBirthday() {
   const name = 'Biswajit';
   const age = '16';
   const dob = '21/3/2007';
   const picture = 'https://media.discordapp.net/attachments/1197080451173593119/1313088094026731530/royal-boys-dp_76-576x1024.webp?ex=674edc15&is=674d8a95&hm=6ae8351dbb36b6dbfb287dc0345b8bedbd219e308131d800a46043c746a82390&';

   const reader = new FileReader();
   reader.onload = function (e) {
      document.getElementById('birthdayImage').src = e.target.result;
   };
   reader.readAsDataURL(picture);
   
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
