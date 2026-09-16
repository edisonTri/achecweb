const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const searchModal = document.getElementById('searchModal');
const contentModal = document.getElementById('contentModal');
const searchOpen = document.getElementById('searchOpen');
const searchClose = document.getElementById('searchClose');
const contentClose = document.getElementById('contentClose');
const contentScroll = document.getElementById('contentScroll');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

function openModal(modal){ modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
function closeModal(modal){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }

searchOpen.addEventListener('click', () => openModal(searchModal));
searchClose.addEventListener('click', () => closeModal(searchModal));
contentClose.addEventListener('click', () => closeModal(contentModal));

[searchModal, contentModal].forEach(m => m.addEventListener('click', e => {
  if (e.target === m) closeModal(m);
}));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal(searchModal);
    closeModal(contentModal);
  }
});

const fallbackBody = (title) => `
  <div class="article-meta">Contenido editable</div>
  <div class="article-cat">ACHEC</div>
  <h1 class="article-title">${title}</h1>
  <p class="article-copy">
    Este bloque está preparado para mostrar la información completa dentro del sitio ACHEC,
    sin sacar al usuario de la página principal. Reemplaza este texto por el contenido real
    de la publicación, artículo o recurso.
  </p>
  <p class="article-copy">
    Puedes incluir varios párrafos, subtítulos, imágenes, documentos, enlaces de referencia y
    material complementario. El contenido se presenta primero y los enlaces externos o el PDF
    aparecen al final para que la persona decida si quiere continuar hacia la fuente original.
  </p>
  <div class="article-actions">
    <button type="button" onclick="closeModal(contentModal)">Cerrar</button>
  </div>
`;

function openContentFromElement(el){
  const title = el.dataset.modalTitle || el.querySelector('h3')?.textContent?.trim() || 'Contenido ACHEC';
  const cat = el.dataset.modalCat || 'ACTUALIDAD';
  const date = el.dataset.modalDate || '';
  const pdf = el.dataset.modalPdf || '';
  const customBody = el.dataset.modalBody;

  contentScroll.innerHTML = `
    <div class="article-meta">${date}</div>
    <div class="article-cat">${cat}</div>
    <h1 class="article-title">${title}</h1>
    <img class="article-image" src="${el.querySelector('img')?.src || 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=85'}" alt="">
    <div class="article-copy">
      ${customBody ? `<p>${customBody}</p>` : fallbackBody(title)}
      ${pdf ? `<div class="article-actions">
        <a href="${pdf}" target="_blank" rel="noopener noreferrer">Ver PDF ↗</a>
        <a href="${pdf}" download>Descargar PDF</a>
      </div>` : `
        <div class="article-actions">
          <a href="https://achec.cl/" target="_blank" rel="noopener noreferrer">Ver información original ↗</a>
        </div>
      `}
    </div>
  `;
  openModal(contentModal);
}

document.querySelectorAll('.news-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    openContentFromElement(card);
  });
});

document.querySelectorAll('[data-modal-title]:not(.news-card)').forEach(el => {
  el.addEventListener('click', () => openContentFromElement(el));
});

document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    openContentFromElement(btn.closest('.video-card'));
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
