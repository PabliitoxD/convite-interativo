document.addEventListener('DOMContentLoaded', function(){
    const perg = document.getElementById('pergaminho');
    const anexo = document.getElementById('pergaminhoAnexo');
    const anexoImg = document.getElementById('anexoImg');
    const modalAnexo = document.getElementById('modalAnexo');
    const closeBtn = document.querySelector('.close-modal');
    if(!perg) return;

    function togglePerg() {
        const isOpen = perg.classList.contains('open');
        if(isOpen) {
            // enrolar
            perg.classList.remove('open');
            perg.setAttribute('aria-hidden','true');
        } else {
            // desenrolar
            perg.classList.add('open');
            perg.setAttribute('aria-hidden','false');
        }
    }

    // Abrir automaticamente após 2 segundos
    setTimeout(() => {
        togglePerg();
        // Mostrar anexo 10 segundos após a abertura do convite
        setTimeout(() => {
            if(anexo) {
                anexo.classList.add('show');
                anexo.setAttribute('aria-hidden','false');
            }
        }, 10000);
    }, 2000);

    // Clique no anexo para ampliar
    if(anexoImg) {
        anexoImg.addEventListener('click', function(e) {
            e.stopPropagation();
            if(modalAnexo) {
                modalAnexo.classList.add('show');
            }
        });
    }

    // Fechar modal ao clicar no X
    if(closeBtn) {
        closeBtn.addEventListener('click', function() {
            modalAnexo.classList.remove('show');
        });
    }

    // Fechar modal ao clicar fora da imagem
    if(modalAnexo) {
        modalAnexo.addEventListener('click', function(e) {
            if(e.target === modalAnexo) {
                modalAnexo.classList.remove('show');
            }
        });
    }

    // clique e teclado (enter/space) - só funciona quando já está aberto
    perg.addEventListener('click', function() {
        if(perg.classList.contains('open')) {
            togglePerg();
        }
    });
    perg.addEventListener('keydown', function(e){
        if((e.key === 'Enter' || e.key === ' ') && perg.classList.contains('open')) {
            e.preventDefault();
            togglePerg();
        }
    });
});
