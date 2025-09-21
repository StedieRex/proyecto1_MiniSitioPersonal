document.addEventListener('DOMContentLoaded', function() {
  const seccionSecundaria = document.querySelector('.paginasSecundarias');
  const botonesPrincipales = document.querySelectorAll('.contenedor-botones-principales button');
  const btnRegresar = document.querySelector('.btn-regresar');
  const contenidosSecundarios = document.querySelectorAll('.contenido-secundario');
  
  // Preload de imágenes
  function preloadImages() {
    const imageUrls = [
      'ruta/imagen-acerca.jpg',
      'ruta/imagen-portafolio.jpg', 
      'ruta/imagen-contacto.jpg'
    ];
    
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }
  preloadImages();
  
  // Remover clases de fondo
  function removerClasesFondo() {
    seccionSecundaria.classList.remove('fondo-acerca', 'fondo-portafolio', 'fondo-contacto');
  }
  
  // Ocultar todos los contenidos secundarios
  function ocultarContenidos() {
    contenidosSecundarios.forEach(contenido => {
      contenido.style.display = 'none';
    });
    seccionSecundaria.classList.remove('contenido-activo');
  }
  
  // Eventos hover para botones principales
  botonesPrincipales.forEach(boton => {
    boton.addEventListener('mouseenter', function() {
      removerClasesFondo();
      if (boton.textContent === 'Acerca de mí') {
        seccionSecundaria.classList.add('fondo-acerca');
      } else if (boton.textContent === 'Portafolio') {
        seccionSecundaria.classList.add('fondo-portafolio');
      } else if (boton.textContent === 'Contacto') {
        seccionSecundaria.classList.add('fondo-contacto');
      }
    });
  });
  
  // Eventos click para botones principales
  document.querySelector('.portafolio button').addEventListener('click', function() {
    ocultarContenidos();
    document.querySelector('.contenido-portafolio').style.display = 'block';
    seccionSecundaria.classList.add('contenido-activo', 'fondo-portafolio');
  });
  
  document.querySelector('.contacto button').addEventListener('click', function() {
    ocultarContenidos();
    document.querySelector('.contenido-contacto').style.display = 'block';
    seccionSecundaria.classList.add('contenido-activo', 'fondo-contacto');
  });
  
  // Evento para botón de regreso
  btnRegresar.addEventListener('click', function() {
    ocultarContenidos();
    removerClasesFondo();
  });
  
  // Restaurar fondo original al salir de la sección
  seccionSecundaria.addEventListener('mouseleave', function() {
    if (!seccionSecundaria.classList.contains('contenido-activo')) {
      removerClasesFondo();
    }
  });
});
