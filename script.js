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

// ====== 1. ЧИНИЙ IMGUR РҮҮ ОРУУЛСАН ЗУРГУУДЫН САН ======
// Энд байгаа жишээ линкүүдийг өөрийн Imgur-ийн Direct Link-үүдээр солиорой!
const myImgurPhotos = [
  "https://i.imgur.com/uSpt1V0.jpg",
  "https://i.imgur.com/wvfBiGL.jpg",
  "https://i.imgur.com/49PgSMy.jpg",
  "https://i.imgur.com/V876GoP.jpg",
  "https://i.imgur.com/Fa3JMiQ.jpg",
  "https://i.imgur.com/9S25zWb.jpg",
  "https://i.imgur.com/0qpGkDC.jpg",
  "https://i.imgur.com/JbnAeDc.jpg",
  "https://i.imgur.com/KY98kmw.jpg",
  "https://i.imgur.com/NHmVwUl.jpg",
  "https://i.imgur.com/r58NqCK.jpg",
  "https://i.imgur.com/PWFaA4V.jpg",
  "https://i.imgur.com/vUlVdXN.jpg",
  "https://i.imgur.com/iZ37YYj.jpg",
  "https://i.imgur.com/Qg1nIvR.jpg",
  "https://i.imgur.com/FXEO60Z.jpg",
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

const choosePhotosBtn = document.getElementById('choosePhotosBtn');
const photoInput = document.getElementById('photoInput');
const dynamicPhotoGrid = document.getElementById('dynamicPhotoGrid');

if (choosePhotosBtn && photoInput && dynamicPhotoGrid) {
  // 1. Том товчлуур дээр дарахад нууц файл сонгогчийг идэвхжүүлнэ
  choosePhotosBtn.addEventListener('click', () => {
    photoInput.click();
  });

  // 2. Хэрэглэгч зургуудаа сонгоод дуусах үед ажиллах хэсэг
  photoInput.addEventListener('change', (event) => {
    const files = event.target.files;
    
    // Сонгосон зураг бүрийг уншиж гоё жааз үүсгэнэ
    Array.from(files).forEach((file, index) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
          // Поларойд элементийг бүтээх
          const polaroidDiv = document.createElement('div');
          polaroidDiv.className = 'dynamic-polaroid';
          
          // Жаазнуудыг яг жинхэнэ зураг шиг бага зэрэг зүүн, баруун тийш дураараа хазайлгана
          const randomRotate = Math.floor(Math.random() * 8) - 4; // -4-өөс 4 градус
          polaroidDiv.style.transform = `rotate(${randomRotate}deg)`;
          
          // Өнөөдрийн огноог автоматаар авна
          const today = new Date().toISOString().slice(0, 10).replace(/-/g, '.');

          polaroidDiv.innerHTML = `
            <img src="${e.target.result}" alt="Memory">
            <div class="caption">Дурсамж ✨<br><small style="color: #888; font-size: 0.8rem;">${today}</small></div>
          `;
          
          // Хуудасны grid рүү шууд шиднэ
          dynamicPhotoGrid.appendChild(polaroidDiv);
        };
        
        reader.readAsDataURL(file);
      }
    });
  });
}
// 🔥 ЭНД ӨӨРИЙНХӨӨ ИМГҮР ВИДЕОНЫ ЛИНКҮҮДИЙГ СУУЛГАЖ ӨГӨӨРЭЙ!
// Анхаарах зүйл: Төгсгөл нь заавал .mp4 байх ёстой шүү.
const myVideos = [
  "https://i.imgur.com/rg4D3dV.mp4",
  "https://i.imgur.com/jGWfrXi.mp4",
  "https://i.imgur.com/6UycQGL.mp4",
  "https://i.imgur.com/sW5SvUK.mp4"
];

// Хуудас уншигдаж дуусмагц дээрх линкүүдийг альбом руу шууд шиднэ
document.addEventListener('DOMContentLoaded', () => {
  const albumVideoGrid = document.getElementById('albumVideoGrid');
  
  if (albumVideoGrid) {
    myVideos.forEach((url, index) => {
      // Санамсаргүй байдлаар видео бүрийг үл ялиг хазайлгах эффект (амьд харагдуулна)
      const randomRotate = Math.floor(Math.random() * 8) - 4; // -4-өөс 4 градус
      
      const polaroidDiv = document.createElement('div');
      polaroidDiv.className = 'dynamic-video-polaroid'; // Чиний CSS дээрх Поларойд жаазны класс
      polaroidDiv.style.transform = `rotate(${randomRotate}deg)`;
      polaroidDiv.style.margin = '15px';

      polaroidDiv.innerHTML = `
        <video src="${url}" controls loop preload="auto" style="width: 100%; height: 200px; object-fit: cover; border-radius: 2px; background: #000;"></video>
        <div class="caption" style="text-align: center; font-family: 'Georgia', serif; font-size: 1.1rem; color: #333; margin-top: 15px;">
          Memory Video #${index + 1} 🎬
        </div>
      `;
      
      albumVideoGrid.appendChild(polaroidDiv);
    });
  }
});

