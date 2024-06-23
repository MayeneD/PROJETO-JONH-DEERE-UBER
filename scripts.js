// Coordenadas da empresa John Deere Brasil
var empresaLatLng = [-23.095185, -47.215916];

// Inicializando o mapa
var map = L.map('map', {
    center: empresaLatLng,
    zoom: 16,
    dragging: false, // Desativa arrasto
    zoomControl: false, // Desativa controles de zoom
    scrollWheelZoom: false, // Desativa zoom com roda do mouse
    doubleClickZoom: false, // Desativa zoom com duplo clique
    touchZoom: false // Desativa zoom por toque
});

// Adicionando o tile layer ao mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adicionando um marcador para a localização da empresa
var marker = L.marker(empresaLatLng).addTo(map)
    .bindPopup('Localização da Empresa John Deere.')
    .openPopup();

// Obter a altura do header para ajustar o scroll
var headerHeight = document.querySelector('header').offsetHeight;

// Função para ajustar a posição da navbar conforme o scroll
function adjustNavbarPosition() {
    var scrollPosition = window.scrollY;

    // Verificar se a posição do scroll passou o topo do header
    if (scrollPosition > headerHeight) {
        // Adicionar classe para fixar a navbar
        document.querySelector('nav').classList.add('navbar-fixed');
    } else {
        // Remover classe quando o scroll estiver acima do header
        document.querySelector('nav').classList.remove('navbar-fixed');
    }
}

// Chamar a função inicialmente e a cada evento de scroll
adjustNavbarPosition();
window.addEventListener('scroll', adjustNavbarPosition);
