// 🌸 1. САКУРА НАМИРЧ УНАХ ЭФФЕКТ
const sakuraBg = document.getElementById('sakuraBg');

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('sakura-petal');
  
  // Random хэмжээ, байршил, хурд өгөх
  const size = Math.random() * 10 + 8;
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.animationDuration = `${Math.random() * 3 + 4}s`; // 4-7 секунд унана
  petal.style.delay = `${Math.random() * 2}s`;

  sakuraBg.appendChild(petal);

  // Унаж дууссаны дараа устгах
  setTimeout(() => {
    petal.remove();
  }, 7000);
}

// 300 миллисекунд тутамд шинэ дэлбээ үүсгэнэ
setInterval(createPetal, 300);


// ⏰ 2. ЦАГИЙН ЗӨРҮҮ ХАРУУЛАХ (UB vs ТОКИО)
function updateClocks() {
  const now = new Date();
  
  // Монголын цаг (UTC+8)
  const ubTimeStr = now.toLocaleTimeString('mn-MN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Ulaanbaatar' });
  document.getElementById('ubTime').innerText = ubTimeStr;

  // Японы цаг (UTC+9) - Монголоос 1 цагаар түрүүлж явдаг
  const tokyoTimeStr = now.toLocaleTimeString('mn-MN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tokyo' });
  document.getElementById('tokyoTime').innerText = tokyoTimeStr;
}
setInterval(updateClocks, 1000);
updateClocks();


// 🎌 3. ЯПОН ХЭЛНИЙ ҮГСИЙН САН
const phrases = [
  { jp: "こんにちは (Konnichiwa)", mn: "Сайн уу / Өдрийн мэнд 👋" },
  { jp: "ありがとうございます (Arigatou gozaimasu)", mn: "Маш их баярлалаа! 🙏" },
  { jp: "いくらですか (Ikura desu ka?)", mn: "Энэ ямар үнэтэй вэ? 💴" },
  { jp: "美味しいです (Oishii desu!)", mn: "Үнэхээр амттай юм! 🍜" },
  { jp: "がんばって (Ganbatte!)", mn: "Амжилт хүсье, хичээгээрэй! 💪🔥" },
  { jp: "すみません (Sumimasen)", mn: "Өршөөгөөрэй / Нааш хараарай (Зөөгчийг дуудахдаа) 🙋‍♂️" },
  { jp: "トイレはどこですか (Toire wa doko desu ka?)", mn: "00 өрөө хаана байдаг вэ? 🚽" }
];

let currentPhraseIndex = 0;
const jpText = document.getElementById('jpText');
const mnText = document.getElementById('mnText');
const nextPhraseBtn = document.getElementById('nextPhraseBtn');

nextPhraseBtn.addEventListener('click', () => {
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  jpText.style.opacity = 0;
  mnText.style.opacity = 0;
  
  setTimeout(() => {
    jpText.innerText = phrases[currentPhraseIndex].jp;
    mnText.innerText = phrases[currentPhraseIndex].mn;
    jpText.style.opacity = 1;
    mnText.style.opacity = 1;
  }, 200);
});


// 😭 4. ИНТЕРФЕЙС ТОБЧЛУУРУУД
const missBtn = document.getElementById('missBtn');
const complimentBtn = document.getElementById('complimentBtn');
const moodBtn = document.getElementById('moodBtn');

const funnyReplies = [
  "Санаад байвал бидэн рүү шууд залга! Зөрж залгахгүй бол битгий уурлаарай 😆",
  "Уйлаад байв аа! Очоод Токиог самарна шүү дээ, Гамбаттэ! 💪",
  "Чи яваад өгөхөөр бид хэнтэйгээ тэнэх юм бэ? Заза тоглосон юм, амжилт! 🤗"
];

const compliments = [
  "Чи чинь бидний толгой шүү дээ!",
  "Японы Сакура шиг гоё гэрэлтээрэй 🌸✨",
  "GPA 4.0-ийг шууд халааслаад ирээрэй. Чи чадна аа! 🎓",
  "Чи бол хэзээ ч хаана ч дасан зохицож чадах хамгийн шилдэг нь шүү! 👑"
];

