const products = [
  {
    name: 'Samsung Galaxy S24 Ultra',
    price: 1200,
    stars: 5,
    reviews: 150,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1080/10805954/1345-samsung-galaxy-s24-ultra-12-256gb-negro-titanium-libre.jpg',
    link: 'https://www.pccomponentes.com/samsung-galaxy-s24-ultra-12-256gb-negro-titanium-libre-cargador'
  },
  {
    name: 'Apple MacBook Air M4',
    price: 1800,
    stars: 5,
    reviews: 200,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1087/10872313/1154-apple-macbook-air-apple-m4-10-nucleos-16-gb-512gb-ssd-gpu-10-nucleos-136-medianoche.jpg',
    link: 'https://www.pccomponentes.com/portatil-apple-macbook-air-apple-m4-10-nucleos-16-gb-512gb-ssd-gpu-10-nucleos-136-medianoche'
  },
  {
    name: 'PlayStation 5 Slim',
    price: 499,
    stars: 4,
    reviews: 320,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1080/10801090/157-sony-playstation-5-digital-slim.jpg',
    link: 'https://www.pccomponentes.com/sony-playstation-5-digital-slim'
  },
  {
    name: 'LG OLED55C34LA',
    price: 1300,
    stars: 4,
    reviews: 90,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1082/10826011/1223-lg-oled55c44la-55-oled-evo-ultrahd-4k-dolby-vision-webos24-ai-thinq.jpg',
    link: 'https://www.pccomponentes.com/lg-oled55c44la-55-oled-evo-ultrahd-4k-dolby-vision-webos24-ai-thinq'
  },
  {
    name: 'Xiaomi Robot Vacuum e12',
    price: 229,
    stars: 4,
    reviews: 400,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1073/10730456/1213-xiaomi-vacuum-mop-e12-robot-aspirador.jpg',
    link: 'https://www.pccomponentes.com/xiaomi-robot-vacuum-e12-robot-aspirador'
  },
  {
    name: 'Razer BlackWidow V3',
    price: 149,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/40/404668/1132-razer-blackwidow-v3-tenkeyless-teclado-gaming-retroiluminado-yellow-switch.jpg',
    link: 'https://www.pccomponentes.com/razer-blackwidow-v3-tkl-teclado-gaming-retroiluminado-yellow-switch'
  },
  {
    name: 'Logitech G502 X Plus',
    price: 129,
    stars: 5,
    reviews: 180,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1074/10744974/130-logitech-g502-x-plus-raton-inalambrico-gaming-rgb-13-botones-25600dpi-negro.jpg',
    link: 'https://www.pccomponentes.com/logitech-g502-x-plus-raton-inalambrico-gaming-rgb-13-botones-25600dpi-negro'
  },
  {
    name: 'HP OfficeJet Pro 8022e',
    price: 99,
    stars: 4,
    reviews: 70,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/39/392793/1766-hp-officejet-pro-8022e-impresora-multifuncion-wifi-6-meses-de-impresion-instant-ink-con-hp-caracteristicas.jpg',
    link: 'https://www.pccomponentes.com/hp-officejet-pro-8022e-impresora-multifuncion-wifi-6-meses-de-impresion-instant-ink-con-hp?refurbished'
  }
]

const productList = document.getElementById('product-list')

function renderProducts(items) {
  productList.innerHTML = ''
  items.forEach((product) => {
    const li = document.createElement('li')
    li.innerHTML = `
      <article>
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.seller}</p>
        <p>Precio: ${product.price} €</p>
        <p>⭐ ${product.stars} | ${product.reviews} reseñas</p>
        <a href="${product.link}" target="_blank">Ver producto</a>
      </article>
    `
    productList.appendChild(li)
  })
}

renderProducts(products)
