// Obtendo todos os itens do acordeon
const accordionItems = document.querySelectorAll('.accordion-item');

// Adicionando um evento de clique para cada título de acordeon
accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    
    title.addEventListener('click', () => {
        // Toggle entre mostrar ou esconder o conteúdo
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
