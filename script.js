function toggleAccordion(contentId, iconId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);

    // 1. Fecha todas as outras seções antes de abrir a atual
    for (let i = 1; i <= 4; i++) {
        const otherContent = document.getElementById('content' + i);
        const otherIcon = document.getElementById('icon' + i);
        
        // Se for a seção atual, apenas pula a iteração
        if (contentId === otherContent.id) continue;
        
        // Remove as classes de todas as outras seções
        if (otherContent && otherIcon) {
            // Mantenha o nome 'expanded' que foi usado no CSS no HTML
            otherContent.classList.remove('expanded');
            otherIcon.classList.remove('rotated');
        }
    }

    // 2. Alterna a seção clicada (se já estiver aberta, fecha; se estiver fechada, abre)
    if (content && icon) {
        // Mantenha o nome 'expanded' que foi usado no CSS no HTML
        content.classList.toggle('expanded');
        icon.classList.toggle('rotated');
    }
}

// Abre a primeira seção por padrão ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Chamada correta para abrir a primeira seção
    toggleAccordion('content1', 'icon1'); 
});

// A função toggleAccordion no HTML (onclick) deve ser chamada assim:
// onclick="toggleAccordion('content1', 'icon1')"
