// Adicionar event listener para o formulário de criação de missão
document.getElementById('createMissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio padrão do formulário

    // Capturar os dados do formulário
    const nome_missao = document.getElementById('nome_da_missao').value;
    const data_lancamento = document.getElementById('data da lancamento').value;
    const destino = document.getElementById('destino').value;
    const estado_missao = document.getElementById('status_da_missao').value;
    const duracao_missao = document.getElementById('duracao').value;
    const custo_missao = parseFloat(document.getElementById('mission_cost').value);

    // Capturar dados da tripulação e carga útil
    const tripulacaoElements = document.getElementsByClassName('crewItem');
    const tripulacao = Array.from(tripulacaoElements).map(element => element.value).join(', ');

    const cargaUtilElements = document.getElementsByClassName('payloadItem');
    const carga_util = Array.from(cargaUtilElements).map(element => element.value).join(', ');

    // Criar objeto de missão
    const missao = {
        nome_missao: nome_missao,
        data_lancamento: data_lancamento,
        destino: destino,
        estado_missao: estado_missao,
        tripulacao: tripulacao,
        carga_util: carga_util,
        duracao_missao: `${duracao_missao} meses`,
        custo_missao: custo_missao,
        status_missao: 'planejado' // ou outro status padrão, se necessário
    };

    // Chamar a função para cadastrar a missão
    cadastrarMissao(missao)
        .then(data => {
            console.log('Missão cadastrada com sucesso:', data);
            document.getElementById('errorMessage').style.display = 'none'; // Esconder mensagem de erro, se visível
            // Aqui você pode adicionar lógica para atualizar a interface do usuário, se necessário
        })
        .catch(error => {
            console.error('Erro ao cadastrar missão:', error);
            document.getElementById('errorMessage').innerText = error.message;
            document.getElementById('errorMessage').style.display = 'block'; // Mostrar mensagem de erro
        });
});

// Função para cadastrar uma nova missão
async function cadastrarMissao(missao) {
    try {
        const response = await fetch('http://127.0.0.1:2961/criar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(missao)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Missão cadastrada com sucesso:', data);
            return data;
        } else {
            const errorData = await response.json();
            console.error('Erro ao cadastrar missão:', errorData);
            throw new Error(errorData.message || 'Erro desconhecido ao cadastrar missão');
        }
    } catch (error) {
        console.error('Erro ao fazer solicitação:', error);
        throw error;
    }
}

// Função para adicionar novo campo de tripulante
function addCrewItem() {
    const container = document.getElementById('crewContainer');
    const newItem = document.createElement('input');
    newItem.type = 'text';
    newItem.className = 'crewItem';
    newItem.name = 'crew[]';
    newItem.required = true;
    container.appendChild(newItem);
}

// Função para adicionar novo campo de carga útil
function addPayloadItem() {
    const container = document.getElementById('payloadContainer');
    const newItem = document.createElement('input');
    newItem.type = 'text';
    newItem.className = 'payloadItem';
    newItem.name = 'payload[]';
    newItem.required = true;
    container.appendChild(newItem);
}