// Зургийн жаазны бодит өргөнийг динамикаар авна
function getSlideWidth() {
  const wrapper = document.querySelector('.slider-wrapper');
  // clientWidth нь border болон padding-ийг хасаад яг бодит дотоод өргөнийг авдаг
  return wrapper ? wrapper.clientWidth : 600; 
}
// Слайдер гүйлгэх үндсэн логик
function updateSlider() {
  if (!modalGallery) return;
  
  // Өргөнийг динамикаар үржүүлж хүчээр голлуулна
  const slideWidth = getSlideWidth();
  modalGallery.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  
  if (sliderCounter && totalPhotos > 0) {
    sliderCounter.innerText = `${currentIndex + 1} / ${totalPhotos}`;
  }
}

// Цонхны хэмжээ өөрчлөгдөхөд (жишээ нь утас хөндлөн болох эсвэл PC дээр хэмжээг нь өөрчлөхөд) слайдер эвдрэхгүй байх тохиргоо
window.addEventListener('resize', () => {
  updateSlider();
});

// Хуудас ачаалагдахад зургуудыг слайдер цонх руу салгаж, өөр өөр хуудас болгож оруулна
function initializeSlider() {
  if (totalPhotos === 0) return;
  modalGallery.innerHTML = ''; // Анхны "Зураг алга" гэсэн бичгийг цэвэрлэнэ

  myImgurPhotos.forEach((imageUrl, index) => {
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('photo');
    
    // Зураг болгонд ижил хугацаа эсвэл дурын огноо тавьж болно
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

// Зургуудыг слайдер руу оруулах функц
function initializeSlider() {
  if (!modalGallery) return;
  
  // Нийт зургийн тоог массиваас дахин баталгаажуулж авна
  totalPhotos = myImgurPhotos.length; 
  modalGallery.innerHTML = ''; 

  myImgurPhotos.forEach((imageUrl, index) => {
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('photo');
    modalDiv.innerHTML = `
      <div class="photo-wrapper">
        <img src="${imageUrl}" alt="Memory ${index + 1}">
      </div>
    `;
    modalGallery.appendChild(modalDiv);
  });
  
  // Слайдер үүсэж дууссаны дараа counter-ийг хүчээр шинэчилнэ
  updateSlider();
}

// Слайдер гүйлгэх болон тоолуур шинэчлэх функц
function updateSlider() {
  if (!modalGallery) return;
  
  const slideWidth = getSlideWidth();
  modalGallery.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  
  // Тоолуурын элементийг энд дахин шинээр барьж авна (Алдаа гарахаас сэргийлнэ)
  const currentCounter = document.getElementById('sliderCounter');
  if (currentCounter && totalPhotos > 0) {
    currentCounter.innerText = `${currentIndex + 1} / ${totalPhotos}`;
  }
}

const themeToggleBtn = document.getElementById('themeToggleBtn');

// 🎨 5. СЭТГЭЛ САНАА ӨӨРЧЛӨХ (3 ГОРИМТОЙ СЛАЙД)
moodBtn.addEventListener('click', () => {
  const body = document.body;

  // 1. Одоо Sakura (Default) байгаа бол -> Tokyo Night (Dark) руу шилжих
  if (!body.classList.contains('dark-mode') && !body.classList.contains('autumn-mode')) {
    body.classList.add('dark-mode');
    moodBtn.innerText = "🍁 Kyoto Autumn"; // Шөнийн горимын бичиг
  } 
  
  // 2. Одоо Tokyo Night байгаа бол -> Улаан горим (Momiji Red) руу шилжих
  else if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('autumn-mode');
    moodBtn.innerText = "🌸 Sakura руу буцах"; // Яг чиний хүссэн улаан горимын бичиг!
  } 
  
  // 3. Одоо Улаан горим байгаа бол -> Буцаад Sakura (Default) руу шилжих
  else if (body.classList.contains('autumn-mode')) {
    body.classList.remove('autumn-mode');
    moodBtn.innerText = "🌙 Tokyo Night!"; // Буцаад үндсэн бичиг
  }
});

// Вэб нээгдэнгүүт зургуудыг бэлдэж слайдерт хуваарилна
initializeSlider();

const musicToggleBtn = document.getElementById('musicToggleBtn');
const bgMusic = document.getElementById('bgMusic');

if (musicToggleBtn && bgMusic) {
  musicToggleBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play()
        .then(() => {
          musicToggleBtn.classList.add('playing'); // Лугших CSS классыг асаана
        })
        .catch(err => {
          console.error("Хөтөч дууг хаасан байна:", err);
          alert("Эхлээд дэлгэцийн хаана ч хамаагүй нэг дараад, дараа нь хөгжмөө асаана уу!");
        });
    } else {
      bgMusic.pause();
      musicToggleBtn.classList.remove('playing'); // Лугших классыг унтраана
    }
  });
}