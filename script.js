/**
 * script.js
 * Lógica para Acordeão (Accordion) Exclusivo.
 *
 * NOTA: O código foi adaptado para fechar todas as outras seções
 * ao abrir uma nova, mantendo o comportamento "exclusivo" (um por vez)
 * baseado no que o código original indicava.
 */

/**
 * Alterna o estado de abertura/fechamento de um item do acordeão.
 * Fecha todos os outros itens para garantir que apenas um esteja ativo.
 * @param {string} sectionId - O ID da seção clicada (ex: 'section1').
 */
function toggleAccordion(sectionId) {
    // Determina o número da seção (ex: 'section1' -> '1')
    const sectionNumber = sectionId.slice(-1);

    const content = document.getElementById('content' + sectionNumber);
    const icon = document.getElementById('icon' + sectionNumber);
    
    // Lista de todas as seções para fechar as outras (ajustada para 4 seções)
    const ALL_SECTION_NUMBERS = [1, 2, 3, 4];
    
    // 1. Fecha todas as outras seções
    ALL_SECTION_NUMBERS.forEach(i => {
        // Ignora a seção atual
        if (i.toString() !== sectionNumber) {
            const otherContent = document.getElementById('content' + i);
            const otherIcon = document.getElementById('icon' + i);
            
            if (otherContent && otherIcon) {
                otherContent.classList.remove('active');
                otherIcon.classList.remove('rotated');
            }
        }
    });

    // 2. Alterna a seção clicada
    if (content && icon) {
        content.classList.toggle('active');
        icon.classList.toggle('rotated');
    }
}

/**
 * Abre a primeira seção por padrão (Comportamento original mantido).
 */
document.addEventListener('DOMContentLoaded', function() {
    // Usar um pequeno timeout ajuda a garantir que o efeito de transição
    // (max-height) funcione corretamente na carga inicial.
    setTimeout(() => {
        // Verifica se a primeira seção existe antes de tentar abri-la
        if (document.getElementById('content1')) {
             toggleAccordion('section1');
        }
    }, 10);
});
