// LINKS
fetch("links.json")
.then(res => res.json())
.then(data => {
  let el = document.getElementById("links");

  data.forEach(l => {
    el.innerHTML += `
      <a href="${l.url}" class="btn">
        <div class="btn-left">
          <i class="${l.icon}"></i>
          ${l.title}
        </div>
        <i class="fas fa-arrow-right"></i>
      </a>
    `;
  });
});

// GALLERY
const gallery = [
  {img:"assets/img/1.webp", link:"https://drafterfurniture.com"},
  {img:"assets/img/2.webp", link:"https://drafterfurniture.com"},
  {img:"assets/img/3.webp", link:"https://drafterfurniture.com"},
  {img:"assets/img/4.webp", link:"https://drafterfurniture.com"}
];

let g = document.getElementById("gallery");

gallery.forEach((item, index) => {
  g.innerHTML += `
    <div class="item">
      <img 
        src="${item.img}" 
        alt="Desain furniture custom Jepara ${index + 1}"
        loading="lazy"
      >

      <a 
  href="${item.link}" 
  target="_blank"
  aria-label="Lihat desain furniture ${index + 1}"
  title="Lihat desain"
  rel="noopener">
  
        <i class="fas fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  `;
});

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});
