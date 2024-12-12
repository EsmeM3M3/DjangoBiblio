// frontend/app.js
const API_URL = "http://localhost:8000/api/libros/";  // Ajusta la URL según tu API

const librosContainer = document.getElementById('libros');

async function cargarLibros() {
    try {
        const response = await fetch(API_URL);
        const libros = await response.json();
        mostrarLibros(libros);
    } catch (error) {
        console.error('Error al cargar libros:', error);
    }
}

function mostrarLibros(libros) {
    librosContainer.innerHTML = ''; // Limpiar contenido

    libros.forEach(libro => {
        const libroDiv = document.createElement('div');
        libroDiv.classList.add('libro');
        libroDiv.innerHTML = `
            <h3>${libro.titulo}</h3>
            <p><strong>Descripción:</strong> ${libro.descripcion}</p>
            <p><strong>Páginas:</strong> ${libro.num_paginas}</p>
        `;
        librosContainer.appendChild(libroDiv);
    });
}

cargarLibros();

