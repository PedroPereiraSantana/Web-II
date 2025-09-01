
function exibirPagina(paginaID) {
    const paginas= document.querySelectorAll('.pagina');
    paginas.forEach(pagina => pagina.classList.remove('ativo'))

    const paginaParaExibir = document.getElementById(paginaID);
    
    paginaParaExibir.classList.add('ativo')
}


document.getElementById('irParaPagina2').addEventListener('click', 
function(){
    exibirPagina('pagina2')
})

document.getElementById('irParaPagina1').addEventListener('click', 
function(){
    exibirPagina('pagina1')
})

document.getElementById('irParaPagina3').addEventListener('click',
    function(){
        exibirPagina('pagina3')
    }
)