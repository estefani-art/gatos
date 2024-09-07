function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let input = document.getElementById("gato");
  let valorDigitado = input.value;
  // let resultado=` <section  class="resultados-pesquisa" id="resultados-pesquisa">`
  let resultado = "";

  for (let gato of dado) {
    if (gato.nome.toLowerCase().includes(valorDigitado)) {
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
