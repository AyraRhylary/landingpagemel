const produtos = [                    
    { nome: "Mel Pooro", preco: 15.99 },
    { nome: "Mel com Limão", preco: 19.99 },
    { nome: "Mel com Canela", preco: 17.99 },
    { nome: "Mel Orgânicooh", preco: 24.99 }
];


function mostrarProdutos() {   
    const listaProdutos = document.getElementById('lista-produtos');

    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Preço: $${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">Adicionar ao Carrinho</button>
        `;
        listaProdutos.appendChild(divProduto);
    });
}

function adicionarAoCarrinho(nome, preco) {
    alert(`${nome} Foi adicionado ao carrinho por $${preco.toFixed(2)}`)
}

window.onload = mostrarProdutos