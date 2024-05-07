//ADICIONAR TRIPULANTES E ADICIONAR 

function addCrewItem() {
    const crewContainer = document.getElementById("crewContainer");
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "crewItem";
    newInput.name = "crew[]";
    newInput.required = true;
    crewContainer.appendChild(newInput);
}

function addPayloadItem() {
    const payloadContainer = document.getElementById("payloadContainer");
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "payloadItem";
    newInput.name = "payload[]";
    newInput.required = true;
    payloadContainer.appendChild(newInput);
}





// URL da API
const apiUrl = 'https://api.example.com/missions';

// Função para preencher a tabela de missões
function fillMissionsTable(missionsData) {
    const tbody = document.querySelector("#missions_table tbody");
    tbody.innerHTML = ""; // Limpa os dados antigos da tabela

    missionsData.forEach(mission => {
        const row = `<tr>
                        <td>${mission.nome}</td>
                        <td>${mission.data_lancamento}</td>
                        <td>${mission.destino}</td>
                        <td>${mission.estado_missao}</td>
                        <td>${mission.duracao_missao}</td>
                        <td>${mission.destino}</td>
                        <td>
                            <button>Editar</button>
                            <button>Excluir</button>
                        </td>
                    </tr>`;
        tbody.innerHTML += row;
    });
}

// Função para fazer a requisição à API e preencher a tabela
function pesquisarMissao() {
    const startDate = document.getElementById('start_date').value;
    const endDate = document.getElementById('end_date').value;
    const url = `${apiUrl}?start_date=${startDate}&end_date=${endDate}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao conectar-se à API');
            }
            return response.json();
        })
        .then(data => {
            fillMissionsTable(data); // Preenche a tabela com os dados obtidos
        })
        .catch(error => {
            console.error('Erro ao obter dados das missões:', error);
            // Exibe o modal de erro
            document.getElementById('error_modal').style.display = 'block';
        });
}

// Função para fechar o modal de erro
function fecharModal() {
    document.getElementById('error_modal').style.display = 'none';
}

// Função para limpar os dados da tabela
function limparDados() {
    document.querySelector("#missions_table tbody").innerHTML = "";
}