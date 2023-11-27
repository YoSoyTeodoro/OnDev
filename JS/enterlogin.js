function abrirModal() {
    document.getElementById('meuModal').style.display = 'block';
  }

  // Função para fechar o modal
  function fecharModal() {
    document.getElementById('meuModal').style.display = 'none';
  }

  // Fechar o modal ao clicar fora dele
  window.onclick = function(event) {
    const modal = document.getElementById('meuModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }