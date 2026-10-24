const menu=document.querySelector('.menu');const nav=document.querySelector('#nav');if(menu&&nav){menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded);});}
// Populate external community links from assets/links.js. Empty URLs are shown as
// unlinked descriptions rather than broken or guessed links.
document.addEventListener('DOMContentLoaded', () => {
  const links = window.BLOCKHAVEN_LINKS || {};
  document.querySelectorAll('[data-community-link]').forEach(el => {
    const kind = el.dataset.communityLink;
    const url = (links[kind] || '').trim();
    if (url && /^https:\/\//i.test(url)) {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = el.dataset.linkClass || 'textlink';
      a.textContent = el.dataset.linkText || el.textContent.trim();
      el.replaceWith(a);
    } else {
      el.classList.add('unconfigured-link');
      el.title = 'Link not configured yet';
    }
  });
});
