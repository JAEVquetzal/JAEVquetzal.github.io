document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll(".block");

    // Función para mostrar los bloques de manera secuencial
    function showBlocksSequentially(blocks, index) {
        if (index >= blocks.length) return;

        const block = blocks[index];
        block.style.opacity = 0; // Aseguramos que el bloque esté oculto
        block.style.transition = "opacity 1s ease-in-out"; // Definimos la transición

        // Mostramos el bloque después de un breve retraso
        setTimeout(() => {
            block.style.opacity = 1;
            showBlocksSequentially(blocks, index + 1);
        }, 1000); // Ajusta el retraso según lo necesites
    }

    // Inicia la secuencia de mostrar bloques
    showBlocksSequentially(blocks, 0);
});

// Funcionalidad para el botón "Siguiente"
document.querySelector(".button").addEventListener("click", function() {
    window.location.href = 'Pages/Conceptos/Conceptos.html';
});