const dadosEmpresas = {
    infotech: {
        contratado: [10, 20, 5],
        usoReal: [8, 15, 7]
    },
    innovatech: {
        contratado: [12, 18, 10],
        usoReal: [9, 14, 6]
    },
    globalventures: {
        contratado: [8, 22, 6],
        usoReal: [10, 16, 5]
    },
    futureworks: {
        contratado: [15, 15, 10],
        usoReal: [12, 13, 8]
    },
    neotech: {
        contratado: [9, 20, 7],
        usoReal: [11, 17, 6]
    }
};

let graficoContratado, graficoUsoReal;

function mostrarDadosEmpresa() {
    const empresa = document.getElementById("empresa").value;
    let detalhes = "";

    switch (empresa) {
        case "infotech":
            detalhes = `
                <h2 class="empresa-titulo">InfoTech</h2>
                <div class="empresa-txt-div">
                    <p class="empresa-txt"><strong>Endereço:</strong> Rua da Tecnologia, 123</p>
                    <p class="empresa-txt"><strong>Setor:</strong> Desenvolvimento de Software</p>
                    <p class="empresa-txt"><strong>Contato:</strong> (11) 1234-5678</p>
                    <p class="empresa-txt"><strong>Data de Abertura de Contrato:</strong> 01/01/2022</p>
                    <p class="empresa-txt"><strong>CNPJ:</strong> 12.345.678/0001-99</p>
                </div>
            `;
            break;
        case "innovatech":
            detalhes = `
                <h2 class="empresa-titulo">InnovaTech</h2>
                <div class="empresa-txt-div">
                    <p class="empresa-txt"><strong>Endereço:</strong> Avenida da Inovação, 456</p>
                    <p class="empresa-txt"><strong>Setor:</strong> Inovação e Pesquisa</p>
                    <p class="empresa-txt"><strong>Contato:</strong> (21) 9876-5432</p>
                    <p class="empresa-txt"><strong>Data de Abertura de Contrato:</strong> 15/03/2021</p>
                    <p class="empresa-txt"><strong>CNPJ:</strong> 98.765.432/0001-88</p>
                </div>
            `;
            break;
        case "globalventures":
            detalhes = `
                <h2 class="empresa-titulo">Global Ventures</h2>
                <div class="empresa-txt-div">
                    <p class="empresa-txt"><strong>Endereço:</strong> Alameda Global, 789</p>
                    <p class="empresa-txt"><strong>Setor:</strong> Investimentos e Startups</p>
                    <p class="empresa-txt"><strong>Contato:</strong> (31) 1122-3344</p>
                    <p class="empresa-txt"><strong>Data de Abertura de Contrato:</strong> 22/07/2020</p>
                    <p class="empresa-txt"><strong>CNPJ:</strong> 11.223.344/0001-77</p>
                </div>
            `;
            break;
        case "futureworks":
            detalhes = `
                <h2 class="empresa-titulo">FutureWorks</h2>
                <div class="empresa-txt-div">
                    <p class="empresa-txt"><strong>Endereço:</strong> Estrada do Futuro, 101</p>
                    <p class="empresa-txt"><strong>Setor:</strong> Tecnologia e Sustentabilidade</p>
                    <p class="empresa-txt"><strong>Contato:</strong> (41) 5566-7788</p>
                    <p class="empresa-txt"><strong>Data de Abertura de Contrato:</strong> 10/05/2019</p>
                    <p class="empresa-txt"><strong>CNPJ:</strong> 55.667.788/0001-66</p>
                </div>
            `;
            break;
        case "neotech":
            detalhes = `
                <h2 class="empresa-titulo">NeoTech</h2>
                <div class="empresa-txt-div">
                    <p class="empresa-txt"><strong>Endereço:</strong> Travessa da Inovação, 202</p>
                    <p class="empresa-txt"><strong>Setor:</strong> Inteligência Artificial e Robótica</p>
                    <p class="empresa-txt"><strong>Contato:</strong> (51) 9988-7766</p>
                    <p class="empresa-txt"><strong>Data de Abertura de Contrato:</strong> 30/08/2018</p>
                    <p class="empresa-txt"><strong>CNPJ:</strong> 22.334.556/0001-55</p>
                </div>
            `;
            break;
        default:
            detalhes = "<p>Selecione uma empresa para ver os detalhes.</p>";
            break;
    }

    document.getElementById("detalhes-empresa").innerHTML = detalhes;

    atualizarGraficos(empresa);
}

function atualizarGraficos(empresa) {
    const dados = dadosEmpresas[empresa];
    
    // Destruir gráficos antigos se existirem
    if (graficoContratado) graficoContratado.destroy();
    if (graficoUsoReal) graficoUsoReal.destroy();

    const ctxContratado = document.getElementById('grafico-contratado').getContext('2d');
    const ctxUsoReal = document.getElementById('grafico-uso-real').getContext('2d');

    graficoContratado = new Chart(ctxContratado, {
        type: 'bar',
        data: generateChartData(['Junior', 'Pleno', 'Senior'], dados.contratado, 'Consultores em uso'),
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    graficoUsoReal = new Chart(ctxUsoReal, {
        type: 'bar',
        data: generateChartData(['Junior', 'Pleno', 'Senior'], dados.usoReal, 'Consultores contratados'),
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function generateChartData(labels, data, label) {
    return {
        labels: labels,
        datasets: [{
            label: label,
            data: data,
            backgroundColor: ['rgba(25, 142, 123, 0.2)', 'rgba(15, 98, 255, 0.2)', 'rgba(117, 66, 254, 0.2)'],
            borderColor: ['rgba(25, 142, 123, 1)', 'rgba(15, 98, 255, 1)', 'rgba(117, 66, 254, 1)'],
            borderWidth: 1
        }]
    };
}