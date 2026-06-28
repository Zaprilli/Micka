const upload = document.getElementById('photoUpload');
const gallery = document.getElementById('newPhotos');
const missBtn = document.getElementById('missBtn');
const complimentBtn = document.getElementById('complimentBtn');
const moodBtn = document.getElementById('moodBtn');

// Олон зураг зэрэг сонгож оруулах функц
upload.addEventListener('change', (event) => {
  const files = event.target.files;
  if (!files) return;

  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const div = document.createElement('div');
      div.classList.add('photo');
      
      // Поларойд зураг болгонд random далийлт өгөх (хөдөлгөөнийг амьд харагдуулах)
      const randomRotate = (Math.random() * 6 - 3).toFixed(1);
      div.style.transform = `rotate(${randomRotate}deg)`;
      
      div.innerHTML = `
        <div class="photo-wrapper">
          <img src="${e.target.result}" alt="New Memory">
          <div class="hover-text">New chapter begins 🇵🇱✨</div>
        </div>
        <p class="caption">Poland Memory 📍<br><span class="date-text">${new Date().toLocaleDateString()}</span></p>
      `;
      gallery.appendChild(div);
    };
    reader.readAsDataURL(file);
  });
});

// Хөгжөөнт хариултууд
const funnyReplies = [
  "We miss you too 😭 come back or send snacks!",
  "Aww 🥺 stop making us emotional!",
  "Even Poland can’t handle your chaos 😆",
  "No distance can defeat our friendship 💪💙",
  "We’re virtually hugging you rn 🤗"
];

const compliments = [
  "You’re literally the main character 💅",
  "Poland’s lucky to have you 🇵🇱✨",
  "Your Mongolian glow is unstoppable 💫",
  "Study hard but also slay harder 😎",
  "You’re one assignment away from global domination 🌍"
];

missBtn.addEventListener('click', () => {
  alert(funnyReplies[Math.floor(Math.random() * funnyReplies.length)]);
});

complimentBtn.addEventListener('click', () => {
  alert(compliments[Math.floor(Math.random() * compliments.length)]);
});

// Арын фоны өнгө солигч
const moods = ['#fffafc', '#e9f8ff', '#fff3e6', '#f4ffe9', '#fceeff'];
  let moodIndex = 0;
  moodBtn.addEventListener('click', () => {
    moodIndex = (moodIndex + 1) % moods.length;
    document.body.style.background = moods[moodIndex];
});