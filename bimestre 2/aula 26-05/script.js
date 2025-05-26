const titulo = document.getElementById("titulo-isbn")
const autor = document.getElementById("autor")
const paginas = document.getElementById("pag")
const publicacao = document.getElementById("public")
const sinopse = document.getElementById("sinopse")

const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`

function buscarLivro(){
    const livro = document.getElementById("ibsn").value;

    fetch(url)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
            if (data.erro) {
                alert("livro não encontrado...");
                return
            }
            titulo.value = data.title
            autor.value = data.authors
            paginas.value = data.page_count
            publicacao.value = data.year
            sinopse.value = data.synopsis
        })
        .catch((error) => {
            console.error(error);
            alert("Erro ao buscar o livro. Tente novamente.")
        })

}