<script>
    document.querySelectorAll('.accordion-title').forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            const activeClass = 'active';
            content.classList.toggle(activeClass);
            item.classList.toggle(activeClass);
        });
    });
</script>
