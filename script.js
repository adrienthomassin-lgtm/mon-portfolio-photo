// ============================================
// Année dans le footer
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// Nav : fond au scroll + menu mobile
// ============================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function onScroll(){
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// Placeholder pour les photos manquantes
// Dès que tu ajoutes un fichier avec le bon nom
// dans le dossier /images correspondant, la vraie
// photo remplace automatiquement ce placeholder.
// ============================================
function handleMissingImage(img, hint){
  const frame = img.closest('.photo__frame, .hero__frame, .apropos__portrait');
  if (!frame) return;
  frame.classList.add('missing');
  frame.setAttribute('data-placeholder', `Photo manquante\n${hint || img.getAttribute('src')}`);
}

// ============================================
// Apparition progressive des photos au scroll
// ============================================
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion){
  document.querySelectorAll('.photo').forEach(el => el.classList.add('in-view'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.photo').forEach(el => observer.observe(el));
}

// ============================================
// Lightbox
// ============================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const btnClose = document.getElementById('lightboxClose');
const btnPrev = document.getElementById('lightboxPrev');
const btnNext = document.getElementById('lightboxNext');

let currentGroup = [];
let currentIndex = 0;

function openLightbox(photoEl){
  const group = photoEl.dataset.group;
  currentGroup = Array.from(document.querySelectorAll(`.photo[data-group="${group}"]`))
    .filter(p => !p.querySelector('.photo__frame').classList.contains('missing'));
  currentIndex = currentGroup.indexOf(photoEl);
  if (currentIndex === -1 || currentGroup.length === 0) return;
  renderLightbox();
  trackPhotoView(photoEl);
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Envoie un évènement "photo vue" à GoatCounter (si le script d'analytics est en place).
// Chaque photo apparaîtra comme une ligne distincte dans le tableau de bord GoatCounter.
function trackPhotoView(photoEl){
  if (!window.goatcounter || !window.goatcounter.count) return;
  const group = photoEl.dataset.group;
  const img = photoEl.querySelector('img');
  const slug = img.getAttribute('src').split('/').pop().replace(/\.[^.]+$/, '');
  const titleEl = photoEl.querySelector('.caption__title');
  window.goatcounter.count({
    path: `photo-${group}-${slug}`,
    title: titleEl ? titleEl.textContent : slug,
    event: true
  });
}

function renderLightbox(){
  const el = currentGroup[currentIndex];
  const img = el.querySelector('img');
  const title = el.querySelector('.caption__title').textContent;
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxTitle.textContent = title;
}

function closeLightbox(){
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function step(delta){
  if (currentGroup.length === 0) return;
  currentIndex = (currentIndex + delta + currentGroup.length) % currentGroup.length;
  renderLightbox();
}

document.querySelectorAll('.photo').forEach(photo => {
  const frame = photo.querySelector('.photo__frame');
  frame.addEventListener('click', () => {
    if (frame.classList.contains('missing')) return;
    openLightbox(photo);
  });
});

btnClose.addEventListener('click', closeLightbox);
btnPrev.addEventListener('click', () => step(-1));
btnNext.addEventListener('click', () => step(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
});
