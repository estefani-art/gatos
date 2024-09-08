function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let input = document.getElementById("gato");
  let valorDigitado = input.value.toLowerCase();
  let resultado = "";

  for (let gato of dado) {
    if (gato.nome.toLowerCase().includes(valorDigitado) || gato.descricao.toLowerCase().includes(valorDigitado) || gato.peso.toLowerCase().includes(valorDigitado)) {
      let nome = gato.nome;
      let peso = gato.peso;
      let descricao = gato.descricao;
      let link = gato.link;
      let imagem = gato.imagem;

      resultado += `
        <div class="item-resultado" >
                      <div>
                        <div class="imagem">
                          <img src="${imagem}" />
                        </div>
                      </div>
                      <div>
                        <h2>
                          <a href="#" target="_blank"
                            >${nome}</a
                          >
                        </h2>
                        <p class="descricao-meta">
                          ${descricao}
                        </p>
                        <a
                          href="${link}"
                          target="_blank"
                          >Mais informações</a
                        >
                      </div>
                    </div>`;
    }
  }
  if (resultado == "") {
    section.innerHTML = `
      <div class="item-resultado" > Nenhum gato </div>`;
  
  } else {
    section.innerHTML = resultado;
  }
}
