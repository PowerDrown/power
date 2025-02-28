// Função para carregar dados da API
function carregarDados() {
    fetch('https://fabiooliveira.cloud/api_01/')
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            exibirDados(data); // Passa os dados para exibição
        })
        .catch(error => {
            console.error('Erro ao carregar dados:', error);
        });
}

// Função para exibir os dados na página
function exibirDados(dados) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Limpa os dados anteriores

    // Verifica se há dados e exibe
    if (dados && Array.isArray(dados) && dados.length > 0) {
        dados.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('data-item');
            div.innerHTML = `
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
            `;
            container.appendChild(div);
        });
    } else {
        container.innerHTML = '<p>Nenhum dado disponível.</p>';
    }
}

// Inicializa a página com dados carregados
document.addEventListener('DOMContentLoaded', () => {
    carregarDados();

    // Adiciona evento ao botão para recarregar os dados
    document.getElementById('reload-button').addEventListener('click', carregarDados);
});
