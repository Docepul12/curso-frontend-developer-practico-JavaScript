// === SELECCIÓN DE ELEMENTOS DEL DOM ===
// Seleccionamos los elementos HTML que vamos a manipular usando sus clases CSS
// document.querySelector() busca el primer elemento que coincida con el selector CSS
const menuEmail = document.querySelector('.navbar-email'); // Botón de email en la barra de navegación
const desktopMenu = document.querySelector('.desktop-menu'); // Menú de escritorio
const menuHamIcon = document.querySelector('.menu'); // Ícono de hamburguesa para menú móvil
const menuCarIcon = document.querySelector('.navbar-shopping-cart'); // Ícono del carrito de compras
const mobileMenu = document.querySelector('.mobile-menu'); // Menú móvil
const aside = document.querySelector('.product-detail'); // Panel lateral (carrito de compras)
const productDetailContainer = document.querySelector('.product-detail'); // Panel de detalles del producto (mismo que aside en este caso)
const shoppingCartContainer = document.querySelector('.product-detail'); // Carrito (mismo que aside en este caso)
const cardsContainer = document.querySelector('.cards-container'); // Contenedor donde se mostrarán las tarjetas de productos

// === EVENT LISTENERS ===
// Agregamos "escuchadores de eventos" a los botones para que ejecuten funciones al hacer clic
// addEventListener('click', funcion) vincula un clic a una función específica
menuEmail.addEventListener('click', toggleDesktopMenu); // Clic en email → abre/cierra menú de escritorio
menuHamIcon.addEventListener('click', toggleMobileMenu); // Clic en hamburguesa → abre/cierra menú móvil
menuCarIcon.addEventListener('click', toggleCarritoAside); // Clic en carrito → abre/cierra carrito

// === FUNCIÓN PARA MENÚ DE ESCRITORIO ===
/**
 * Muestra u oculta el menú de escritorio
 * Cierra el carrito y el panel de detalles si están abiertos para evitar múltiples menús visibles
 */
function toggleDesktopMenu() {
  // Verificamos si el carrito está cerrado (tiene la clase 'inactive')
  const isAsideClosed = aside.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  // Si el carrito NO está cerrado, lo cerramos
  if (!isAsideClosed) {
    aside.classList.add('inactive'); // Oculta el carrito
  }

  // Si el panel de detalles NO está cerrado, lo cerramos
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); // Oculta el panel de detalles
  }

  // Alternamos la visibilidad del menú de escritorio
  desktopMenu.classList.toggle('inactive');
}

// === FUNCIÓN PARA MENÚ MÓVIL ===
/**
 * Muestra u oculta el menú móvil
 * Cierra el carrito y el panel de detalles si están abiertos para evitar múltiples menús visibles
 */
function toggleMobileMenu() {
  // Verificamos si el carrito y el panel de detalles están cerrados
  const isAsideClosed = aside.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  // Si el carrito NO está cerrado, lo cerramos
  if (!isAsideClosed) {
    aside.classList.add('inactive'); // Oculta el carrito
  }

  // Si el panel de detalles NO está cerrado, lo cerramos
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); // Oculta el panel de detalles
  }

  // Alternamos la visibilidad del menú móvil
  mobileMenu.classList.toggle('inactive');
}

// === FUNCIÓN PARA CARRITO DE COMPRAS ===
/**
 * Muestra u oculta el panel del carrito de compras
 * Cierra el menú móvil y el panel de detalles si están abiertos para evitar múltiples menús visibles
 */
function toggleCarritoAside() {
  // Verificamos si el menú móvil y el panel de detalles están cerrados
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  // Si el menú móvil NO está cerrado, lo cerramos
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); // Oculta el menú móvil
  }

  // Si el panel de detalles NO está cerrado, lo cerramos
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); // Oculta el panel de detalles
  }

  // Alternamos la visibilidad del carrito
  shoppingCartContainer.classList.toggle('inactive');
}

// === FUNCIÓN PARA ABRIR DETALLES DEL PRODUCTO ===
/**
 * Abre el panel de detalles del producto
 * Cierra el carrito si está abierto para evitar múltiples paneles visibles
 */
function openProductDetailAside() {
  // Cerramos el carrito si está abierto
  shoppingCartContainer.classList.add('inactive');
  // Abrimos el panel de detalles
  productDetailContainer.classList.remove('inactive');
}

// === FUNCIÓN PARA CERRAR DETALLES DEL PRODUCTO ===
/**
 * Cierra el panel de detalles del producto
 */
function closeProductDetailAside() {
  // Ocultamos el panel de detalles
  productDetailContainer.classList.add('inactive');
}

// === LISTA DE PRODUCTOS ===
/**
 * Creamos un arreglo para almacenar productos
 * Cada producto es un objeto con propiedades: nombre, precio e imagen
 */
const productList = [];

// Agregamos productos al arreglo usando push()
productList.push({
  name: 'Bike', // Nombre del producto
  price: 120, // Precio del producto
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL de la imagen
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

// === FUNCIÓN PARA RENDERIZAR PRODUCTOS ===
/**
 * Crea y muestra tarjetas de productos en la página
 * @param {Array} arr - Arreglo de productos con nombre, precio e imagen
 */
function renderProducts(arr) {
  // Iteramos sobre cada producto en el arreglo
  for (const product of arr) {
    // Creamos un contenedor para la tarjeta del producto
    const productCard = document.createElement('div');
    productCard.classList.add('product-card'); // Agregamos clase CSS para estilos

    // Creamos la imagen del producto
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image); // Establecemos la URL de la imagen
    productImg.addEventListener('click', openProductDetailAside); // Clic en imagen → abre detalles

    // Creamos un contenedor para la información del producto
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info'); // Agregamos clase CSS

    // Creamos un div para precio y nombre
    const productInfoDiv = document.createElement('div');

    // Creamos un elemento para el precio
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price; // Mostramos el precio con $

    // Creamos un elemento para el nombre
    const productName = document.createElement('p');
    productName.innerText = product.name; // Mostramos el nombre

    // Añadimos precio y nombre al div de información
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    // Creamos un contenedor para el ícono del carrito
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); // Ícono de agregar al carrito

    // Añadimos el ícono al contenedor figure
    productInfoFigure.appendChild(productImgCart);

    // Añadimos la información y el ícono al contenedor productInfo
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    // Añadimos la imagen y la información a la tarjeta del producto
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    // Añadimos la tarjeta al contenedor principal en la página
    cardsContainer.appendChild(productCard);
  }
}

// Ejecutamos la función para mostrar los productos
renderProducts(productList);

// === EXPLICACIÓN GENERAL PARA PRINCIPIANTES ===
// 1. ¿QUÉ ES ESTE CÓDIGO?
// Este código crea una interfaz interactiva para una tienda online.
// Controla menús (escritorio, móvil, carrito, detalles) y muestra productos en tarjetas.

// 2. ¿CÓMO FUNCIONA?
// - Selecciona elementos HTML (botones, menús, contenedores) usando clases CSS.
// - Escucha clics en botones para mostrar u ocultar menús/paneles.
// - Usa la clase 'inactive' para ocultar elementos (probablemente con display: none en CSS).
// - Crea dinámicamente tarjetas de productos con imagen, nombre, precio y un botón de carrito.

// 3. TÉRMINOS CLAVE:
// - DOM: El "esqueleto" de la página web, donde están todos los elementos HTML.
// - querySelector: Busca un elemento HTML por su clase (como '.navbar-email').
// - classList: Herramienta para agregar, quitar o verificar clases CSS.
// - addEventListener: "Escucha" acciones del usuario, como un clic.
// - toggle: Cambia entre dos estados (mostrar/ocultar).
// - createElement: Crea un nuevo elemento HTML (como un div o img).
// - appendChild: Añade un elemento dentro de otro en el DOM.

// 4. ¿POR QUÉ CERRAR OTROS MENÚS?
// Para mantener la página clara, solo un menú o panel debe estar visible a la vez.
// Ejemplo: Si abres el carrito, el menú móvil y el panel de detalles se cierran.

// 5. ESTRUCTURA DEL CÓDIGO:
// - Selección de elementos → Vinculación de eventos → Funciones de menús → Lista de productos → Renderizado de productos.