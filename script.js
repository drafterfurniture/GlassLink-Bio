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
  {img:"assets/img/1.webp", link:"#"},
  {img:"assets/img/2.webp", link:"#"},
  {img:"assets/img/3.webp", link:"#"},
  {img:"assets/img/4.webp", link:"#"}
];

let g = document.getElementById("gallery");

gallery.forEach(item => {
  g.innerHTML += `
    <div class="item">
      <img src="${item.img}">
      <a href="${item.link}" target="_blank">
        <i class="fas fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  `;
});
