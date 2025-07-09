const guitarras = [
  {
    img: "imgs/accoustic.webp",
    alt: "Guitarra Acústica Dreadnought",
    titulo: "Guitarra Acústica Dreadnought",
    descripcion: "Guitarra acústica de madera de cedro con un sonido cálido y resonante. Perfecta para principiantes y profesionales.",
    precioOriginal: "$450",
    precio: "$350"
  },
  {
    img: "imgs/strato.jpg",
    alt: "Guitarra Eléctrica Stratocaster",
    titulo: "Guitarra Eléctrica Stratocaster",
    descripcion: "Icónica guitarra eléctrica con pickups single-coil. Sonido versátil para rock, blues y pop.",
    precioOriginal: "$800",
    precio: "$650"
  },
  {
    img: "imgs/bass.webp",
    alt: "Bajo Eléctrico",
    titulo: "Bajo Eléctrico 5 Cuerdas",
    descripcion: "Bajo con cuerpo grande para un sonido potente y profundo. Ideal para country y folk.",
    precioOriginal: "$600",
    precio: "$480"
  },
  {
    img: "imgs/lespaul.jpg",
    alt: "Guitarra Eléctrica Les Paul",
    titulo: "Guitarra Eléctrica Les Paul",
    descripcion: "Guitarra de cuerpo sólido con pickups humbucker. Sonido potente perfecto para rock y metal.",
    precioOriginal: "$1200",
    precio: "$950"
  },
  {
    img: "imgs/spanish.jpg",
    alt: "Guitarra Flamenca",
    titulo: "Guitarra Flamenca",
    descripcion: "Guitarra española tradicional con maderas selectas. Sonido brillante y percusivo para flamenco.",
    precioOriginal: "$750",
    precio: "$580"
  },
  {
    img: "imgs/crords.jpg",
    alt: "Guitarra Acústica 12 Cuerdas",
    titulo: "Guitarra Acústica 12 Cuerdas",
    descripcion: "Guitarra de 12 cuerdas con sonido rico y armonioso. Perfecta para folk y música experimental.",
    precioOriginal: "$850",
    precio: "$720"
  }
];

function renderGuitarras() {
  const contenedor = document.getElementById('guitarras-lista');
  contenedor.innerHTML = guitarras.map(guitarra => `
    <div class="col-12 col-lg-4">
      <div class="card guitar-card border-0 shadow-sm h-100">
        <img src="${guitarra.img}" class="card-img-top guitar-img" alt="${guitarra.alt}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold">${guitarra.titulo}</h5>
          <p class="card-text text-muted flex-grow-1">${guitarra.descripcion}</p>
          <div class="mb-3">
            <span class="original-price me-2">${guitarra.precioOriginal}</span>
            <span class="price">${guitarra.precio}</span>
          </div>
          <div class="d-grid">
            <button class="btn btn-custom">
              <i class="fas fa-cart-plus me-2"></i>Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.guitar-img').forEach(img => {
  img.addEventListener('click', function() {
    document.getElementById('modalImg').src = this.src;
    var modal = new bootstrap.Modal(document.getElementById('imgModal'));
    modal.show();
  });
});

}

document.addEventListener('DOMContentLoaded', renderGuitarras);