missBtn.addEventListener('click', () => {
  alert(funnyReplies[Math.floor(Math.random() * funnyReplies.length)]);
});

complimentBtn.addEventListener('click', () => {
  alert(compliments[Math.floor(Math.random() * compliments.length)]);
});


// 🎨 5. СЭТГЭЛ САНАА ӨӨРЧЛӨХ (TOKYO NIGHT MODE)
moodBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) {
    moodBtn.innerText = "🌸 Сакура өглөө рүү буцах";
  } else {
    moodBtn.innerText = "🎨 Сэтгэл санаагаа өөрчил";
  }
});

// ====== 1. ЧИНИЙ IMGUR РҮҮ ОРУУЛСАН ЗУРГУУДЫН САН ======
// Энд байгаа жишээ линкүүдийг өөрийн Imgur-ийн Direct Link-үүдээр солиорой!
const myImgurPhotos = [
  "https://i.imgur.com/ЯГ_ЭНД_ҮНДСЭН_ЗУРГИЙН_ЛИНК_1.jpg", 
  "https://i.imgur.com/ЯГ_ЭНД_ҮНДСЭН_ЗУРГИЙН_ЛИНК_2.jpg",
  "https://i.imgur.com/ЯГ_ЭНД_ҮНДСЭН_ЗУРГИЙН_ЛИНК_3.jpg",
  "https://i.imgur.com/ЯГ_ЭНД_ҮНДСЭН_ЗУРГИЙН_ЛИНК_4.jpg",
  "https://i.imgur.com/ЯГ_ЭНД_ҮНДСЭН_ЗУРГИЙН_ЛИНК_5.jpg"
];

// ====== 2. СЛАЙДЕРЫН ҮНДСЭН ЛОГИК (ГАРЫН АРГААР АЖИЛЛАХ) ======
const modalGallery = document.getElementById('modalGallery');
const albumModal = document.getElementById('albumModal');
const openAlbumBtn = document.getElementById('openAlbumBtn');
const closeAlbumBtn = document.getElementById('closeAlbumBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderCounter = document.getElementById('sliderCounter');

let currentIndex = 0;
let totalPhotos = myImgurPhotos.length;

function getSlideWidth() {
  return window.innerWidth <= 800 ? 290 : 360; 
}

// Хуудас ачаалагдахад зургуудыг слайдер цонх руу салгаж, өөр өөр хуудас болгож оруулна
function initializeSlider() {
  if (totalPhotos === 0) return;
  modalGallery.innerHTML = ''; // Анхны "Зураг алга" гэсэн бичгийг цэвэрлэнэ

  myImgurPhotos.forEach((imageUrl, index) => {
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('photo');
    
    // Зураг болгонд ижил хугацаа эсвэл дурын огноо тавьж болно
    const currentDateString = `📅 ${new Date().toLocaleDateString('mn-MN')} Memory #${index + 1}`;

    modalDiv.innerHTML = `
      <div class="photo-wrapper">
        <img src="${imageUrl}" alt="Memory ${index + 1}">
        <div class="hover-text">Together Forever 💙✨</div>
      </div>
      <p class="caption">Japan Memory 📍<br><span class="date-text">${currentDateString}</span></p>
    `;
    modalGallery.appendChild(modalDiv);
  });
  updateSlider();
}

function updateSlider() {
  modalGallery.style.transform = `translateX(${-currentIndex * getSlideWidth()}px)`;
  if (totalPhotos > 0) {
    sliderCounter.innerText = `${currentIndex + 1} / ${totalPhotos}`;
  } else {
    sliderCounter.innerText = `0 / 0`;
  }
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalPhotos - 1) { currentIndex++; updateSlider(); } 
  else { currentIndex = 0; updateSlider(); }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) { currentIndex--; updateSlider(); } 
  else { currentIndex = totalPhotos - 1; updateSlider(); }
});

openAlbumBtn.addEventListener('click', () => {
  albumModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  currentIndex = 0;
  updateSlider();
});

closeAlbumBtn.addEventListener('click', () => {
  albumModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Вэб нээгдэнгүүт зургуудыг бэлдэж слайдерт хуваарилна
initializeSlider();