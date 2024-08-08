// BUSCAR TODOS OS PRODUTOS
async function buscarListaProdutos() {
  const url = "https://programa-desenvolve.vercel.app/produtos";
  const productList = document.getElementById("product-list");
  const productLabel = document.getElementById("product-list-label");

  try {
    const response = await fetch(url);
    const produtos = await response.json();

    // Limpar a lista e o label
    productList.innerHTML = "";
    productLabel.textContent = "";

    // Verificar se há produtos
    if (produtos.length > 0) {
      productLabel.textContent = "Lista de Produtos:";

      produtos.forEach((produto) => {
        const listItem = document.createElement("li");
        listItem.textContent = `ID: ${produto._id} - Título: ${produto.titulo} - Preço Atual: R$ ${produto.preco_atual}`;
        productList.appendChild(listItem);
      });
    } else {
      productLabel.textContent = "Nenhum produto encontrado.";
    }
  } catch (error) {
    productLabel.textContent = "Erro ao buscar os produtos.";
    console.error("Erro:", error);
  }
}

// BUSCAR PRODUTOS POR ID

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-by-id-form");
  const productDetailsLabel = document.getElementById("product-details-label");
  const productDetails = document.getElementById("product-details");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    const productId = document.getElementById("product-id").value.trim();

    if (productId) {
      try {
        const response = await fetch(
          `https://programa-desenvolve.vercel.app/produtos/${productId}`
        );

        if (!response.ok) {
          throw new Error(`Produto não encontrado: ${response.statusText}`);
        }

        const data = await response.json();

        // Limpar conteúdo anterior
        productDetails.innerHTML = "";
        productDetailsLabel.textContent = "";

        // Exibir detalhes do produto
        productDetails.innerHTML = `
            <h2>Detalhes do Produto</h2>
            <p><strong>ID:</strong> ${data._id}</p>
            <p><strong>Nome:</strong> ${data.titulo}</p>
            <p><strong>Descrição:</strong> ${data.preco_atual}</p>
            <p><strong>Preço:</strong> R$ ${data.preco_antigo}</p>
          `;
      } catch (error) {
        productDetails.innerHTML = "";
        productDetailsLabel.textContent = `Erro: ${error.message}`;
      }
    } else {
      productDetails.innerHTML = "";
      productDetailsLabel.textContent = "Por favor, insira um ID de produto.";
    }
  });
});

// ATUALIZAR DADOS POR ID

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("update-product-form");
  const updateResultLabel = document.getElementById("update-result-label");
  const updateResult = document.getElementById("update-result");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    const productId = document.getElementById("update-product-id").value.trim();
    const productJson = document
      .getElementById("update-product-json")
      .value.trim();

    try {
      const productData = JSON.parse(productJson);

      // Verifica se o ID está presente e o JSON não está vazio
      if (productId && Object.keys(productData).length > 0) {
        const response = await fetch(
          `https://programa-desenvolve.vercel.app/produtos/${productId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
          }
        );

        if (!response.ok) {
          throw new Error(
            `Erro ao atualizar o produto: ${response.statusText}`
          );
        }

        const data = await response.json();

        // Exibir mensagem de sucesso
        updateResult.innerHTML = `<p>Produto atualizado com sucesso! Novo nome: ${
          data.nome || "não disponível"
        }</p>`;
        updateResultLabel.textContent = "";
      } else {
        updateResult.innerHTML = "";
        updateResultLabel.textContent =
          "O ID do produto e os dados JSON são obrigatórios.";
      }
    } catch (error) {
      updateResult.innerHTML = "";
      updateResultLabel.textContent = `Erro: ${error.message}`;
    }
  });
});

// CRIAR PRODUTO
// Função para criar um produto
async function criarProduto(event) {
  event.preventDefault(); // Evita o comportamento padrão de envio do formulário

  const form = document.getElementById("create-product-form");
  const jsonData = document.getElementById("create-product-json").value;

  try {
    const response = await fetch(
      "https://programa-desenvolve.vercel.app/produtos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      }
    );

    if (!response.ok) {
      throw new Error(`Erro: ${response.statusText}`);
    }

    const result = await response.json();
    document.getElementById(
      "create-result"
    ).innerText = `Produto criado com sucesso: ${JSON.stringify(result)}`;
  } catch (error) {
    document.getElementById(
      "create-result"
    ).innerText = `Erro ao criar produto: ${error.message}`;
  }
}

// Adiciona o listener de evento para o formulário de criação
document
  .getElementById("create-product-form")
  .addEventListener("submit", criarProduto);

// DELETAR PRODUTO

// Função para deletar um produto
async function deletarProduto(event) {
  event.preventDefault(); // Evita o comportamento padrão de envio do formulário

  const productId = document.getElementById("delete-product-id").value;

  try {
    const response = await fetch(
      `https://programa-desenvolve.vercel.app/produtos/${productId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`Erro: ${response.statusText}`);
    }

    const result = await response.json();
    document.getElementById(
      "delete-result"
    ).innerText = `Produto deletado com sucesso: ${JSON.stringify(result)}`;
  } catch (error) {
    document.getElementById(
      "delete-result"
    ).innerText = `Erro ao deletar produto: ${error.message}`;
  }
}

// Adiciona o listener de evento para o formulário de deleção
document
  .getElementById("delete-product-form")
  .addEventListener("submit", deletarProduto);
