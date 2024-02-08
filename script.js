document.addEventListener("DOMContentLoaded", function() {
    const botaoAdicionar = document.getElementById("botao-adicionar");
    const novoItemInput = document.getElementById("novo-item");

    botaoAdicionar.addEventListener("click", function() {
        const novoItemTexto = novoItemInput.value.trim();
        if (novoItemTexto !== "") {
            adicionarItem(novoItemTexto);
            novoItemInput.value = "";
        }
    });

    function adicionarItem(texto) {
        const listaObjetosPessoais = document.getElementById("objetos-pessoais");
        const listaMaterialDormir = document.getElementById("material-dormir");
        const listaMaterialAlimentacao = document.getElementById("material-alimentacao");

        const novoItem = document.createElement("li");
        novoItem.innerHTML = `
            <div class="checkbox-container">
                <input type="checkbox" id="item-${Date.now()}">
                <label for="item-${Date.now()}"></label>
            </div>
            ${texto}
        `;

        if (listaObjetosPessoais) {
            listaObjetosPessoais.appendChild(novoItem);
        } else if (listaMaterialDormir) {
            listaMaterialDormir.appendChild(novoItem);
        } else if (listaMaterialAlimentacao) {
            listaMaterialAlimentacao.appendChild(novoItem);
        }
    }
});
