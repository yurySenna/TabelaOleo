function salvarTroca() {
    const km = document.getElementById('kmRodados').value;
    const data = document.getElementById('dataTroca').value;
    const oleo = document.getElementById('txt-oleo').value;
    const veiculo = document.getElementById('veiculo').value;

    if (isNaN(km) || !km || !data) {
      alert('Preencha todos os campos validos!');
      return;
    }

    
    let trocas = JSON.parse(localStorage.getItem('trocasOleo')) || [];

    
    trocas.push({ km, data, oleo, veiculo });
    
    

    localStorage.setItem('trocasOleo', JSON.stringify(trocas));

    alert('Troca salva com sucesso!');
  }

  function mostrarTabela() {
    const trocas = JSON.parse(localStorage.getItem('trocasOleo')) || [];
    const corpo = document.getElementById('corpoTabela');
    corpo.innerHTML = '';

    trocas.forEach((troca) => {
      corpo.innerHTML += `
        <tr>
          <td>${troca.data.split('-').reverse().join('/')}</td>
          <td>${troca.veiculo}</td>
          <td>${troca.oleo}</td>
          <td>${troca.km}</td>
          
        </tr> 
      `;
    });

    document.getElementById('formulario').style.display = 'none';
    document.getElementById('tabelaContainer').style.display = 'block';
  }

  function voltarParaFormulario() {
  document.getElementById('formulario').style.display = 'flex'; 
  document.getElementById('tabelaContainer').style.display = 'none';

  
  document.getElementById('kmRodados').value = '';
  document.getElementById('txt-oleo').value = '';
  document.getElementById('dataTroca').value = '';
}
// window.onload = () => {
//     localStorage.clear(); // Apaga tudo ao abrir a página
// };







